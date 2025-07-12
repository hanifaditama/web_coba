import * as React from "react";
const { useState, useEffect } = React;

// Mock implementations for React Router hooks
const useParams = () => {
  // Extract slug from URL
  const path = window.location.pathname;
  const match = path.match(/\/articles\/([\w-]+)/);
  return { slug: match ? match[1] : undefined };
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
import { SanityArticle } from "@/models/Article";
import { getPostBySlug, urlFor } from "@/lib/sanity";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PortableText } from "@portabletext/react";

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
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<SanityArticle | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchArticle = async () => {
      if (!slug) {
        navigate("/not-found");
        return;
      }
      
      try {
        const post = await getPostBySlug(slug);
        if (!post) {
          navigate("/not-found");
          return;
        }
        setArticle(post);
      } catch (error) {
        console.error("Error fetching article:", error);
        navigate("/not-found");
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchArticle();
  }, [slug, navigate]);
  
  // Navigate back to articles
  const goBackToArticles = () => {
    window.location.href = "/articles";
  };
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="text-center py-12">Loading article...</div>
        </main>
        <Footer />
      </div>
    );
  }
  
  if (!article) return null;

  // Format the date
  const formattedDate = article.publishedAt ? new Date(article.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }) : '';

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
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
              src={urlFor(article.mainImage).width(1200).height(675).url()} 
              alt={article.title}
              className="w-full h-auto object-cover"
            />
          </div>
          
          <article className="prose prose-slate lg:prose-lg max-w-none">
            {article.body && <PortableText value={article.body} />}
          </article>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ArticleDetail;