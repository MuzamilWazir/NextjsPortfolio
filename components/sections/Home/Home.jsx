import React from "react";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <section
      className="pt-24 pb-12 md:pt-28 md:pb-16 lg:pt-32 lg:pb-20"
      id="home"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-12 items-center lg:pt-20 pt-14">
          <Social />
          <div
            className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-cover bg-center bg-[url('/profile-pic.png')] shadow-[inset_0_0_0_9px_rgba(173,173,170,0.26)] mx-auto lg:mx-0 lg:order-4 order-2"
            style={{
              animation: "profile_animate 8s ease-in-out infinite 1s",
            }}
          ></div>{" "}
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
