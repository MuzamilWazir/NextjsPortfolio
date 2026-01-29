"use client";

import { useState } from "react";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="py-20">
      <h2 className="text-center text-3xl md:text-4xl font-semibold mb-2">
        Qualification
      </h2>
      <span className="block text-center text-sm text-gray-600 dark:text-gray-400 mb-16">
        My personal Journey
      </span>

      <div className="max-w-3xl mx-auto px-4">
        <div className="flex justify-center mb-8 flex-wrap gap-4">
          <div
            className={`text-lg font-medium cursor-pointer mx-4 flex items-center transition-colors ${
              toggleState === 1
                ? "text-gray-900 dark:text-white"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            }`}
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap text-[1.8rem] mr-1"></i>
            Education
          </div>

          <div
            className={`text-lg font-medium cursor-pointer mx-4 flex items-center transition-colors ${
              toggleState === 2
                ? "text-gray-900 dark:text-white"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            }`}
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt text-[1.8rem] mr-1"></i>
            Experience
          </div>
        </div>

        <div className="grid grid-cols-[0.5fr] justify-center min-h-100">
          {/* Education Content */}
          <div className={toggleState === 1 ? "block" : "hidden"}>
            <div className="grid grid-cols-[1fr_max-content_1fr] gap-x-2 md:gap-x-6">
              <div className="pb-12">
                <h3 className="text-base font-medium">Matric</h3>
                <span className="inline-block text-sm mb-4">
                  Govert High School MehdiAbad
                </span>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <i className="uil uil-calendar-alt"></i> 2016-2018
                </div>
              </div>

              <div className="flex flex-col items-center">
                <span className="w-3.25 h-3.25 bg-gray-600 dark:bg-gray-400 rounded-full"></span>
                <span className="w-px flex-1 bg-gray-600 dark:bg-gray-400"></span>
              </div>
              <div></div>
            </div>

            <div className="grid grid-cols-[1fr_max-content_1fr] gap-x-2 md:gap-x-6">
              <div className="hidden md:block"></div>
              <div className="flex flex-col items-center">
                <span className="w-3.25 h-3.25 bg-gray-600 dark:bg-gray-400 rounded-full"></span>
                <span className="w-px flex-1 bg-gray-600 dark:bg-gray-400"></span>
              </div>
              <div className="pb-12 col-span-2 md:col-span-1 md:col-start-3">
                <h3 className="text-base font-medium">FSC Engineering</h3>
                <span className="inline-block text-sm mb-4">
                  Uswa College Islamabad
                </span>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <i className="uil uil-calendar-alt"></i> 2018-2020
                </div>
              </div>
            </div>

            <div className="grid grid-cols-[1fr_max-content_1fr] gap-x-2 md:gap-x-6">
              <div className="pb-12">
                <h3 className="text-base font-medium">Software Engineering</h3>
                <span className="inline-block text-sm mb-4">
                  Mirpur University of Science and Technology
                </span>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <i className="uil uil-calendar-alt"></i> 2020-2024
                </div>
              </div>

              <div className="flex flex-col items-center">
                <span className="w-3.25 h-3.25 bg-gray-600 dark:bg-gray-400 rounded-full"></span>
              </div>
              <div></div>
            </div>
          </div>

          {/* Experience Content */}
          <div className={toggleState === 2 ? "block" : "hidden"}>
            <div className="grid grid-cols-[1fr_max-content_1fr] gap-x-2 md:gap-x-6">
              <div className="pb-12">
                <h3 className="text-base font-medium">
                  MERN Stack Developer Intern
                </h3>
                <span className="inline-block text-sm mb-4">
                  CodeCrafters Hub, Lahore Pakistan
                </span>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <i className="uil uil-calendar-alt"></i> Nov 2024 – Jan 2025
                </div>
              </div>

              <div className="flex flex-col items-center">
                <span className="w-3.25 h-3.25 bg-gray-600 dark:bg-gray-400 rounded-full"></span>
                <span className="w-px flex-1 bg-gray-600 dark:bg-gray-400"></span>
              </div>
              <div></div>
            </div>

            <div className="grid grid-cols-[1fr_max-content_1fr] gap-x-2 md:gap-x-6">
              <div className="hidden md:block"></div>
              <div className="flex flex-col items-center">
                <span className="w-3.25 h-3.25 bg-gray-600 dark:bg-gray-400 rounded-full"></span>
                <span className="w-px flex-1 bg-gray-600 dark:bg-gray-400"></span>
              </div>
              <div className="pb-12 col-span-2 md:col-span-1 md:col-start-3">
                <h3 className="text-base font-medium">
                  Software Developer Intern
                </h3>
                <span className="inline-block text-sm mb-4">
                  NTC National Telecommunication Corporation, Islamabad G5-2
                  Pakistan
                </span>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <i className="uil uil-calendar-alt"></i> May 2025 – July 2025
                </div>
              </div>
            </div>

            <div className="grid grid-cols-[1fr_max-content_1fr] gap-x-2 md:gap-x-6">
              <div className="pb-12">
                <h3 className="text-base font-medium">Full Stack Developer</h3>
                <span className="inline-block text-sm mb-4">
                  Mehdi Technologies, Islamabad Pakistan
                </span>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <i className="uil uil-calendar-alt"></i> July 2025 – Present
                </div>
              </div>

              <div className="flex flex-col items-center">
                <span className="w-3.25 h-3.25 bg-gray-600 dark:bg-gray-400 rounded-full"></span>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
