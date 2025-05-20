
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of AI in Oil & Gas Equipment Integrity",
      date: "May 10, 2025",
      author: "Alex Johnson",
      summary: "How artificial intelligence is transforming the way companies approach equipment integrity management and what to expect in the next five years.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12",
      tags: ["AI", "Future Trends", "Equipment Integrity"]
    },
    {
      title: "5 Ways AI Reduces Costs in Industrial Inspection Analysis",
      date: "April 22, 2025",
      author: "Sarah Chen",
      summary: "Discover how AI-powered analysis is helping oil and gas companies significantly reduce their inspection costs while improving safety outcomes.",
      image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120",
      tags: ["Cost Reduction", "Inspection", "ROI"]
    },
    {
      title: "Case Study: How XYZ Oil Improved Safety with AI Analysis",
      date: "April 5, 2025",
      author: "Michael Rodriguez",
      summary: "A detailed look at how one of our clients achieved remarkable safety improvements by implementing AI-powered equipment integrity analysis.",
      image: "https://images.unsplash.com/photo-1565108771564-269bbb4473ce",
      tags: ["Case Study", "Safety", "Implementation"]
    },
    {
      title: "The Role of Computer Vision in Detecting Equipment Defects",
      date: "March 18, 2025",
      author: "Emily Williams",
      summary: "How advanced computer vision algorithms are revolutionizing defect detection in industrial equipment with greater accuracy than human inspection.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      tags: ["Computer Vision", "Defect Detection", "Technology"]
    },
    {
      title: "Regulatory Compliance Made Easier with AI-Powered Analysis",
      date: "February 27, 2025",
      author: "David Singh",
      summary: "How our AI solution helps oil and gas companies meet and exceed regulatory requirements for equipment integrity management.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
      tags: ["Compliance", "Regulations", "Best Practices"]
    },
    {
      title: "The Data Challenge: Consolidating Equipment History",
      date: "February 12, 2025",
      author: "Rebecca Thompson",
      summary: "Strategies for overcoming the challenge of fragmented equipment data and building a comprehensive historical database for better analysis.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      tags: ["Data Management", "Integration", "Best Practices"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="section">
          <div className="container">
            <h1 className="text-4xl font-bold mb-8">Our Blog</h1>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <div className="grid grid-cols-1 gap-8">
                  {blogPosts.map((post, index) => (
                    <div key={index} className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col md:flex-row">
                      <div className="md:w-1/3">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 md:w-2/3">
                        <div className="flex items-center text-sm text-foreground/60 mb-2">
                          <span>{post.date}</span>
                          <span className="mx-2">•</span>
                          <span>{post.author}</span>
                        </div>
                        <h2 className="text-xl font-bold mb-3">{post.title}</h2>
                        <p className="text-foreground/80 mb-4">{post.summary}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag, idx) => (
                            <span key={idx} className="bg-muted px-2 py-1 rounded-full text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <button className="text-cogintech-blue hover:text-cogintech-blue/80 font-medium">
                          Read More →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 flex justify-center">
                  <button className="bg-cogintech-blue hover:bg-cogintech-blue/90 text-white font-medium px-8 py-3 rounded-md">
                    Load More Articles
                  </button>
                </div>
              </div>
              
              <div className="md:w-1/3">
                <div className="bg-card rounded-lg shadow-md p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4">Categories</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="block p-2 hover:bg-muted rounded-md transition-colors">AI & Technology</a></li>
                    <li><a href="#" className="block p-2 hover:bg-muted rounded-md transition-colors">Equipment Integrity</a></li>
                    <li><a href="#" className="block p-2 hover:bg-muted rounded-md transition-colors">Cost Reduction</a></li>
                    <li><a href="#" className="block p-2 hover:bg-muted rounded-md transition-colors">Case Studies</a></li>
                    <li><a href="#" className="block p-2 hover:bg-muted rounded-md transition-colors">Industry Insights</a></li>
                    <li><a href="#" className="block p-2 hover:bg-muted rounded-md transition-colors">Regulatory Compliance</a></li>
                  </ul>
                </div>
                
                <div className="bg-card rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                  <p className="mb-4">Stay updated with the latest insights and news in AI-powered equipment integrity management.</p>
                  <form className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="w-full p-2 border border-border rounded-md"
                    />
                    <button type="submit" className="w-full bg-cogintech-orange hover:bg-cogintech-orange/90 text-white font-medium py-2 rounded-md">
                      Subscribe
                    </button>
                  </form>
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

export default Blog;
