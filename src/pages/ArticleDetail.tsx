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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Button 
              variant="ghost" 
              size="sm" 
              className="flex items-center gap-1"
              onClick={goBackToArticles}
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Articles
            </Button>
          </div>
          
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
            
            <div className="flex items-center gap-4 text-gray-600 mb-6">
              <span>{article.author}</span>
              <span>•</span>
              <span>{formattedDate}</span>
              <Badge>{article.category}</Badge>
            </div>
          </div>
          
          <div className="mb-8 rounded-lg overflow-hidden">
            <img 
              src={article.imageUrl} 
              alt={article.title}
              className="w-full h-auto max-h-[500px] object-cover"
            />
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl font-medium mb-6">{article.excerpt}</p>
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
            
            {/* For demo purposes, adding more paragraphs */}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.
            </p>
            <p>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <h2>Key Features</h2>
            <ul>
              <li>Advanced processing capabilities</li>
              <li>Extended battery life</li>
              <li>Enhanced display technology</li>
              <li>Improved thermal management</li>
            </ul>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ArticleDetail;