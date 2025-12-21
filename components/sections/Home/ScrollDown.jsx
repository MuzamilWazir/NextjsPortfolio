import React from "react";

const ScrollDown = () => {
  return (
    <div className="hidden lg:block mt-16 ml-36">
      <a
        href="#about"
        className="inline-flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium"
      >
        <div className="relative w-8 h-12">
          <div
            className="absolute left-1/2 top-3 w-0.5 h-4 bg-gray-700 dark:bg-gray-300"
            style={{
              animation: "scrollDown 2s ease-in-out infinite",
            }}
          ></div>
          <div className="absolute inset-0 border-2 border-gray-700 dark:border-gray-300 rounded-full"></div>
        </div>
        <span>Scroll Down</span>
        <i className="uil uil-arrow-down text-xl"></i>
      </a>
    </div>
  );
};

export default ScrollDown;
