
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "XYZ Oil Corporation: 30% Cost Reduction in Equipment Analysis",
      industry: "Upstream Oil & Gas",
      challenge: "XYZ Oil was spending millions annually on manual equipment integrity analysis with slow turnaround times.",
      solution: "Implemented Cogintech's AI analysis platform to automate inspection reporting and anomaly detection.",
      results: [
        "30% reduction in analysis costs",
        "Report delivery time reduced from 45 days to 24 hours",
        "96% AI analysis accuracy, verified by QA teams",
        "Identified critical flaw missed in previous manual inspection"
      ],
      image: "https://images.unsplash.com/photo-1589758443012-487e435eb841"
    },
    {
      title: "GlobalGas: Improving Safety Through AI-Powered Insights",
      industry: "Midstream Gas Processing",
      challenge: "GlobalGas needed to improve safety standards while reducing the cost of equipment integrity programs.",
      solution: "Deployed Cogintech's platform to analyze historical data and create predictive maintenance schedules.",
      results: [
        "Zero safety incidents since implementation",
        "25% reduction in unnecessary maintenance",
        "Identified three critical failure risks in first month",
        "Consolidated data from 5 separate inspection systems"
      ],
      image: "https://images.unsplash.com/photo-1546388612-5d134acd4c3e"
    },
    {
      title: "PetroMarine: Offshore Platform Integrity Management",
      industry: "Offshore Operations",
      challenge: "PetroMarine's remote offshore platforms required expensive specialist visits for integrity analysis.",
      solution: "Implemented Cogintech's remote analysis capability with AI-powered insight generation.",
      results: [
        "Reduced offshore specialist visits by 50%",
        "Savings of $1.2M in first year of implementation",
        "Enhanced reporting compliance with regulatory bodies",
        "Improved equipment lifespan through early intervention"
      ],
      image: "https://images.unsplash.com/photo-1622434641406-a158123450f9"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="section">
          <div className="container">
            <h1 className="text-4xl font-bold mb-4 text-center">Case Studies</h1>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12">
              See how leading oil and gas companies are achieving significant cost savings and safety improvements with our AI-powered equipment integrity solutions.
            </p>
            
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-card rounded-lg overflow-hidden shadow-md">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="h-full">
                      <img 
                        src={study.image} 
                        alt={study.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <div className="text-sm font-medium text-cogintech-blue mb-2">{study.industry}</div>
                      <h2 className="text-2xl font-bold mb-4">{study.title}</h2>
                      
                      <div className="space-y-4 mb-6">
                        <div>
                          <h3 className="text-lg font-semibold">Challenge</h3>
                          <p>{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold">Solution</h3>
                          <p>{study.solution}</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold">Results</h3>
                          <ul className="list-disc pl-5 space-y-1">
                            {study.results.map((result, idx) => (
                              <li key={idx}>{result}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <button className="bg-cogintech-blue hover:bg-cogintech-blue/90 text-white font-medium px-4 py-2 rounded">
                        Read Full Case Study
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudies;
