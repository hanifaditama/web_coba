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
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.",
    imageUrl: "/src/assets/macbook-collection.jpg",
    author: "John Doe",
    date: "2023-10-15",
    category: "Technology"
  },
  {
    id: 2,
    title: "How to Maximize Your MacBook's Battery Life",
    excerpt: "Tips and tricks to extend your MacBook's battery performance for all-day productivity.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.",
    imageUrl: "/src/assets/hero-macbook.jpg",
    author: "Jane Smith",
    date: "2023-09-28",
    category: "Tips & Tricks"
  },
  {
    id: 3,
    title: "MacBook Pro vs MacBook Air: Which Should You Choose?",
    excerpt: "A comprehensive comparison to help you decide which MacBook model is right for your needs.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.",
    imageUrl: "/src/assets/mac-bg.png",
    author: "Mike Johnson",
    date: "2023-09-15",
    category: "Buying Guide"
  },
  {
    id: 4,
    title: "Essential MacBook Accessories for Professionals",
    excerpt: "The must-have peripherals and add-ons to boost your productivity and enhance your MacBook experience.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.",
    imageUrl: "/src/assets/handshake-deal.jpg",
    author: "Sarah Williams",
    date: "2023-08-22",
    category: "Accessories"
  },
  {
    id: 5,
    title: "MacBook M1 vs M2: Performance Comparison",
    excerpt: "Detailed analysis of the performance differences between Apple's M1 and M2 chips in MacBooks.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.",
    imageUrl: "/src/assets/hero-macbook.jpg",
    author: "David Chen",
    date: "2023-08-10",
    category: "Technology"
  },
  {
    id: 6,
    title: "Top 10 MacBook Shortcuts You Should Know",
    excerpt: "Boost your productivity with these essential keyboard shortcuts for MacBook users.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.",
    imageUrl: "/src/assets/macbook-collection.jpg",
    author: "Lisa Brown",
    date: "2023-07-28",
    category: "Tips & Tricks"
  },
  {
    id: 7,
    title: "How to Clean and Maintain Your MacBook",
    excerpt: "Step-by-step guide to keeping your MacBook in pristine condition for years to come.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.",
    imageUrl: "/src/assets/mac-bg.png",
    author: "Robert Taylor",
    date: "2023-07-15",
    category: "Maintenance"
  },
  {
    id: 8,
    title: "MacBook for Designers: Best Practices and Tools",
    excerpt: "Optimize your MacBook setup for graphic design, UI/UX work, and creative projects.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.",
    imageUrl: "/src/assets/handshake-deal.jpg",
    author: "Emma Wilson",
    date: "2023-06-30",
    category: "Design"
  }
];