import React from "react";
import Navbar from "@/components/sections/Navbar/Navbar.jsx";
import Home from "@/components/sections/Home/Home.jsx";
import About from "@/components/sections/About/About.jsx";
import Skill from "@/components/sections/Skills/Skill.jsx";
import Services from "@/components/sections/Services/Services";
import Qualification from "@/components/sections/Qualification/Qualificaion";
import Testimonial from "@/components/sections/Testimonial/Testimonial";
import Contact from "@/components/sections/Contact/Contact";
import Footer from "@/components/sections/Footer/Footer";
import Projects from "@/components/sections/Projects/Projects.jsx";
const page = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Projects />
      <Services />
      <Qualification />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
