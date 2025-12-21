import React from "react";

const Social = () => {
  return (
    <div className="flex lg:flex-col justify-center lg:justify-start gap-6 lg:gap-6">
      <a
        href="https://www.linkedin.com/in/wazir-muhammad-muzammil-6a2148251/"
        className="text-2xl text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-300"
        target="_blank"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>
      <a
        href="https://github.com/MuzamilWazir"
        className="text-2xl text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-300"
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>
      </a>
      <a
        href="https://x.com/Muzammil_wazir"
        className="text-2xl text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-300"
        target="_blank"
      >
        <i className="uil uil-twitter-alt"></i>
      </a>
    </div>
  );
};

export default Social;
