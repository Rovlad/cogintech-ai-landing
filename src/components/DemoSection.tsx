
import { useState } from 'react';
import { Button } from "@/components/ui/button";

const DemoSection = () => {
  const [currentQuery, setCurrentQuery] = useState("Show corrosion history for Column FC-101");
  const [isGenerating, setIsGenerating] = useState(false);
  const [showResponse, setShowResponse] = useState(false);

  const handleDemo = () => {
    setIsGenerating(true);
    setShowResponse(false);
    
    // Simulate AI processing time
    setTimeout(() => {
      setIsGenerating(false);
      setShowResponse(true);
    }, 1500);
  };

  return (
    <section id="demo" className="section bg-cogintech-dark text-white">
      <div className="container px-0 sm:px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 px-4 sm:px-0">
          <h2 className="section-title">
            See <span className="text-cogintech-teal">Cogintech AI</span> in Action
          </h2>
          <p className="text-lg text-white/80">
            Interact with inspection data using natural language queries and get instant, accurate insights.
          </p>
        </div>

        <div className="bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 max-w-4xl mx-auto px-0 mx-0 sm:mx-4">
          <div className="border-b border-white/10 p-4 flex items-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="ml-4 text-white/60 text-sm">Cogintech AI Interface</div>
          </div>

          <div className="p-6">
            <div className="mb-6">
              <div className="mb-2 text-white/60 text-sm">Query:</div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={currentQuery}
                  onChange={(e) => setCurrentQuery(e.target.value)}
                  className="flex-1 bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cogintech-teal/50 w-full"
                />
                <Button 
                  onClick={handleDemo}
                  className="bg-cogintech-teal hover:bg-cogintech-teal/90 text-white w-full sm:w-auto mt-2 sm:mt-0"
                  disabled={isGenerating}
                >
                  {isGenerating ? "Processing..." : "Run Query"}
                </Button>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-6 min-h-[300px] border border-white/10">
              {isGenerating ? (
                <div className="flex flex-col items-center justify-center h-[300px]">
                  <div className="w-10 h-10 border-t-2 border-cogintech-teal rounded-full animate-spin mb-4"></div>
                  <div className="text-white/80">Analyzing inspection data...</div>
                </div>
              ) : showResponse ? (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-cogintech-teal">Column FC-101 Corrosion History Summary</h3>
                    <p className="text-white/80 mb-4">
                      Analysis of 12 inspection records from 2018-2025 shows accelerating corrosion rates in the lower section.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="bg-white/10 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">Key Findings:</h4>
                        <ul className="space-y-2 text-sm text-white/80">
                          <li className="flex items-start">
                            <span className="text-red-400 mr-2">⚠</span>
                            <span>Corrosion rate increased by 47% since last inspection</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-400 mr-2">⚠</span>
                            <span>Wall thickness at point LC-3 below minimum threshold</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-yellow-400 mr-2">!</span>
                            <span>Three inspection points approaching critical values</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-400 mr-2">✓</span>
                            <span>Upper section remains within acceptable parameters</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">Recommendations:</h4>
                        <ul className="space-y-2 text-sm text-white/80">
                          <li className="flex items-start">
                            <span className="text-cogintech-teal mr-2">1.</span>
                            <span>Schedule immediate inspection of lower section</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-cogintech-teal mr-2">2.</span>
                            <span>Replace insulation at points LC-3 through LC-7</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-cogintech-teal mr-2">3.</span>
                            <span>Update maintenance schedule to 6-month intervals</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-cogintech-teal mr-2">4.</span>
                            <span>Plan for possible section replacement in Q4 2025</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6 text-white/60 text-xs">
                      Data analyzed from 12 inspection reports • Analysis confidence: 96.2% • Generated in 2.3 seconds
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-[300px] text-white/60">
                  <p>Enter a query and click "Run Query" to see the AI in action</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-2xl mx-auto text-center px-4 sm:px-0">
          <p className="text-white/80">
            This interactive demo shows how engineers can quickly access critical inspection insights using natural language queries, saving hours of manual report analysis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
