export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://themuzammilwazir.vercel.app/"
).replace(/\/$/, "");

export const siteConfig = {
  url: siteUrl,
  name: "Wazir Muzammil",
  shortName: "Muzammil.",
  role: "MERN Stack Developer",
  locale: "en_US",
  description:
    "Portfolio of Wazir Muzammil, a MERN Stack Developer and Software Engineer from Pakistan. I build fast, scalable full-stack web applications with React, Next.js, Node.js, Express and MongoDB.",
  keywords: [
    "Wazir Muzammil",
    "Muzammil",
    "MERN Stack Developer",
    "MERN Stack Developer Pakistan",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Express.js Developer",
    "MongoDB Developer",
    "JavaScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Freelance Web Developer",
    "Software Engineer",
    "Web Developer Portfolio",
    "Hire MERN Stack Developer",
    "Tailwind CSS Developer",
    "Redux Toolkit",
    "Portfolio",
  ],
  email: "itzmuzu@gmail.com",
  location: {
    city: "Islamabad",
    country: "Pakistan",
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/wazir-muhammad-muzammil-6a2148251/",
    github: "https://github.com/MuzamilWazir",
    twitter: "https://x.com/Muzammil_wazir",
    whatsapp: "https://api.whatsapp.com/send?phone=923478048455",
  },
  images: {
    og: {
      url: "/ogimage.png",
      width: 1200,
      height: 630,
      alt: "Wazir Muzammil — MERN Stack Developer portfolio",
    },
    profile: "/profile-pic.png",
  },
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Supabase",
    "Tailwind CSS",
    "Redux Toolkit",
    "Vite",
    "Git",
    "Vercel",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
