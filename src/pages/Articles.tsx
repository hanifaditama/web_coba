import * as React from "react";
const { useState, useEffect } = React;
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import Pagination from "@/components/Pagination";
import { sampleArticles } from "@/models/Article";

const Articles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 4;
  const totalPages = Math.ceil(sampleArticles.length / articlesPerPage);
  
  // Get current articles
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = sampleArticles.slice(indexOfFirstArticle, indexOfLastArticle);
  
  // Change page
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  // Reset to page 1 when component mounts
  useEffect(() => {
    setCurrentPage(1);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Articles</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the latest insights, tips, and news about MacBooks and Apple products
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentArticles.map((article) => (
            <div key={article.id}>
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
        
        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={handlePageChange} 
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Articles;