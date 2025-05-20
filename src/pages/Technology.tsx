
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Technology = () => {
  const technologies = [
    {
      title: "Multi-Agent AI Analysis",
      description: "Our system employs multiple specialized AI agents that collaboratively analyze inspection data, cross-verify findings, and generate comprehensive reports with higher accuracy than traditional single-review methods.",
      icon: "🤖"
    },
    {
      title: "Computer Vision",
      description: "Advanced computer vision algorithms detect anomalies in visual inspection data, identifying corrosion, cracks, and other defects with pixel-level precision across thousands of images.",
      icon: "👁️"
    },
    {
      title: "Natural Language Processing",
      description: "Our NLP technology enables engineers to query equipment history and inspection data using everyday language, making insights accessible without complex database knowledge.",
      icon: "💬"
    },
    {
      title: "Predictive Analytics",
      description: "By analyzing historical data patterns, our system forecasts potential equipment failures and maintenance needs, allowing for proactive rather than reactive integrity management.",
      icon: "📈"
    },
    {
      title: "Centralized Data Repository",
      description: "Our platform consolidates inspection data from multiple sources into a unified, searchable database, eliminating information silos and providing a complete equipment history.",
      icon: "🗄️"
    },
    {
      title: "Secure Cloud Infrastructure",
      description: "All data is stored and processed in enterprise-grade secure cloud environments with multiple redundancies and industry-leading encryption standards.",
      icon: "☁️"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="section">
          <div className="container">
            <h1 className="text-4xl font-bold mb-4 text-center">Our Technology</h1>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12">
              At Cogintech, we've developed a suite of AI-powered technologies specifically designed for equipment integrity management in the oil and gas industry.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{tech.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{tech.title}</h3>
                  <p className="text-foreground/80">{tech.description}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-cogintech-blue/10 to-cogintech-teal/10 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">How Our Technology Process Works</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg p-6 relative">
                  <div className="w-10 h-10 rounded-full bg-cogintech-blue text-white flex items-center justify-center font-bold mb-4">1</div>
                  <h3 className="text-lg font-semibold mb-2">Data Ingestion</h3>
                  <p className="text-sm">We ingest inspection data from multiple sources, including reports, images, and sensor readings.</p>
                  <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden md:block">
                    <div className="w-8 h-2 bg-cogintech-blue"></div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 relative">
                  <div className="w-10 h-10 rounded-full bg-cogintech-blue text-white flex items-center justify-center font-bold mb-4">2</div>
                  <h3 className="text-lg font-semibold mb-2">AI Processing</h3>
                  <p className="text-sm">Our multi-agent AI system analyzes the data, identifying patterns, anomalies, and critical findings.</p>
                  <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden md:block">
                    <div className="w-8 h-2 bg-cogintech-blue"></div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 relative">
                  <div className="w-10 h-10 rounded-full bg-cogintech-blue text-white flex items-center justify-center font-bold mb-4">3</div>
                  <h3 className="text-lg font-semibold mb-2">Verification</h3>
                  <p className="text-sm">Multiple AI agents cross-verify findings to ensure accuracy and eliminate false positives.</p>
                  <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden md:block">
                    <div className="w-8 h-2 bg-cogintech-blue"></div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6">
                  <div className="w-10 h-10 rounded-full bg-cogintech-blue text-white flex items-center justify-center font-bold mb-4">4</div>
                  <h3 className="text-lg font-semibold mb-2">Reporting</h3>
                  <p className="text-sm">Comprehensive reports with prioritized findings are generated and delivered within 24 hours.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Technology;
