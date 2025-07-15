import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// HubSpot API integration (using Private Apps)
async function createHubSpotContact(formData: any) {
  const hubspotAccessToken = Deno.env.get('HUBSPOT_ACCESS_TOKEN');
  
  if (!hubspotAccessToken) {
    console.log('HubSpot Access Token not configured, skipping HubSpot integration');
    return null;
  }

  try {
    const contactData = {
      properties: {
        email: formData.email,
        firstname: formData.name?.split(' ')[0] || formData.name,
        lastname: formData.name?.split(' ').slice(1).join(' ') || '',
        company: formData.company || '',
        jobtitle: formData.role || '',
        phone: formData.phone || '',
        hs_lead_status: 'NEW',
        lifecyclestage: 'lead',
        lead_source: 'Website Form'
      }
    };

    // Create or update contact
    const contactResponse = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${hubspotAccessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });

    if (!contactResponse.ok) {
      // If contact exists, try to update it
      if (contactResponse.status === 409) {
        console.log('Contact already exists in HubSpot, attempting to update');
        return await updateHubSpotContact(formData.email, contactData, hubspotAccessToken);
      }
      throw new Error(`HubSpot contact creation failed: ${contactResponse.status}`);
    }

    const contact = await contactResponse.json();
    console.log('HubSpot contact created:', contact.id);

    // Create a deal for this lead
    const dealData = {
      properties: {
        dealname: `Website Lead - ${formData.name} (${formData.company || 'No Company'})`,
        dealstage: 'appointmentscheduled',
        pipeline: 'default',
        amount: '0',
        closedate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        deal_source: 'Website Form'
      },
      associations: [
        {
          to: { id: contact.id },
          types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 3 }]
        }
      ]
    };

    const dealResponse = await fetch('https://api.hubapi.com/crm/v3/objects/deals', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${hubspotAccessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dealData),
    });

    if (dealResponse.ok) {
      const deal = await dealResponse.json();
      console.log('HubSpot deal created:', deal.id);
      return { contact, deal };
    } else {
      console.error('HubSpot deal creation failed:', await dealResponse.text());
      return { contact, deal: null };
    }

  } catch (error) {
    console.error('HubSpot integration error:', error);
    return null;
  }
}

