import React from "react";

const Info = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 text-center shadow-sm">
        <i className="bx bx-award text-3xl text-gray-700 dark:text-gray-300 mb-3"></i>
        <h3 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-1">
          Experience
        </h3>
        <span className="text-xs text-gray-600 dark:text-gray-400">
          6 month Experience
        </span>
      </div>
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 text-center shadow-sm">
        <i className="bx bx-briefcase-alt text-3xl text-gray-700 dark:text-gray-300 mb-3"></i>
        <h3 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-1">
          Complete
        </h3>
        <span className="text-xs text-gray-600 dark:text-gray-400">
          4+ projects
        </span>
      </div>
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 text-center shadow-sm">
        <i className="bx bx-support text-3xl text-gray-700 dark:text-gray-300 mb-3"></i>
        <h3 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-1">
          Support
        </h3>
        <span className="text-xs text-gray-600 dark:text-gray-400">
          Online 24/7
        </span>
      </div>
    </div>
  );
};

export default Info;
