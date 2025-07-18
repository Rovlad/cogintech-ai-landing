import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const faqs = [
    {
      question: "How long does deployment take?",
      answer: "Typical deployment takes 2-4 weeks for cloud installations and 4-6 weeks for on-premises. This includes data migration, system integration, and team training."
    },
    {
      question: "Who owns the data and insights?",
      answer: "You maintain complete ownership of all your data and insights. We provide the AI platform and tools, but all outputs and analysis results belong to your organization."
    },
    {
      question: "What kind of support do you provide?",
      answer: "All customers receive 24/7 technical support, a dedicated customer success manager, quarterly business reviews, and access to our engineering team for custom integrations."
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Yes, our platform includes comprehensive REST APIs and pre-built connectors for common systems like SAP, Maximo, and other CMMS platforms. Custom integrations are included in all plans."
    },
    {
      question: "What's included in the sandbox environment?",
      answer: "The sandbox includes sample integrity data, full access to AI analysis tools, dashboard functionality, and document management features. It's read-only to protect sample data integrity."
    },
    {
      question: "How do you ensure data security?",
      answer: "We use enterprise-grade encryption (AES-256), SOC-2 compliance processes, and offer flexible deployment options including on-premises installation for maximum security control."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50/50 to-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Frequently asked questions
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Common questions from integrity engineers and IT decision makers.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg border border-gray-200 px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div id="demo-form" className="text-center mt-12">
          <p className="text-foreground/70 mb-4">Still have questions?</p>
          <Button 
            size="lg"
            className="bg-cogintech-orange hover:bg-cogintech-orange/90 text-white font-medium px-8 py-6"
            onClick={() => {
              document.getElementById('book-demo')?.scrollIntoView({
                behavior: 'smooth'
              });
            }}
          >
            Book a 15-minute demo call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;