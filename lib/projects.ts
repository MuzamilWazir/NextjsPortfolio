export type Project = {
  id: number;
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  description: string;
  seoDescription: string;
  image: string;
  imageAlt: string;
  link: string;
  github: string;
  tags: string[];
  keywords: string[];
  overview: string[];
  challenge: string;
  solutions: { title: string; body: string }[];
  features: string[];
  outcome: string;
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "bookhaven",
    title: "BookHaven — Full-Stack Online Bookstore",
    shortTitle: "BookHaven - Online Bookstore",
    category: "E-Commerce",
    description:
      "A full-stack e-commerce platform for buying and selling books. Features include user authentication, shopping cart, secure checkout, and responsive design across all devices.",
    seoDescription:
      "Case study of BookHaven, a full-stack online bookstore built with Next.js, React, Tailwind CSS and Redux Toolkit. Covers cart state and responsive checkout.",
    image: "/web.png",
    imageAlt:
      "BookHaven online bookstore interface showing book listings and shopping cart",
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
    keywords: [
      "ecommerce website",
      "online bookstore",
      "React shopping cart",
      "Redux Toolkit cart",
      "Next.js ecommerce",
    ],
    overview: [
      "BookHaven is a full-stack e-commerce platform built for buying and selling books online. It covers the full shopping journey: browsing a catalogue, creating an account, adding titles to a persistent cart and completing a checkout, all inside a responsive interface that works on phones, tablets and desktops.",
      "The project was built with Next.js and React on the frontend, styled with Tailwind CSS, with Redux Toolkit managing the shared shopping state so the cart stays in sync between the product grid, the cart drawer and the checkout page without a full page reload.",
    ],
    challenge:
      "The hardest part of an e-commerce frontend is keeping state consistent. A shopper can add a book from a listing, remove it from the cart page, then add the same title again from a recommendation carousel. Without a single source of truth those actions fight each other and the totals drift. On top of that, the whole catalogue had to stay readable and usable on a 360px-wide phone screen.",
    solutions: [
      {
        title: "Redux Toolkit as single source of truth",
        body: "The cart, its totals and the authenticated user live in one Redux store, so every component reads the same state and any mutation propagates everywhere instantly.",
      },
      {
        title: "Server-side rendering for the catalogue",
        body: "Next.js renders product pages on the server, which keeps the first paint fast and makes the catalogue content crawlable by search engines.",
      },
      {
        title: "Responsive Tailwind component system",
        body: "Reusable card, button and grid primitives were built with Tailwind CSS so layouts scale from mobile to desktop without duplicated markup.",
      },
      {
        title: "Carousels with Swiper",
        body: "Swiper powers the hero and recommendation sliders, adding touch-friendly, hardware-accelerated movement with no extra layout shift.",
      },
    ],
    features: [
      "User registration and login with protected account routes",
      "Product catalogue with filtering and book detail pages",
      "Persistent cart with quantity updates and live order totals",
      "Multi-step checkout flow",
      "Sliding hero and featured-title carousels built with Swiper",
      "Fully responsive layout across mobile, tablet and desktop",
    ],
    outcome:
      "BookHaven demonstrates the full e-commerce lifecycle end to end. The biggest lesson was architectural: modelling cart state once in Redux Toolkit removed an entire class of bugs and made every later feature cheaper to add. The result is a store that loads quickly, behaves predictably and is comfortable to use on a small screen.",
  },
  {
    id: 2,
    slug: "reactbase",
    title: "ReactBase — Minimal React Web Application",
    shortTitle: "ReactBase - Minimal Web App",
    category: "Frontend",
    description:
      "A clean and minimalist web application built with React and Vite. Features lightning-fast performance, modern tooling, and a streamlined development experience with hot module replacement.",
    seoDescription:
      "Case study of ReactBase, a minimal React and Vite app with Tailwind CSS. Explains build tooling, hot module replacement and keeping a frontend fast.",
    image: "/virtualR.png",
    imageAlt:
      "ReactBase minimal React application interface built with Vite and Tailwind CSS",
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
    keywords: [
      "React app",
      "Vite project",
      "React with Vite",
      "Tailwind CSS layout",
      "frontend boilerplate",
    ],
    overview: [
      "ReactBase is a deliberately small React application that exists to measure how fast a modern frontend stack can be. It is built with React and Vite, styled with Tailwind CSS, and deployed as a static build.",
      "Rather than adding features, the project is about tooling: instant hot module replacement, a tiny production bundle, and a component structure that stays readable as a codebase grows. It is the foundation I use to start new frontends quickly.",
    ],
    challenge:
      "Legacy build setups are slow. In a typical Create React App project, waiting for a rebuild after every save breaks the feedback loop and makes iteration painful. The goal here was to keep the dev server instantaneous and the production output small, without giving up modern JavaScript features.",
    solutions: [
      {
        title: "Vite for dev and build",
        body: "Vite serves modules over native ESM instead of bundling the whole app, so start-up and hot reload stay near-instant even as the project grows.",
      },
      {
        title: "Production pre-bundling",
        body: "Dependencies are pre-bundled with esbuild for the dev server, then Rollup produces a tree-shaken, minified production build.",
      },
      {
        title: "Component-driven structure",
        body: "The UI is split into small, single-purpose components that each own their markup and styles, keeping the codebase navigable.",
      },
      {
        title: "Utility-first styling",
        body: "Tailwind CSS keeps styling in the markup, removes a CSS-in-JS runtime cost, and makes responsive variants trivial to apply.",
      },
    ],
    features: [
      "Vite-powered dev server with hot module replacement",
      "Rollup production build with tree shaking and minification",
      "Tailwind CSS utility-first responsive styling",
      "Reusable component architecture",
      "Static deployment with global CDN caching",
    ],
    outcome:
      "ReactBase confirmed how much of a project's perceived speed comes from the build tool rather than the application code. Because the feedback loop is instant, iterating on layout and responsiveness takes seconds. It is now my default starting point for React-only frontends.",
  },
  {
    id: 3,
    slug: "ai-saas-design-automation",
    title: "AI SaaS Platform — Design Automation Landing Experience",
    shortTitle: "AI SaaS - Design Automation",
    category: "SaaS",
    description:
      "An AI-powered SaaS platform for designers that automates design generation, offers smart adaptability, and multi-format exports. Features include instant ideation, seamless revisions, pricing plans, and a complete landing page with responsive design.",
    seoDescription:
      "Case study of an AI SaaS front end built with Next.js and Tailwind CSS, covering pricing tiers, Figma-to-component workflow and responsive landing pages.",
    image: "/ai-saas.png",
    imageAlt:
      "AI SaaS platform landing page with pricing plans and design automation features",
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
    keywords: [
      "SaaS landing page",
      "AI SaaS product page",
      "Figma to Next.js",
      "pricing page design",
      "responsive landing page",
    ],
    overview: [
      "This project is a marketing and product front end for an AI SaaS platform aimed at designers. The pitch is simple: describe an idea, let the model generate variations, revise them conversationally, and export the result in whatever format the next tool needs.",
      "The build covers the full funnel a SaaS site needs — hero, feature breakdown, workflow explanation, pricing tiers and conversion calls to action. The layout was originally designed in Figma and then translated pixel-accurately into responsive React components.",
    ],
    challenge:
      "SaaS landing pages are hard to make genuinely responsive because they are built as large, art-directed compositions on desktop. Naively scaling them down on mobile produces unreadable text and cramped columns. The second challenge was keeping the design intent intact when converting a Figma file into maintainable components rather than one enormous JSX block.",
    solutions: [
      {
        title: "Figma-to-component translation",
        body: "Each Figma frame was mapped to a React component with explicit props, so design tokens and spacing decisions survived the conversion.",
      },
      {
        title: "Mobile-first section order",
        body: "Content is ordered for small screens first, then expanded with grid columns at larger breakpoints instead of hiding desktop layout behind media queries.",
      },
      {
        title: "Reusable pricing tier model",
        body: "Pricing plans are driven by a data array and rendered by one component, so adding or reordering tiers is a data change, not a rewrite.",
      },
      {
        title: "Performance budget",
        body: "Next.js static rendering, optimised images and no heavy client libraries keep the largest contentful paint fast on mobile connections.",
      },
    ],
    features: [
      "Hero section with dual calls to action",
      "Feature grid explaining the AI generation workflow",
      "Interactive pricing comparison across tiers",
      "Testimonial and social proof sections",
      "Frequent questions accordion",
      "Responsive from 360px mobile to wide desktop",
    ],
    outcome:
      "The project proved that a design-to-code workflow can stay faithful and still produce clean, maintainable React. Working from a structured component model meant the mobile layout was designed rather than retrofitted, and the whole site ships as static HTML that search engines can read.",
  },
  {
    id: 4,
    slug: "edulearn",
    title: "EduLearn — Online Learning Platform",
    shortTitle: "EduLearn - Learning Platform",
    category: "E-Learning",
    description:
      "A modern e-learning platform built with React and Vite. Features course browsing, interactive lessons, student dashboards, and progress tracking. Designed for seamless online education with fast performance and intuitive user experience.",
    seoDescription:
      "Case study of EduLearn, an online learning platform built with React and Vite. Covers course catalogues, lesson playback and progress tracking.",
    image: "/elearning.png",
    imageAlt:
      "EduLearn e-learning platform showing course catalogue and student dashboard",
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
    keywords: [
      "online learning platform",
      "e-learning website",
      "course catalogue UI",
      "student dashboard",
      "education website React",
    ],
    overview: [
      "EduLearn is an online learning platform that puts a course catalogue, a lesson player and a student dashboard in one React application. Learners can browse available courses, start a lesson, and track how far they have progressed through each one.",
      "It is built with React and Vite and styled with Tailwind CSS. The interface is designed so a student on a phone can browse and start a lesson with the same ease as someone on a large display, because that is where most course browsing actually happens.",
    ],
    challenge:
      "Learning platforms have to present a lot of hierarchy at once — categories, courses, lessons, progress — without making the page feel like a dashboard. The specific technical problem was progress tracking: a student's completion state has to look correct immediately after finishing a lesson, across every course card and progress bar, with no flash of stale data.",
    solutions: [
      {
        title: "Derived progress state",
        body: "Progress is computed from completed lesson IDs rather than stored counters, so the UI can never disagree with the underlying data.",
      },
      {
        title: "Route-level code splitting",
        body: "Each major view is lazy-loaded, so the catalogue loads fast and the heavier lesson view is only fetched when a student opens it.",
      },
      {
        title: "Consistent design tokens",
        body: "Shared Tailwind theme values for colour, radius and spacing make course cards, lesson lists and the dashboard look like one product.",
      },
      {
        title: "Accessible interactive elements",
        body: "Lesson controls, tabs and accordions are real focusable elements with visible focus states, which keeps the platform usable by keyboard and screen reader.",
      },
    ],
    features: [
      "Searchable and category-filtered course catalogue",
      "Course detail pages with syllabus outline",
      "Lesson player with sequential navigation",
      "Student dashboard with per-course progress tracking",
      "Responsive layouts tuned for mobile study sessions",
      "Fast dev and build cycle powered by Vite",
    ],
    outcome:
      "EduLearn is a complete e-commerce-style flow for education, and the progress model I built here is one I now reuse across projects. Deriving state instead of duplicating it removed an entire bug category, and the resulting interface stays fast because heavy views are only loaded when needed.",
  },
  {
    id: 5,
    slug: "top-ai-tools-hub",
    title: "Top AI Tools Hub — AI Tools Directory",
    shortTitle: "Top AI Tools Hub - AI Directory",
    category: "Directory",
    description:
      "A curated directory of the best AI tools and resources. Features categorized listings, search functionality, tool comparisons, and detailed descriptions to help users discover and explore cutting-edge AI solutions for various needs.",
    seoDescription:
      "Case study of Top AI Tools Hub, an AI tools directory built with Next.js. Covers search-as-you-type filtering, categories and static rendering.",
    image: "/aitool.png",
    imageAlt:
      "Top AI Tools Hub directory with categorised AI tool listings and search",
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
    keywords: [
      "AI tools directory",
      "AI tools list",
      "best AI tools",
      "AI tool categories",
      "AI directory website",
    ],
    overview: [
      "Top AI Tools Hub is a curated directory that helps people find the right AI tool without endless tab-switching. Every entry is grouped into a category, described in plain language, and marked with its pricing model so visitors can qualify a tool before clicking through.",
      "The site is built with Next.js, React and Tailwind CSS. The interesting engineering is on the client: search, category filters and card rendering all need to feel instant across a large catalogue.",
    ],
    challenge:
      "A directory lives or dies on findability. The catalogue is large enough that scrolling is not a search strategy, but the data is small enough that sending every request to a server would be wasteful. The goal was instant, forgiving filtering — results updating as the user types, with category and tag filters that combine rather than conflict.",
    solutions: [
      {
        title: "Static catalogue rendering",
        body: "Tool data is rendered at build time so the full directory is crawlable and paints without waiting on a network round trip.",
      },
      {
        title: "Memoised filtering",
        body: "Search text, category and tag filters are combined in a memoised selector so re-renders only touch the cards whose data actually changed.",
      },
      {
        title: "Normalised text matching",
        body: "Queries are lower-cased and matched against name, category and description, so a partial word still finds the right tool.",
      },
      {
        title: "Category landing anchors",
        body: "Each category has its own anchor and metadata so it can be linked to and described independently, which is what makes a directory rank for category keywords.",
      },
    ],
    features: [
      "Search-as-you-type filtering across the catalogue",
      "Category and tag filters that combine",
      "Individual tool detail views with pricing and links",
      "Grid layout that stays readable on mobile",
      "Static rendering for fast first paint and indexability",
      "Clear empty states when a query matches nothing",
    ],
    outcome:
      "The hub shows how much content architecture matters for discovery. Every tool is a linkable page, every category is its own landing point, and the entire catalogue is static HTML. The result is a fast site that both users can search and search engines can crawl.",
  },
  {
    id: 6,
    slug: "made-in-rwanda",
    title: "MadeInRwanda — Government Product Registry",
    shortTitle: "MadeInRwanda - Product Registry",
    category: "Government",
    description:
      "A government website where people can register their business, list their products and manage them within Rwanda's product registry.",
    seoDescription:
      "Case study of MadeInRwanda, a government product registry frontend for Rwanda built with Next.js and React, covering registration flows and mobile tables.",
    image: "/madeinrwanda.png",
    imageAlt:
      "MadeInRwanda government product registry for listing and registering products in Rwanda",
    link: "https://madeinrewandawebsitefrontend.vercel.app/",
    github: "https://github.com/MuzamilWazir/madeinrewandawebsitefrontend",
    tags: ["Next.js", "React", "Tailwind CSS"],
    keywords: [
      "Rwanda product registry",
      "government website Rwanda",
      "product listing platform",
      "MadeInRwanda",
      "business registration frontend",
    ],
    overview: [
      "MadeInRwanda is a government-facing product registry for Rwanda. Businesses register, publish their products, and manage those listings from a single frontend, giving buyers a single place to see what is produced and registered in the country.",
      "The frontend is built with Next.js, React and Tailwind CSS. Because it is a public-sector product, the priorities were clarity, trust in the interface and forms that work reliably on the low-end devices and mobile connections common in the region.",
    ],
    challenge:
      "Public-sector forms are unforgiving. A long registration flow that loses data on a failed submission is a real problem for a citizen trying to register a business, and the same interface has to stay legible on a cheap Android phone over a slow connection. The data entry screens also have to make required fields obvious before submission, not after.",
    solutions: [
      {
        title: "Field-level validation feedback",
        body: "Inputs validate as they are completed and explain what is required, so mistakes are caught before the user reaches the submit button.",
      },
      {
        title: "Multi-step form flow",
        body: "Long registration is split into short steps, reducing abandonment and giving users a clear sense of progress.",
      },
      {
        title: "Mobile-first tables and cards",
        body: "Tabular product data switches to a card layout on small screens instead of forcing horizontal scrolling.",
      },
      {
        title: "Lightweight styling",
        body: "A small Tailwind CSS bundle keeps first paint fast on modest hardware and connections.",
      },
    ],
    features: [
      "Business and product registration flow",
      "Product listing creation and management screens",
      "Validation with clear required-field messaging",
      "Responsive product tables that adapt to mobile cards",
      "Clean institutional design language",
      "Static-rendered public pages for fast, crawlable content",
    ],
    outcome:
      "Building for a government audience changed how I think about form UX. The lesson was that reliability beats cleverness: guided steps, obvious validation and a layout that respects the device a real user is holding. Those constraints produced a simpler, sturdier interface than a purely marketing-driven design would have.",
  },
  {
    id: 7,
    slug: "seal-dapp",
    title: "Seal DApp — Encrypted Messaging on Sui Blockchain",
    shortTitle: "Seal DApp - Sui Blockchain Messaging",
    category: "Blockchain / Web3",
    description:
      "A decentralized application for encrypted messaging built on the Sui blockchain, ensuring secure and private communication.",
    seoDescription:
      "Case study of Seal DApp, a decentralized encrypted messaging app on the Sui blockchain built with Next.js and React. Covers wallet state and optimistic UI.",
    image: "/seal-dapp.png",
    imageAlt:
      "Seal DApp interface for encrypted messaging on the Sui blockchain",
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
    keywords: [
      "Sui blockchain dapp",
      "encrypted messaging app",
      "web3 messaging",
      "decentralized application",
      "Seal dapp",
    ],
    overview: [
      "Seal DApp is a decentralized messaging application built on the Sui blockchain. Messages are encrypted before they leave the client, so the conversation content is never readable to anyone who only sees the on-chain transaction data.",
      "The frontend is a Next.js and React application. Sui's object model and transaction model made it possible to attach message payloads to on-chain objects, while the SEAL framework handled the encryption and permission layer.",
    ],
    challenge:
      "Web3 interfaces are unforgiving because the user is responsible for state the browser normally manages. A wallet connection can be pending, rejected or on the wrong network, and a naive UI shows a spinner forever. On top of that, messaging needs optimistic updates so the interface feels instant while a transaction is still being confirmed on chain.",
    solutions: [
      {
        title: "Explicit wallet state machine",
        body: "Connection status, wrong-network warnings and rejected signatures each render a specific, actionable message rather than a generic spinner.",
      },
      {
        title: "Optimistic messaging",
        body: "Messages appear immediately with a pending marker and reconcile with the chain once the transaction settles, so the app never feels slow.",
      },
      {
        title: "Client-side encryption via SEAL",
        body: "Payloads are encrypted and sealed to the intended recipients before being written to the network.",
      },
      {
        title: "On-chain object reads",
        body: "Conversation state is derived from Sui objects so the message history is verifiable by anyone with the network.",
      },
    ],
    features: [
      "Wallet connection with network switching",
      "Encrypted message sending and receiving",
      "Pending and confirmed transaction states",
      "On-chain conversation history backed by Sui objects",
      "SEAL-based access control for message payloads",
      "Responsive chat interface for desktop and mobile",
    ],
    outcome:
      "Seal DApp was my first serious blockchain build and it changed how I think about frontend state. When a transaction can fail for reasons outside your control, the UI has to model every outcome explicitly. That discipline — clear states instead of vague ones — is the main thing I carried back into ordinary web work.",
  },
  {
    id: 8,
    slug: "prepistan",
    title: "Prepistan — Competitive Exam Preparation Platform",
    shortTitle: "Prepistan - Competitive Exam Prep",
    category: "Full Stack",
    description:
      "An application where individuals can study and attempt MCQs to prepare for competitive exams.",
    seoDescription:
      "Case study of Prepistan, a competitive exam prep platform built with Next.js, React, Express, Node.js and MongoDB, with OAuth login and MCQ scoring.",
    image: "/prepistanImage.png",
    imageAlt:
      "Prepistan competitive exam preparation platform with MCQ practice interface",
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
    keywords: [
      "competitive exam preparation",
      "MCQ practice app",
      "exam preparation platform",
      "Next.js Express MongoDB app",
      "practice MCQs online",
    ],
    overview: [
      "Prepistan is a full-stack preparation platform for competitive exams. Students sign in, pick a subject, and work through multiple-choice questions, then immediately see whether they were correct along with an explanation of the answer.",
      "This is the most complete MERN stack project in my portfolio: a Next.js and React frontend, an Express and Node.js REST API, and MongoDB for persistence. Sign-in is handled with OAuth so a student is not forced to invent yet another password.",
    ],
    challenge:
      "Practice apps live or die on scoring accuracy and progress tracking. Every submitted answer has to be scored server-side, because trusting the client to report its own score makes the progress data meaningless. On the frontend, the results screen has to explain not just the score but why an answer was wrong, otherwise students cannot learn from a practice session.",
    solutions: [
      {
        title: "Server-side scoring with Express",
        body: "Answers are posted to the Node and Express API, scored there and returned with the correct option and explanation, so results are authoritative.",
      },
      {
        title: "MongoDB document modelling",
        body: "Questions, subjects, attempts and users are modelled as related documents, which keeps progress queries fast and the schema easy to extend.",
      },
      {
        title: "OAuth authentication",
        body: "OAuth sign-in removes password handling entirely and returns a session the API can validate on every protected request.",
      },
      {
        title: "Attempt history in Redux Toolkit",
        body: "Attempt summaries and score history are cached and derived in the store, so returning students see their progress without waiting on a request.",
      },
    ],
    features: [
      "OAuth authentication with protected routes",
      "Subject and topic-based question banks",
      "MCQ practice sessions with timed or untimed modes",
      "Server-side scoring with answer explanations",
      "Progress and score history per subject",
      "REST API built with Express and persisted in MongoDB",
    ],
    outcome:
      "Prepistan ties together everything I care about in the MERN stack: a real REST API, a document model worth querying, third-party authentication and a frontend that turns raw data into something a student can learn from. It is the project I use to explain how I structure a full-stack application end to end.",
  },
];

export const projectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
