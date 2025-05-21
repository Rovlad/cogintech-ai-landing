
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Saved $480K USD in avoided downtime with a 6-hour full pipeline report that would have taken weeks before.",
      company: "Major Gulf Coast Refinery",
      person: "Integrity Manager"
    },
    {
      quote: "The AI identified a critical flaw that our team had missed in previous manual reviews, preventing potential catastrophic failure.",
      company: "North Sea Operator",
      person: "Technical Lead"
    },
    {
      quote: "Cut our inspection analysis costs by 35% while actually improving the quality and consistency of our reports.",
      company: "Midstream Pipeline Company",
      person: "Reliability Director"
    }
  ];

  const stats = [
    { value: "30%", label: "Average Cost Reduction" },
    { value: "24h", label: "Typical Report Delivery" },
    { value: "95%+", label: "Analysis Accuracy" },
    { value: "100%", label: "Client Retention Rate" }
  ];

  return (
    <section id="testimonials" className="section bg-gradient-to-b from-background to-muted">
      <div className="container px-0 sm:px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 px-4 sm:px-0">
          <h2 className="section-title">
            Real <span className="text-cogintech-blue">Results</span> from Real Clients
          </h2>
          <p className="text-lg text-foreground/80">
            Companies across the oil and gas industry are already benefiting from our AI-powered approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 px-0 sm:px-4">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-border hover:shadow-md transition-shadow w-full">
              <CardContent className="p-6">
                <div className="text-4xl text-cogintech-blue mb-4">"</div>
                <blockquote className="mb-6 text-lg">
                  {testimonial.quote}
                </blockquote>
                <div>
                  <div className="font-semibold">{testimonial.company}</div>
                  <div className="text-foreground/60 text-sm">{testimonial.person}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-border p-8 mx-0 sm:max-w-4xl sm:mx-auto w-full">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold">Our Performance at a Glance</h3>
            <p className="text-foreground/80">Measurable results across all client implementations</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cogintech-teal mb-2">{stat.value}</div>
                <div className="text-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-cogintech-blue/5 rounded-lg border border-cogintech-blue/20 text-center w-full">
            <p className="font-medium text-cogintech-blue">
              On average, our clients see ROI within the first 3 months of implementation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
