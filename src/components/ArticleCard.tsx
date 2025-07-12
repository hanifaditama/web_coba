import { SanityArticle } from "@/models/Article";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import * as React from "react";
import { urlFor } from "@/lib/sanity";

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

interface ArticleCardProps {
  article: SanityArticle;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  const { _id, title, excerpt, mainImage, author, publishedAt, category, slug } = article;
  
  const formattedDate = new Date(publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={urlFor(mainImage).width(400).height(300).url()} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <Badge className="absolute top-2 right-2" variant="default">
          <span>{category}</span>
        </Badge>
      </div>
      
      <CardHeader className="pb-2">
        <Link to={slug?.current ? `/articles/${slug.current}` : '#'} className="hover:text-blue-600 transition-colors">
          <h3 className="text-xl font-semibold line-clamp-2">{title}</h3>
        </Link>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-gray-600 line-clamp-3">{excerpt || 'No excerpt available'}</p>
      </CardContent>
      
      <CardFooter className="pt-2 text-sm text-gray-500 flex justify-between items-center border-t">
        <span>{author}</span>
        <span>{formattedDate}</span>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;