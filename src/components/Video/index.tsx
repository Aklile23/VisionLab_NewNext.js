"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitleForWhiteBg";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-visible");
          } else {
            entry.target.classList.remove("fade-visible");
          }
        });
      },
      { threshold: 0.5 } // Trigger when 20% of the element is visible
    );

    // Add observer to both left and right fade elements
    const elements = document.querySelectorAll(".fade-left, .fade-right");
    elements.forEach((el) => observer.observe(el));

    // Cleanup observer
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28 bg-white">
      <div className="container">
        {/* SectionTitle with left-to-right animation */}
        <div className="fade-left">
          <SectionTitle
            title="We are ready to help"
            paragraph="At VisionLab, innovation meets imagination. We specialize 
                    in crafting exceptional immersive and interactive 3D content 
                    that redefines boundaries in artistry, engineering, and 
                    technology. Our expertise extends from creating bespoke 3D models 
                    to deploying cutting-edge AI solutions, ensuring that your ideas 
                    are transformed into impactful realities. At VisionLab, we don’t just 
                    offer services; we forge partnerships to deliver tailored solutions that 
                    elevate your projects to extraordinary dimensions."
            center
            mb="80px"
            width="1070px"
          />
        </div>

        {/* Video Section with right-to-left animation */}
        <div className="-mx-4 flex flex-wrap fade-right">
          <div className="w-full px-4">
            <div
              className="mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <Image src="/images/WhatIsVisionLab.png" alt="video image" fill />
                <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center">
                  <button
                    aria-label="video play button"
                    onClick={() => setOpen(true)}
                    className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-black2 transition hover:bg-opacity-100"
                  >
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      className="fill-current"
                    >
                      <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative md:w-[75%] w-auto p-4 rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              controls
              autoPlay
              className="w-full h-auto rounded-md"
              src="/videos/About.mp4" // Path to your video file
            ></video>
            <button
              className="absolute top-2 right-2 text-black2"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;
