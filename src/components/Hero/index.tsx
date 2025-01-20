"use client"

import Link from "next/link";
import { useEffect } from "react";
import { gsap } from "gsap";

const Hero = () => {
  useEffect(() => {
    // GSAP Animation
    const timeline = gsap.timeline();

    timeline
      .fromTo(
        ".hero-video",
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power2.out" }
      )
      .fromTo(
        ".hero-title",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=1"
      )
      .fromTo(
        ".hero-paragraph",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 2, ease: "power3.out" },
        "-=0.8"
      )
      .fromTo(
        ".hero-button",
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.6, ease: "back.out(1.7)" },
        "-=0.5"
      );
  }, []);

  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        {/* Background Video */}
        <div className="absolute inset-0 z-[-2] hero-video">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 z-[-1] bg-gradient-to-b from-black/90 via-black/30 to-transparent h-[350%]"></div>

        {/* Content */}
        <div className="container mb-52 mt-52 relative">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight drop-shadow-lg hero-title">
                  Elevating Digital Dimensions
                </h1>
                <p className="mb-7 text-base !leading-relaxed text-gray-200 sm:text-lg md:text-xl drop-shadow-md hero-paragraph">
                We specialize in BIM, immersive 3D content, and AI-driven solutions, providing tools for efficient project management, automation, and precision modeling..
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 hero-button">
                  <Link
                    href="https://nextjstemplates.com/templates/saas-starter-startup"
                    className="bg-black2 px-8 py-4 text-base font-semibold text-white rounded-lg shadow-lg hover:bg-black"
                  >
                    🔥 Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
