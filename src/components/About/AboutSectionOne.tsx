"use client"
import { useEffect } from "react";
import Image from "next/image";
import SectionTitleForWhiteBg from "../Common/SectionTitleForWhiteBg";

const AboutSectionOne = () => {
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
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    const elements = document.querySelectorAll(".fade-left, .fade-right");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-gray-200 text-black2">
        <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
          <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
        </svg>
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28 bg-white">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="mx-4 flex flex-wrap items-center">
            {/* Section Title with Left-to-Right Animation */}
            <div className="w-full px-4 lg:w-1/2 fade-left">
              <SectionTitleForWhiteBg
                title="Innovative Solutions for Modern Businesses"
                paragraph="Visionlab combines expertise and innovation to deliver advanced technological solutions that empower businesses to thrive in a dynamic digital landscape. By focusing on precision, creativity, and impact, we help organizations overcome challenges and unlock new opportunities for growth and success."
                mb="44px"
              />

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="BIM" />
                    <List text="AI-Powered Automation" />
                    <List text="Custom Solutions" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Point Cloud Processing" />
                    <List text="Projection Mapping" />
                    <List text="VR/AR/XR" />
                  </div>
                </div>
              </div>
            </div>

            {/* Videos with Right-to-Left Animation */}
            <div className="w-full px-4 lg:w-1/2 rounded fade-right">
              <div className="grid grid-cols-2 gap-4 max-w-[500px] mx-auto lg:mr-0 h-full">
                {/* First Column: Single Video taking the whole height */}
                <div className="row-span-2">
                  <video
                    autoPlay
                    loop
                    muted
                    className="w-full h-[97%] rounded-lg object-cover"
                  >
                    <source src="/videos/video1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                {/* Second Column: Two Videos each taking half of the column */}
                <div className="grid grid-rows-2 gap-4 h-full">
                  <div className="h-full">
                    <video
                      autoPlay
                      loop
                      muted
                      className="w-full h-full rounded-lg object-cover"
                    >
                      <source src="/videos/video2.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="h-full">
                    <video
                      autoPlay
                      loop
                      muted
                      className="w-full h-full rounded-lg object-cover"
                    >
                      <source src="/videos/video3.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
