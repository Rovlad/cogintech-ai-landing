
import Navbar from "@/components/Navbar";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Houston, TX",
      type: "Full-time"
    },
    {
      title: "Data Scientist",
      department: "Data Science",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Oil & Gas Subject Matter Expert",
      department: "Solutions",
      location: "Houston, TX",
      type: "Contract"
    },
    {
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Client Success Manager",
      department: "Client Success",
      location: "Calgary, AB",
      type: "Full-time"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="Join Our AI Team - Careers at Cogintech | Remote & Houston Jobs"
        description="Work with cutting-edge AI technology in oil & gas. Open positions: AI Engineer, Data Scientist, Frontend Developer. Remote & Houston, TX opportunities."
        keywords="Cogintech careers, AI jobs, oil gas jobs, remote AI positions, Houston tech jobs, data scientist jobs, AI engineer positions"
        ogTitle="Join Our AI Team - Careers at Cogintech"
        ogDescription="Work with cutting-edge AI technology in oil & gas. Remote & Houston opportunities available."
        ogImage="/lovable-uploads/22fc09d7-63fe-4527-885a-d78c38ec2e86.png"
      />
      <Navbar />
      
      <main className="flex-1">
        <section className="section bg-gradient-to-b from-background to-muted">
          <div className="container">
            <h1 className="text-4xl font-bold mb-8 text-center">Careers at Cogintech</h1>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12">
              Join our team of innovators and problem-solvers who are revolutionizing how industrial equipment is monitored and maintained through artificial intelligence.
            </p>
            
            <div className="max-w-4xl mx-auto bg-card rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Open Positions</h2>
              
              <div className="space-y-4">
                {openPositions.map((position, index) => (
                  <div key={index} className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                      <div>
                        <h3 className="text-xl font-semibold text-cogintech-blue">{position.title}</h3>
                        <p className="text-foreground/80 mt-1">{position.department}</p>
                      </div>
                      <div className="mt-3 md:mt-0">
                        <span className="inline-block bg-muted px-3 py-1 rounded-full text-sm mr-2">{position.location}</span>
                        <span className="inline-block bg-cogintech-blue/10 text-cogintech-blue px-3 py-1 rounded-full text-sm">{position.type}</span>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <button className="text-cogintech-blue hover:text-cogintech-blue/80 font-medium">
                        View Details →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Don't see a position that matches your skills?</h3>
                <p className="mb-4">We're always looking for talented individuals to join our team. Send us your resume and tell us how you can contribute to our mission.</p>
                <button className="bg-cogintech-orange hover:bg-cogintech-orange/90 text-white font-medium px-6 py-2 rounded-md">
                  Submit Your Resume
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;
