import React from "react";
import Image from "next/image";

function Projects() {
  const projects = [
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
      link: "https://top-ai-tools-hub.vercel.app/",
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
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-4" id="projects">
      <h2 className="text-center text-3xl md:text-4xl font-semibold mb-2">
        Projects
      </h2>
      <span className="block text-center text-sm text-gray-600 dark:text-gray-400 mb-16">
        My Projects usibg my skills
      </span>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-900">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between gap-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  View Project
                  <svg
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
                    aria-label="View source code on GitHub"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
