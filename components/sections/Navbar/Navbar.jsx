"use client";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const [scrollHeader, setScrollHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setScrollHeader(true);
      } else {
        setScrollHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-1000 bg-[hsl(0,0%,98%)] ${
        scrollHeader ? "shadow-[0_-1px_4px_rgba(0,0,0,0.15)]" : ""
      }`}
    >
      <nav className="h-18 flex justify-between items-center gap-4 px-4 max-w-242 mx-auto md:px-6">
        <a
          href="index.html"
          className="text-[hsl(0,0%,20%)] font-medium text-[1rem]"
        >
          Muzammil.
        </a>

        <div
          className={`${
            toggle ? "bottom-0" : "-bottom-full"
          } fixed left-0 w-full bg-[hsl(0,0%,98%)] p-8 pb-16 shadow-[0_-1px_4px_rgba(0,0,0,0.15)] rounded-t-2xl transition-all duration-300 md:static md:w-auto md:bg-transparent md:p-0 md:shadow-none md:rounded-none md:flex md:items-center`}
        >
          <ul className="grid grid-cols-3 gap-8 md:flex md:gap-8">
            <li className="flex items-center justify-center">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={`flex flex-col items-center text-[0.875rem] text-[hsl(0,0%,20%)] font-medium transition-colors duration-300 hover:text-[hsl(0,0%,0%)] ${
                  activeNav === "#home" ? "text-[hsl(0,0%,0%)]" : ""
                }`}
              >
                <i className="uil uil-estate text-[1.2rem] mb-1 md:hidden"></i>
                <span>Home</span>
              </a>
            </li>
            <li className="flex items-center justify-center">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={`flex flex-col items-center text-[0.875rem] text-[hsl(0,0%,20%)] font-medium transition-colors duration-300 hover:text-[hsl(0,0%,0%)] ${
                  activeNav === "#about" ? "text-[hsl(0,0%,0%)]" : ""
                }`}
              >
                <i className="uil uil-user text-[1.2rem] mb-1 md:hidden"></i>
                <span>About</span>
              </a>
            </li>
            <li className="flex items-center justify-center">
              <a
                href="#skill"
                onClick={() => setActiveNav("#skill")}
                className={`flex flex-col items-center text-[0.875rem] text-[hsl(0,0%,20%)] font-medium transition-colors duration-300 hover:text-[hsl(0,0%,0%)] ${
                  activeNav === "#skill" ? "text-[hsl(0,0%,0%)]" : ""
                }`}
              >
                <i className="uil uil-file-alt text-[1.2rem] mb-1 md:hidden"></i>
                <span>Skills</span>
              </a>
            </li>
            <li className="flex items-center justify-center">
              <a
                href="#service"
                onClick={() => setActiveNav("#service")}
                className={`flex flex-col items-center text-[0.875rem] text-[hsl(0,0%,20%)] font-medium transition-colors duration-300 hover:text-[hsl(0,0%,0%)] ${
                  activeNav === "#service" ? "text-[hsl(0,0%,0%)]" : ""
                }`}
              >
                <i className="uil uil-briefcase-alt text-[1.2rem] mb-1 md:hidden"></i>
                <span>Servicse</span>
              </a>
            </li>

            <li className="flex items-center justify-center">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={`flex flex-col items-center text-[0.875rem] text-[hsl(0,0%,20%)] font-medium transition-colors duration-300 hover:text-[hsl(0,0%,0%)] ${
                  activeNav === "#contact" ? "text-[hsl(0,0%,0%)]" : ""
                }`}
              >
                <i className="uil uil-message text-[1.2rem] mb-1 md:hidden"></i>
                <span>Contact</span>
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times absolute right-5 bottom-2 text-[1.5rem] text-[hsl(0,0%,20%)] cursor-pointer hover:text-[hsl(0,0%,0%)] md:hidden"
            onClick={() => setToggle(false)}
          ></i>
        </div>

        <div
          className="cursor-pointer text-[hsl(0,0%,20%)] font-medium text-[1.1rem] md:hidden"
          onClick={() => setToggle(!toggle)}
        >
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
