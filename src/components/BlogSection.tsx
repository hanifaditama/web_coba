import * as React from "react";
const { useState, useEffect } = React;

// Create a custom Link component since we're having issues with react-router-dom
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
import { Button } from "@/components/ui/button";
import ArticleCard from "@/components/ArticleCard";
import { SanityArticle } from "@/models/Article";
import { getAllPosts } from "@/lib/sanity";

const BlogSection = () => {
  const [featuredArticles, setFeaturedArticles] = useState<SanityArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        console.log('BlogSection: Fetching articles...');
        const posts = await getAllPosts();
        console.log('BlogSection: Received posts:', posts);
        console.log('BlogSection: Posts length:', posts.length);
        
        // Add this detailed logging
        console.log('BlogSection: Posts details:', posts.map(post => ({
          id: post._id,
          title: post.title,
          hasSlug: !!post.slug,
          slugCurrent: post.slug?.current,
          hasMainImage: !!post.mainImage,
          hasExcerpt: !!post.excerpt
        })));
        
        // Display only the first 4 articles on the homepage
        setFeaturedArticles(posts.slice(0, 4));
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <section id="blog-section" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Latest Articles</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest news, tips, and insights about MacBooks
          </p>
        </div>
        
        {isLoading ? (
          <div className="text-center py-12">Loading articles...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredArticles.map((article) => (
              <div key={article._id}>
                <ArticleCard article={article} />
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link to="/articles">View All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;