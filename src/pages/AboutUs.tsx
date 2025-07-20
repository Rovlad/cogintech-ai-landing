
import Navbar from "@/components/Navbar";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="About Cogintech - AI-Powered Industrial Inspection | Cogintech"
        description="Learn about Cogintech's mission to revolutionize equipment integrity management in oil & gas through AI. Pioneering industrial inspection technology since 2018."
        keywords="Cogintech, industrial AI, equipment integrity, oil and gas inspection, NDT technology, company history"
        ogTitle="About Cogintech - AI-Powered Industrial Inspection"
        ogDescription="Learn about Cogintech's mission to revolutionize equipment integrity management in oil & gas through AI."
        ogImage="/lovable-uploads/22fc09d7-63fe-4527-885a-d78c38ec2e86.png"
      />
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-64 md:h-80 bg-gradient-to-r from-cogintech-blue to-cogintech-orange flex items-center">
          <div className="absolute inset-0">
            <img 
              src="/plant.png" 
              alt="Industrial Plant" 
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="container relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Pioneering the future of industrial equipment integrity through artificial intelligence
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="prose max-w-none">
              <p className="text-lg mb-6">
                Cognitive Industrial Technologies (Cogintech) is a pioneering company focused on revolutionizing equipment integrity management in the oil and gas industry through artificial intelligence.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
              <p className="mb-6">
                Our mission is to transform how industrial equipment is monitored, analyzed, and maintained. We aim to reduce costs, improve safety, and extend asset lifespans through intelligent, data-driven technologies.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Our Vision</h2>
              <p className="mb-6">
                We envision a future where industrial operations are safer, more efficient, and more sustainable through the power of artificial intelligence and machine learning.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                  <p>We continuously push the boundaries of what's possible in industrial technology.</p>
                </div>
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Reliability</h3>
                  <p>Our solutions are built to be trusted in the most demanding industrial environments.</p>
                </div>
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Safety</h3>
                  <p>We prioritize the well-being of people and the environment in everything we do.</p>
                </div>
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
                  <p>We work closely with our clients to develop solutions that meet their specific needs.</p>
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

export default AboutUs;
