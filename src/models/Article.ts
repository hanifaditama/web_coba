export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  author: string;
  date: string;
  category: string;
}

export const sampleArticles: Article[] = [
  {
    id: 1,
    title: "The Future of MacBook Technology",
    excerpt: "Exploring the upcoming innovations in Apple's MacBook lineup and what to expect in the next generation.",
    content: "<p>The next generation of MacBooks is set to revolutionize the way we think about portable computing. With Apple's continued innovation in chip design and system architecture, we're seeing unprecedented leaps in performance and efficiency.</p>",
    imageUrl: "/src/assets/macbook-collection.jpg",
    author: "John Doe",
    date: "2023-10-15",
    category: "Technology"
  },
  {
    id: 2,
    title: "How to Maximize Your MacBook's Battery Life",
    excerpt: "Tips and tricks to extend your MacBook's battery performance for all-day productivity.",
    content: "<p>MacBooks are known for their impressive battery life, but with a few strategic adjustments to your settings and usage habits, you can push that battery performance even further.</p>",
    imageUrl: "/src/assets/hero-macbook.jpg",
    author: "Jane Smith",
    date: "2023-09-28",
    category: "Tips & Tricks"
  },
  {
    id: 3,
    title: "MacBook Pro vs MacBook Air: Which Should You Choose?",
    excerpt: "A comprehensive comparison to help you decide which MacBook model is right for your needs.",
    content: "<p>Choosing between a MacBook Pro and MacBook Air can be challenging, as both offer compelling features. This guide will help you make an informed decision based on your specific requirements.</p>",
    imageUrl: "/src/assets/mac-bg.png",
    author: "Mike Johnson",
    date: "2023-09-15",
    category: "Buying Guide"
  },
  {
    id: 4,
    title: "Essential MacBook Accessories for Professionals",
    excerpt: "The must-have peripherals and add-ons to boost your productivity and enhance your MacBook experience.",
    content: "<p>While MacBooks are powerful on their own, the right accessories can transform your workflow and productivity. From docks to external displays, these are the essential add-ons for professionals.</p>",
    imageUrl: "/src/assets/handshake-deal.jpg",
    author: "Sarah Williams",
    date: "2023-08-22",
    category: "Accessories"
  },
  {
    id: 5,
    title: "MacBook M1 vs M2: Performance Comparison",
    excerpt: "Detailed analysis of the performance differences between Apple's M1 and M2 chips in MacBooks.",
    content: "<p>Apple's transition to custom silicon has revolutionized the MacBook lineup. This article compares the first two generations of Apple Silicon - the M1 and M2 chips - across various performance metrics.</p>",
    imageUrl: "/src/assets/hero-macbook.jpg",
    author: "David Chen",
    date: "2023-08-10",
    category: "Technology"
  },
  {
    id: 6,
    title: "Top 10 MacBook Shortcuts You Should Know",
    excerpt: "Boost your productivity with these essential keyboard shortcuts for MacBook users.",
    content: "<p>Mastering keyboard shortcuts is one of the fastest ways to improve your efficiency on a MacBook. These ten essential shortcuts will save you time and streamline your workflow.</p>",
    imageUrl: "/src/assets/macbook-collection.jpg",
    author: "Lisa Brown",
    date: "2023-07-28",
    category: "Tips & Tricks"
  },
  {
    id: 7,
    title: "How to Clean and Maintain Your MacBook",
    excerpt: "Step-by-step guide to keeping your MacBook in pristine condition for years to come.",
    content: "<p>Regular maintenance is crucial for extending the lifespan of your MacBook. This guide covers everything from cleaning the screen and keyboard to optimizing storage and managing system resources.</p>",
    imageUrl: "/src/assets/mac-bg.png",
    author: "Robert Taylor",
    date: "2023-07-15",
    category: "Maintenance"
  },
  {
    id: 8,
    title: "MacBook for Designers: Best Practices and Tools",
    excerpt: "Optimize your MacBook setup for graphic design, UI/UX work, and creative projects.",
    content: "<p>MacBooks have long been the preferred choice for creative professionals. This article explores the best software tools, hardware accessories, and workflow optimizations for designers using MacBook.</p>",
    imageUrl: "/src/assets/handshake-deal.jpg",
    author: "Emma Wilson",
    date: "2023-06-30",
    category: "Design"
  }
];