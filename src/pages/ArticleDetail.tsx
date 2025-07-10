import * as React from "react";
const { useEffect } = React;

// Mock implementations for React Router hooks
const useParams = () => {
  // Extract ID from URL
  const path = window.location.pathname;
  const match = path.match(/\/articles\/(\d+)/);
  return { id: match ? match[1] : undefined };
};

const useNavigate = () => {
  return (path: string) => {
    window.location.href = path;
  };
};

// Create a custom Link component
interface LinkProps {
  to: string;
  className?: string;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ to, className, children }) => {
  return (
    <a href={to} className={className}>
      {children}
    </a>
  );
};
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { sampleArticles } from "@/models/Article";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
// Simple arrow icon to replace Lucide React icon
const ArrowLeft = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    <path d="M19 12H5" />
    <path d="M12 19l-7-7 7-7" />
  </svg>
);

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Find the article with the matching ID
  const article = sampleArticles.find(article => article.id === Number(id));
  
  // If article not found, redirect to 404
  useEffect(() => {
    if (!article) {
      navigate("/not-found");
    }
  }, [article, navigate]);
  
  // Format the date
  const formattedDate = article ? new Date(article.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }) : '';
  
  // Navigate back to articles
  const goBackToArticles = () => {
    window.location.href = "/articles";
  };
  
  if (!article) return null; // Return null while redirecting

  // Generate article content based on the article ID
  const getArticleContent = () => {
    switch(article.id) {
      case 1:
        return (
          <>
            <p className="text-xl font-medium mb-6">{article.excerpt}</p>
            
            <p className="mb-6">
              The next generation of MacBooks is set to revolutionize the way we think about portable computing. 
              With Apple's continued innovation in chip design and system architecture, we're seeing unprecedented 
              leaps in performance and efficiency that were unimaginable just a few years ago.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">The Evolution of Apple Silicon</h2>
            
            <p className="mb-4">
              Since the introduction of the M1 chip in 2020, Apple has been on a trajectory that's reshaping the entire 
              industry. The upcoming MacBook models are expected to feature the next iteration of Apple Silicon, 
              bringing even more powerful performance while maintaining the remarkable energy efficiency that has 
              become the hallmark of these systems.
            </p>
            
            <p className="mb-6">
              Industry analysts predict that the next-generation chips will offer up to 40% better multi-core performance 
              and significant improvements in GPU capabilities, making them ideal for both professional workflows and 
              demanding creative applications.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Display Technology Breakthroughs</h2>
            
            <p className="mb-4">
              One of the most anticipated upgrades in future MacBooks is the implementation of micro-LED display 
              technology. This next-generation display technology offers several advantages over current LCD and 
              OLED displays:
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Higher brightness levels (up to 1,600 nits)</li>
              <li>Improved power efficiency</li>
              <li>Better color accuracy and wider color gamut</li>
              <li>Longer lifespan with no risk of burn-in</li>
              <li>Thinner display assembly allowing for sleeker designs</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Battery and Power Innovations</h2>
            
            <p className="mb-4">
              Battery technology is another area where we can expect significant improvements. Apple is reportedly 
              working on new battery chemistries that could increase energy density by up to 20%, translating to 
              longer runtime without increasing the physical size of the battery.
            </p>
            
            <p className="mb-6">
              Combined with more efficient components and smarter power management algorithms, future MacBooks 
              could potentially offer 24+ hours of real-world usage on a single charge—truly all-day computing 
              without compromise.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Connectivity and Expansion</h2>
            
            <p className="mb-4">
              After listening to user feedback, Apple is expected to continue the trend of bringing back essential 
              ports while also embracing next-generation connectivity standards. Future MacBooks will likely include:
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Multiple Thunderbolt/USB 4 ports</li>
              <li>HDMI 2.1 with support for 8K displays</li>
              <li>SD card reader with UHS-III speeds</li>
              <li>Wi-Fi 7 compatibility</li>
              <li>Bluetooth 5.3 with improved range and reliability</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
            
            <p className="mb-4">
              The future of MacBook technology looks incredibly promising, with Apple continuing to push the boundaries 
              of what's possible in portable computing. By controlling both hardware and software, Apple is uniquely 
              positioned to deliver experiences that are greater than the sum of their parts.
            </p>
            
            <p className="mb-6">
              For professionals, creators, and everyday users alike, the next generation of MacBooks will offer 
              compelling reasons to upgrade, with meaningful improvements across performance, display quality, 
              battery life, and connectivity that enhance the overall computing experience.
            </p>
          </>
        );
      case 2:
        return (
          <>
            <p className="text-xl font-medium mb-6">{article.excerpt}</p>
            
            <p className="mb-6">
              MacBooks are known for their impressive battery life, but with a few strategic adjustments to your 
              settings and usage habits, you can push that battery performance even further. Whether you're a 
              digital nomad working from cafés or a professional who needs their laptop to last through long meetings, 
              these tips will help you maximize every minute of your MacBook's battery.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Optimize Your Display Settings</h2>
            
            <p className="mb-4">
              Your MacBook's display is one of the biggest power consumers. Here's how to make it more efficient:
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Reduce brightness to the lowest comfortable level</li>
              <li>Enable auto-brightness adjustment in System Preferences</li>
              <li>Shorten the display sleep timer to 2-3 minutes when on battery</li>
              <li>Use dark mode, which can save power on MacBooks with OLED displays</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Manage Your Applications</h2>
            
            <p className="mb-4">
              Not all applications are created equal when it comes to power consumption. Some apps, particularly those 
              that use significant CPU, GPU, or network resources, can drain your battery quickly.
            </p>
            
            <p className="mb-6">
              Check which apps are using the most energy by clicking on the battery icon in the menu bar and selecting 
              "Battery" preferences. Look for the "Battery" tab and review the "Battery Level" section to identify 
              power-hungry applications.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Adjust System Settings</h2>
            
            <p className="mb-4">
              Several system settings can have a significant impact on battery life:
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Enable "Low Power Mode" in System Preferences &gt; Battery</li>
              <li>Turn off keyboard backlighting when not needed</li>
              <li>Disable features like Handoff and AirDrop when not in use</li>
              <li>Manage Bluetooth devices (disconnect when not in use)</li>
              <li>Use Safari instead of Chrome (Safari is more energy-efficient)</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Optimize Your Workflow</h2>
            
            <p className="mb-4">
              Sometimes, the way you work can affect battery life as much as your settings:
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Download content for offline use instead of streaming</li>
              <li>Close tabs you're not actively using in your browser</li>
              <li>Use lightweight alternatives for resource-intensive tasks when mobile</li>
              <li>Avoid extreme temperatures, which can affect battery performance</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
            
            <p className="mb-6">
              By implementing these strategies, you can significantly extend your MacBook's battery life without 
              sacrificing productivity. Remember that battery health is also important for long-term performance, 
              so occasionally allowing your battery to discharge below 20% before recharging can help maintain its 
              capacity over time.
            </p>
          </>
        );
      default:
        return (
          <>
            <p className="text-xl font-medium mb-6">{article.excerpt}</p>
            
            <p className="mb-6">
              This is a sample article about MacBooks and their features. The content provides valuable information 
              for MacBook users and enthusiasts looking to learn more about these powerful devices.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Key Features</h2>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Advanced processing capabilities with Apple Silicon</li>
              <li>Extended battery life for all-day productivity</li>
              <li>Enhanced display technology with vibrant colors</li>
              <li>Improved thermal management for sustained performance</li>
              <li>Versatile connectivity options for all your devices</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose a MacBook</h2>
            
            <p className="mb-4">
              MacBooks offer a perfect blend of performance, portability, and user experience. With their sleek 
              design, powerful hardware, and seamless integration with the Apple ecosystem, they provide an 
              unmatched computing experience for professionals and casual users alike.
            </p>
            
            <p className="mb-6">
              Whether you're a creative professional, a business user, or a student, there's a MacBook model 
              that's perfectly suited to your needs and workflow requirements.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
            
            <p className="mb-6">
              Investing in a MacBook is more than just purchasing a laptop—it's investing in a tool that 
              enhances productivity, creativity, and digital lifestyle. With regular software updates and 
              excellent build quality, MacBooks continue to deliver value for years after purchase.
            </p>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="mb-6">
              <Button 
                variant="ghost" 
                size="sm" 
                className="flex items-center gap-1 hover:bg-gray-100 transition-colors"
                onClick={goBackToArticles}
              >
                <ArrowLeft />
                Back to Articles
              </Button>
            </div>
            
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 leading-tight">{article.title}</h1>
              
              <div className="flex flex-wrap items-center gap-3 text-gray-600 mb-6">
                <span className="font-medium">{article.author}</span>
                <span className="text-gray-400">•</span>
                <span>{formattedDate}</span>
                <Badge className="ml-1 bg-blue-100 text-blue-800 hover:bg-blue-200">{article.category}</Badge>
              </div>
            </div>
            
            <div className="mb-8 rounded-lg overflow-hidden">
              <img 
                src={article.imageUrl} 
                alt={article.title}
                className="w-full h-auto object-cover"
              />
            </div>
            
            <article className="prose prose-slate lg:prose-lg max-w-none">
              {getArticleContent()}
            </article>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ArticleDetail;