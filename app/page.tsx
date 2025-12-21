import React from "react";
import Navbar from "@/components/sections/Navbar/Navbar.jsx";
import Home from "@/components/sections/Home/Home.jsx";
import About from "@/components/sections/About/About.jsx";
import Skill from "@/components/sections/Skills/Skill.jsx";

const page = () => {
  return (
    <div>
      <Navbar />
      <Home/>
      <About/>
      <Skill/>
    </div>
  );
};

export default page;
