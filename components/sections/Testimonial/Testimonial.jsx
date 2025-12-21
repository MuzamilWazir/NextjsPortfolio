"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

const Data = [
  {
    id: 1,
    image: "/testimonial1.png",
    title: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    description:
      "Outstanding work! The MERN stack application delivered exceeded our expectations.",
  },
  {
    id: 2,
    image: "/testimonial2.png",
    title: "Michael Chen",
    role: "Product Manager, Digital Solutions",
    description:
      "Working with this developer was a pleasure. They built a scalable backend with Node.js and Express .",
  },
  {
    id: 3,
    image: "/testimonial3.png",
    title: "Emily Rodriguez",
    role: "Founder, E-Commerce Platform",
    description:
      "Incredible React expertise! Our responsive e-commerce platform was delivered on time with clean, maintainable code.",
  },
  {
    id: 4,
    image: "/testimonial1.png",
    title: "David Kumar",
    role: "CTO, FinTech Startup",
    description:
      "Exceptional full-stack developer! Built our payment gateway integration and admin dashboard with top-notch security practices. ",
  },
];

function Testimonial() {
  return (
    <section className="py-20 px-4" id="testimonial">
      <h2 className="text-center text-3xl md:text-4xl font-semibold mb-2">
        My Clients Say
      </h2>
      <span className="block text-center text-sm text-gray-600 dark:text-gray-400 mb-16">
        Testimonial
      </span>

      <div className="max-w-187.5 mx-auto">
        <Swiper
          loop={true}
          grabCursor={true}
          spaceBetween={24}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 48,
            },
          }}
          modules={[Pagination]}
          className="pb-12"
        >
          {Data.map(({ id, image, title, role, description }) => {
            return (
              <SwiperSlide key={id}>
                <div className="bg-white dark:bg-gray-800 border border-black/10 dark:border-gray-700 p-6 md:p-8 rounded-3xl mb-12">
                  <img
                    src={image}
                    alt={title}
                    className="w-16 h-16 rounded-full mb-4 object-cover"
                  />

                  <h3 className="text-base font-medium mb-1">{title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                    {role}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {description}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: #6b7280 !important;
        }
        .swiper-pagination-bullet-active {
          background-color: #1f2937 !important;
        }
        @media (prefers-color-scheme: dark) {
          .swiper-pagination-bullet-active {
            background-color: #ffffff !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Testimonial;