async function updateHubSpotContact(email: string, contactData: any, hubspotAccessToken: string) {
  try {
    // Search for contact by email
    const searchResponse = await fetch(`https://api.hubapi.com/crm/v3/objects/contacts/search`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${hubspotAccessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        filterGroups: [{
          filters: [{
            propertyName: 'email',
            operator: 'EQ',
            value: email
          }]
        }]
      }),
    });

    if (searchResponse.ok) {
      const searchResult = await searchResponse.json();
      if (searchResult.results && searchResult.results.length > 0) {
        const contactId = searchResult.results[0].id;
        
        // Update the contact
        const updateResponse = await fetch(`https://api.hubapi.com/crm/v3/objects/contacts/${contactId}`, {
          method: 'PATCH',
          headers: {
            'Authorization': `Bearer ${hubspotAccessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(contactData),
        });

        if (updateResponse.ok) {
          const updatedContact = await updateResponse.json();
          console.log('HubSpot contact updated:', contactId);
          return { contact: updatedContact, deal: null };
        }
      }
    }
  } catch (error) {
    console.error('Error updating HubSpot contact:', error);
  }
  return null;
}

interface FormSubmission {
  formType: 'contact' | 'lead';
  csrfToken: string;
  formData: any;
  honeypot: string;
  fillTime: number;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const clientIP = req.headers.get('x-forwarded-for') || 
                    req.headers.get('x-real-ip') || 
                    'unknown';
    const userAgent = req.headers.get('user-agent') || '';

    const submission: FormSubmission = await req.json();
    
    console.log('Form submission received:', {
      formType: submission.formType,
      ip: clientIP,
      fillTime: submission.fillTime
    });

    // Проверяем rate limiting (максимум 5 отправок в час с одного IP)
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
    const { data: recentSubmissions, error: rateLimitError } = await supabase
      .from('form_submissions_log')
      .select('id')
      .eq('ip_address', clientIP)
      .gte('created_at', oneHourAgo.toISOString());

    if (rateLimitError) {
      console.error('Rate limit check error:', rateLimitError);
    }

    if (recentSubmissions && recentSubmissions.length >= 5) {
      console.log('Rate limit exceeded for IP:', clientIP);
      return new Response(
        JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 429,
        }
      );
    }

    // Проверяем CSRF токен
    const { data: csrfTokenData, error: csrfError } = await supabase
      .from('csrf_tokens')
      .select('id, expires_at, used')
      .eq('token', submission.csrfToken)
      .single();

    if (csrfError || !csrfTokenData || csrfTokenData.used || 
        new Date(csrfTokenData.expires_at) < new Date()) {
      console.log('Invalid CSRF token for IP:', clientIP);
      return new Response(
        JSON.stringify({ error: 'Invalid or expired security token' }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 403,
        }
      );
    }

    // Отмечаем токен как использованный
    await supabase
      .from('csrf_tokens')
      .update({ used: true })
      .eq('token', submission.csrfToken);

    // Анализируем подозрительность
    const suspiciousReasons: string[] = [];
    let isSuspicious = false;

    // Проверка honeypot
    if (submission.honeypot && submission.honeypot.trim() !== '') {
      suspiciousReasons.push('honeypot_filled');
      isSuspicious = true;
    }

    // Проверка времени заполнения (слишком быстро = бот)
    if (submission.fillTime < 5000) { // меньше 5 секунд
      suspiciousReasons.push('too_fast_submission');
      isSuspicious = true;
    }

    // Проверка слишком долгого заполнения (возможно покинул страницу)
    if (submission.fillTime > 30 * 60 * 1000) { // больше 30 минут
      suspiciousReasons.push('too_slow_submission');
    }

    // Простая проверка на спам в тексте
    const formDataStr = JSON.stringify(submission.formData).toLowerCase();
    const spamKeywords = ['viagra', 'casino', 'lottery', 'winner', 'congratulations'];
    if (spamKeywords.some(keyword => formDataStr.includes(keyword))) {
      suspiciousReasons.push('spam_keywords');
      isSuspicious = true;
    }

    // MX валидация email на сервере
    if (submission.formData.email) {
      try {
        const emailDomain = submission.formData.email.split('@')[1];
        if (emailDomain) {
          // Простая проверка на часто используемые одноразовые email домены
          const disposableEmailDomains = [
            '10minutemail.com', 'tempmail.org', 'guerrillamail.com',
            'mailinator.com', 'throwaway.email'
          ];
          if (disposableEmailDomains.includes(emailDomain.toLowerCase())) {
            suspiciousReasons.push('disposable_email');
            isSuspicious = true;
          }
        }
      } catch (error) {
        console.error('Email validation error:', error);
      }
    }

    // Логируем отправку
    const { error: logError } = await supabase
      .from('form_submissions_log')
      .insert({
        ip_address: clientIP,
        user_agent: userAgent,
        form_type: submission.formType,
        submission_data: submission.formData,
        is_suspicious: isSuspicious,
        suspicious_reasons: suspiciousReasons
      });

    if (logError) {
      console.error('Error logging submission:', logError);
    }

    // Если подозрительно, не обрабатываем
    if (isSuspicious) {
      console.log('Suspicious submission detected:', suspiciousReasons);
      return new Response(
        JSON.stringify({ error: 'Submission rejected due to security concerns' }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 422,
        }
      );
    }

    // Интеграция с HubSpot CRM
    const hubspotResult = await createHubSpotContact(submission.formData);
    
    console.log('Valid form submission processed:', submission.formType);
    if (hubspotResult) {
      console.log('HubSpot integration successful:', {
        contactId: hubspotResult.contact?.id,
        dealId: hubspotResult.deal?.id
      });
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Form submitted successfully',
        hubspotIntegrated: !!hubspotResult
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );

  } catch (error) {
    console.error('Error in submit-form function:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});