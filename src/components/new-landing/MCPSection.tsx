import { Button } from "@/components/ui/button";
import { Wrench, ArrowRight } from "lucide-react";

const MCPSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-cogintech-teal/5 to-cogintech-blue/5">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-cogintech-teal/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Wrench className="w-8 h-8 text-cogintech-teal" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Build Your Own AI Tools 
            <span className="text-cogintech-teal"> (No Coding)</span>
          </h2>
          
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-8">
            With the MCP interface, your engineers can assemble custom AI workflows — from data prep to client-ready templates — without writing code. Standardize quality, speed up delivery, and keep your know-how in-house.
          </p>
          
          <Button 
            variant="outline"
            size="lg"
            className="border-cogintech-teal text-cogintech-teal hover:bg-cogintech-teal hover:text-white font-medium px-8 py-6"
          >
            Explore MCP
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MCPSection;