import * as React from "react";
const { useState, useEffect } = React;
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import Pagination from "@/components/Pagination";
import { SanityArticle } from "@/models/Article";
import { getAllPosts } from "@/lib/sanity";
import { Button } from "@/components/ui/button";

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

const Articles = () => {
  const [articles, setArticles] = useState<SanityArticle[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const articlesPerPage = 4;
  
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const posts = await getAllPosts();
        setArticles(posts);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
    setCurrentPage(1);
  }, []);

  // Get current articles
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(articles.length / articlesPerPage);
  
  // Change page
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Navigate to home page
  const navigateToHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex items-center gap-1"
            onClick={navigateToHome}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Articles</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the latest insights, tips, and news about MacBooks and Apple products
          </p>
        </div>
        
        {isLoading ? (
          <div className="text-center py-12">Loading articles...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentArticles.map((article) => (
              <div key={article._id}>
                <ArticleCard article={article} />
              </div>
            ))}
          </div>
        )}
        
        {!isLoading && totalPages > 1 && (
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={handlePageChange} 
          />
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Articles;