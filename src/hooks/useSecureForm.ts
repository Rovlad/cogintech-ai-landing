import { useState, useEffect, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface UseSecureFormOptions {
  formType: 'contact' | 'lead';
}

export const useSecureForm = ({ formType }: UseSecureFormOptions) => {
  const [csrfToken, setCsrfToken] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const formStartTime = useRef<number>(Date.now());
  const { toast } = useToast();

  // Генерируем CSRF токен при загрузке формы
  useEffect(() => {
    const generateCSRFToken = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('generate-csrf-token');
        
        if (error) {
          console.error('Error generating CSRF token:', error);
          return;
        }
        
        if (data?.token) {
          setCsrfToken(data.token);
        }
      } catch (error) {
        console.error('Failed to generate CSRF token:', error);
      }
    };

    generateCSRFToken();
  }, []);

  const submitForm = async (formData: any, captchaToken: string) => {
    if (!csrfToken) {
      toast({
        title: "Security Error",
        description: "Security token not available. Please refresh the page.",
        variant: "destructive"
      });
      return false;
    }

    setIsSubmitting(true);

    try {
      const fillTime = Date.now() - formStartTime.current;
      
      const submission = {
        formType,
        csrfToken,
        formData,
        honeypot,
        fillTime,
        captchaToken
      };

      const { data, error } = await supabase.functions.invoke('submit-form', {
        body: submission
      });

      if (error) {
        throw error;
      }

      if (data?.success) {
        toast({
          title: "Success",
          description: "Your message has been sent successfully!",
        });
        
        // Генерируем новый CSRF токен для следующей отправки
        const { data: newTokenData } = await supabase.functions.invoke('generate-csrf-token');
        if (newTokenData?.token) {
          setCsrfToken(newTokenData.token);
        }
        
        // Сбрасываем время начала заполнения
        formStartTime.current = Date.now();
        setHoneypot('');
        
        return true;
      } else {
        throw new Error(data?.error || 'Unknown error occurred');
      }
    } catch (error: any) {
      console.error('Form submission error:', error);
      
      let errorMessage = 'Failed to send message. Please try again.';
      
      if (error.message?.includes('Rate limit exceeded')) {
        errorMessage = 'You have submitted too many forms recently. Please wait before trying again.';
      } else if (error.message?.includes('security')) {
        errorMessage = 'Security validation failed. Please refresh the page and try again.';
      }
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive"
      });
      
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    csrfToken,
    isSubmitting,
    honeypot,
    setHoneypot,
    submitForm
  };
};