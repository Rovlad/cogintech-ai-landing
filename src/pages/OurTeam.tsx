
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      position: "Chief Executive Officer",
      bio: "With over 20 years of experience in industrial technology, Alex leads our company's vision and strategy.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a"
    },
    {
      name: "Sarah Chen",
      position: "Chief Technology Officer",
      bio: "Sarah brings expertise in AI and machine learning to drive our technological innovations.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
    },
    {
      name: "Michael Rodriguez",
      position: "VP of Engineering",
      bio: "Michael oversees all engineering operations and ensures our solutions meet the highest standards.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    },
    {
      name: "Emily Williams",
      position: "Director of Data Science",
      bio: "Emily leads our data science team in developing advanced algorithms for industrial analytics.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956"
    },
    {
      name: "David Singh",
      position: "Head of Client Success",
      bio: "David ensures our clients achieve maximum value from our solutions through dedicated support.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    {
      name: "Rebecca Thompson",
      position: "Marketing Director",
      bio: "Rebecca drives our brand strategy and communicates our value proposition to the market.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="section">
          <div className="container">
            <h1 className="text-4xl font-bold mb-8 text-center">Our Team</h1>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12">
              Our team brings together expertise in artificial intelligence, engineering, and industrial operations to deliver cutting-edge solutions for equipment integrity management.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-cogintech-blue mb-3">{member.position}</p>
                    <p className="text-foreground/80">{member.bio}</p>
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
