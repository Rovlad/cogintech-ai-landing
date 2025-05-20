
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const News = () => {
  const newsItems = [
    {
      title: "Cogintech Launches Revolutionary AI Platform for Oil & Gas Equipment Integrity",
      date: "May 15, 2025",
      summary: "Our new platform reduces analysis time by 95% while improving accuracy to industry-leading levels.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12"
    },
    {
      title: "Industry Leader XYZ Oil Partners with Cogintech for AI-Powered Equipment Analysis",
      date: "April 3, 2025",
      summary: "XYZ Oil has selected Cogintech's AI solution to enhance their equipment integrity management processes.",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07"
    },
    {
      title: "Cogintech Expands Operations to Middle East",
      date: "March 10, 2025",
      summary: "Our new office in Dubai will serve the growing demand for advanced AI solutions in the Middle East region.",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c"
    },
    {
      title: "Cogintech CEO to Speak at Global Oil & Gas Technology Summit",
      date: "February 22, 2025",
      summary: "Alex Johnson will present on 'The Future of AI in Equipment Integrity Management' at next month's summit.",
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e4"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="section">
          <div className="container">
            <h1 className="text-4xl font-bold mb-8">Latest News</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {newsItems.map((news, index) => (
                <div key={index} className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={news.image} 
                      alt={news.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-2 text-sm text-foreground/60">{news.date}</div>
                    <h3 className="text-xl font-bold mb-3">{news.title}</h3>
                    <p className="text-foreground/80 mb-4 flex-1">{news.summary}</p>
                    <button className="text-cogintech-blue hover:text-cogintech-blue/80 font-medium self-start">
                      Read More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 flex justify-center">
              <button className="bg-cogintech-blue hover:bg-cogintech-blue/90 text-white font-medium px-8 py-3 rounded-md">
                View All News
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default News;
