
import { CheckCircle, ChartBar, Database, FileText } from "lucide-react";

const Solution = () => {
  const features = [{
    icon: <CheckCircle className="h-8 w-8 text-cogintech-teal" />,
    title: "Multi-Agent AI Verification",
    description: "Our system employs multiple specialized AI agents that cross-check each other's work, ensuring audit-grade results with 95%+ accuracy."
  }, {
    icon: <Database className="h-8 w-8 text-cogintech-teal" />,
    title: "Centralized Inspection Data",
    description: "All historical and current inspection data is unified in one searchable system, eliminating information silos."
  }, {
    icon: <FileText className="h-8 w-8 text-cogintech-teal" />,
    title: "Standardized Reporting",
    description: "Generate consistent, compliant reports automatically, with critical findings delivered within 24 hours."
  }, {
    icon: <ChartBar className="h-8 w-8 text-cogintech-teal" />,
    title: "Predictive Insights",
    description: "Identify trends and predict future equipment issues before they become costly failures."
  }];

  return <section id="solution" className="section bg-white">
      <div className="container px-0 sm:px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="px-4 sm:px-0">
            <h2 className="section-title">
              The <span className="gradient-text">Cogintech AI</span> Solution
            </h2>
            <p className="text-lg mb-8 text-foreground/80">Our AI-powered platform transforms how oil and gas companies handle equipment integrity analysis, turning a labor-intensive process into an automated, intelligent system.</p>
            
            <div className="space-y-8 mt-8">
              {features.map((feature, index) => <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-foreground/80">{feature.description}</p>
                  </div>
                </div>)}
            </div>
          </div>
          
          <div className="relative px-0 w-full">
            <div className="bg-gradient-to-br from-cogintech-blue/10 to-cogintech-teal/10 rounded-lg p-4 sm:p-8 w-full">
              <h3 className="text-2xl font-bold mb-6">Traditional vs. Cogintech AI</h3>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-4 sm:p-5 border border-border w-full">
                  <div className="text-lg font-semibold mb-2 text-red-500">Traditional Process:</div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-red-100 text-red-600 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">1</span>
                      <span>Manual data collection (3-5 days)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-red-100 text-red-600 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">2</span>
                      <span>Expert review and analysis (10-20 days)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-red-100 text-red-600 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">3</span>
                      <span>Report creation and QA (10-15 days)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-red-100 text-red-600 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">4</span>
                      <span>Final delivery (5-10 days)</span>
                    </li>
                    <li className="font-medium mt-2">Total: 30-60 days</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-4 sm:p-5 border border-cogintech-teal w-full">
                  <div className="text-lg font-semibold mb-2 text-cogintech-teal">Cogintech AI Process:</div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">1</span>
                      <span>Automated data ingestion (minutes)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">2</span>
                      <span>AI multi-agent analysis (hours)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">3</span>
                      <span>Automated report generation (minutes)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">4</span>
                      <span>Expert validation (optional)</span>
                    </li>
                    <li className="font-medium mt-2 text-cogintech-teal">Total: As little as 24 hours</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Hide decorative elements on mobile */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-cogintech-blue rounded-lg rotate-12 hidden sm:block"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-cogintech-teal rounded-lg -rotate-12 hidden sm:block"></div>
          </div>
        </div>
      </div>
    </section>;
};

export default Solution;
