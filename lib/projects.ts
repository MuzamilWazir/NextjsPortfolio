export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: "BookHaven - Online Bookstore",
    description:
      "A full-stack e-commerce platform for buying and selling books. Features include user authentication, shopping cart, secure checkout, and responsive design across all devices.",
    image: "/web.png",
    link: "https://book-ecommerse-project.vercel.app/",
    github: "https://github.com/MuzamilWazir/BookEcommerseProject",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "E-commerce",
      "Redux Toolkit",
      "Swiper",
      "Responsive",
    ],
  },
  {
    id: 2,
    title: "ReactBase - Minimal Web Application",
    description:
      "A clean and minimalist web application built with React and Vite. Features lightning-fast performance, modern tooling, and a streamlined development experience with hot module replacement",
    image: "/virtualR.png",
    link: "https://website-simple-eta.vercel.app/",
    github: "https://github.com/MuzamilWazir/website_Simple",
    tags: [
      "React",
      "Tailwind CSS",
      "Vite",
      "Modern Stack",
      "HMR",
      "Optimized",
      "Responsive",
    ],
  },
  {
    id: 3,
    title: "AI SaaS Platform - Design Automation",
    description:
      "An AI-powered SaaS platform for designers that automates design generation, offers smart adaptability, and multi-format exports. Features include instant ideation, seamless revisions, pricing plans, and a complete landing page with responsive design.",
    image: "/ai-saas.png",
    link: "https://figma-to-next-project.vercel.app/",
    github: "https://github.com/MuzamilWazir/FigmaToNextProject",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Figma",
      "SaaS",
      "AI",
      "Landing Page",
    ],
  },
  {
    id: 4,
    title: "EduLearn - Online Learning Platform",
    description:
      "A modern e-learning platform built with React and Vite. Features course browsing, interactive lessons, student dashboards, and progress tracking. Designed for seamless online education with fast performance and intuitive user experience.",
    image: "/elearning.png",
    link: "https://e-learning-website-tau.vercel.app/",
    github: "https://github.com/MuzamilWazir/E-learning-Website",
    tags: [
      "React",
      "Vite",
      "E-Learning",
      "Education",
      "Tailwind CSS",
      "Responsive",
      "Modern UI",
    ],
  },
  {
    id: 5,
    title: "Top AI Tools Hub - AI Discovery Platform",
    description:
      "A curated directory of the best AI tools and resources. Features categorized listings, search functionality, tool comparisons, and detailed descriptions to help users discover and explore cutting-edge AI solutions for various needs.",
    image: "/aitool.png",
    link: "https://top-ai-tool-hub-64mb.vercel.app/",
    github: "https://github.com/mehditechnologies/top-ai-tools-hub",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "AI Tools",
      "Directory",
      "Search",
      "Curated",
      "Modern UI",
    ],
  },
  {
    id: 6,
    title: "Madeinrawanda Webiste -For Goverment of Rwanda",
    description:
      "It is goverment webiste where people can add and remove their product and register in rwanda country",
    image: "/madeinrwanda.png",
    link: "https://madeinrewandawebsitefrontend.vercel.app/",
    github: "https://github.com/MuzamilWazir/madeinrewandawebsitefrontend",
    tags: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    id: 7,
    title: "Seal DApp - Encrypted Messaging on Sui Blockchain",
    description:
      "A decentralized application for encrypted messaging built on the Sui blockchain, ensuring secure and private communication.",
    image: "/seal-dapp.png",
    link: "https://seal-testnet-dapp.vercel.app/",
    github: "https://github.com/MuzamilWazir/Seal-Testnet-DAPP",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Sui Blockchain",
      "DApp",
      "Encrypted Messaging",
      "SEAL",
    ],
  },
  {
    id: 8,
    title: "Prepistan - Get you compitative exams pass",
    description:
      "A application where individual can study and atempt mcqs and prepare for the compitative exams.",
    image: "/prepistanImage.png",
    link: "https://prepistan.vercel.app/",
    github: "https://github.com/MuzamilWazir/Prepistan",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "oAuth",
      "Node js",
      "Express js",
      "MongoDB",
    ],
  },
];
