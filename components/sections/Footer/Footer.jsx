import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-black/10 dark:border-gray-700">
      <div className="container mx-auto px-4 py-8 pb-24">
        <h1 className="text-center text-2xl font-semibold text-gray-900 dark:text-white mb-8">
          itzmuzu
        </h1>

        <ul className="flex justify-center gap-6 mb-8">
          <li>
            <a
              href="#about"
              className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#portfolio"
              className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#testimonial"
              className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              Testimonial
            </a>
          </li>
        </ul>

        <div className="flex justify-center gap-5 mb-8">
          <a
            href="https://www.linkedin.com/in/wazir-muhammad-muzammil-6a2148251/"
            className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-lg p-2 rounded-md inline-flex justify-center items-center w-10 h-10 hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>
          <a
            href="https://github.com/MuzamilWazir"
            className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-lg p-2 rounded-md inline-flex justify-center items-center w-10 h-10 hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="uil uil-github"></i>
          </a>
          <a
            href="https://x.com/Muzammil_wazir"
            className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-lg p-2 rounded-md inline-flex justify-center items-center w-10 h-10 hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="uil uil-twitter"></i>
          </a>
        </div>

        <span className="block mt-16 text-gray-900 dark:text-white text-center text-sm">
          Made with <i className="uil uil-heart text-red-500"></i>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
