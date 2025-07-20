
import Navbar from "@/components/Navbar";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Anton Varentsov",
      position: "Executive Director (Executive MBA)",
      bio: "Entrepreneur with industry vision, responsible for strategic development and operational management. Since 2018, he has been implementing AI tools in industry.",
      image: "/lovable-uploads/1c2f2364-d8e4-4482-ad1b-e3d057c07f10.png"
    },
    {
      name: "Vlad Romashov",
      position: "Integrity Manager",
      bio: "25+ years of experience in Integrity Management in Russia, Europe, Middle East, North and West Africa. Last 10 years in Integrity Manager position responsible for both equipment maintenance and contractor selection for services to oil companies. PhD.",
      image: "/lovable-uploads/39e016bf-64e9-453e-88d3-19d2ad6cdf37.png"
    },
    {
      name: "Anton Voskresenskiy",
      position: "Leading AI/ML Developer",
      bio: "Machine learning specialist, develops intelligent core systems. Experience in big data analysis allows creating accurate predictive analytics models. Extensive experience in oil and gas industry in Russia and the Middle East.",
      image: "/lovable-uploads/c4d487fe-b8ed-4990-a539-088f0af4f553.png"
    },
    {
      name: "Nikita Varentsov",
      position: "Technical Director (CTO)",
      bio: "Leads platform development, solution architecture and AI module integration. Ensures product scalability and reliability. 10+ years of cloud architecture experience, built SaaS solutions for 0→M users.",
      image: "/lovable-uploads/2cb011ba-b697-485e-803d-b6b12efaed9c.png"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="Our Expert Team - AI & Oil Gas Professionals | Cogintech"
        description="Meet Cogintech's leadership team: 50+ years oil & gas experience, 20+ years AI expertise. Anton Varentsov, Vlad Romashov, Anton Voskresenskiy, Nikita Varentsov."
        keywords="Cogintech team, AI experts, oil gas professionals, Anton Varentsov, Vlad Romashov, integrity management, machine learning"
        ogTitle="Our Expert Team - AI & Oil Gas Professionals"
        ogDescription="Meet Cogintech's leadership team: 50+ years oil & gas experience, 20+ years AI expertise."
        ogImage="/lovable-uploads/22fc09d7-63fe-4527-885a-d78c38ec2e86.png"
      />
      <Navbar />
      
      <main className="flex-1">
        <section className="section">
          <div className="container">
            <h1 className="text-4xl font-bold mb-8 text-center">Our Team</h1>
            <p className="text-lg text-center max-w-4xl mx-auto mb-8">
              Combined, our team has over 50 years of experience in oil and gas engineering and more than 20 years in AI.
            </p>
            <p className="text-lg text-center max-w-4xl mx-auto mb-12 italic text-cogintech-blue">
              The unique combination of domain expertise and data science skills enables Cogintech to transform the market.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    <div className="flex-shrink-0">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-24 h-24 rounded-full object-cover"
                      />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-cogintech-blue mb-3 font-medium">{member.position}</p>
                      <p className="text-foreground/80 text-sm leading-relaxed">{member.bio}</p>
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

export default OurTeam;
