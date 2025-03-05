"use client"
import { useEffect } from "react";
import SectionTitleForBlackBg from "../Common/SectionTitleForBalckBg";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import TrueFocus from "../bits Components/TrueFocus";

const Features = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-up");
          } else {
            entry.target.classList.remove("fade-up");
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    const elements = document.querySelectorAll(".fade-trigger");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <section
        id="features"
        className="py-16 md:py-20 lg:py-28 bg-[#030303] relative overflow-hidden"
      >
        {/* Animated lines */}
        <div className="absolute inset-0 z-0">
          {/* Vertical Lines */}
          <div className="line vertical-line line-1"></div>
          <div className="line vertical-line line-2"></div>
          <div className="line vertical-line line-3"></div> {/* New Line */}
          <div className="line vertical-line line-4"></div> {/* New Line */}

          {/* Horizontal Lines */}
          <div className="line horizontal-line line-3"></div>
          <div className="line horizontal-line line-4"></div>
          <div className="line horizontal-line line-5"></div> {/* New Line */}
          <div className="line horizontal-line line-6"></div> {/* New Line */}
        </div>

        <div className="container relative z-10 fade-trigger">
          {/* <SectionTitleForBlackBg
            title="What We Do"
            paragraph="Explore our wide range of expertise, which includes:"
            center
          /> */}
          <TrueFocus 
            sentence="What We Do"
            manualMode={false}
            blurAmount={5}
            borderColor="white"
            animationDuration={1}
            pauseBetweenAnimations={1}
            />
            <p className="py-6 px-4 md:px-20 lg:px-44 text-base sm:text-lg md:text-xl lg:text-2xl text-center">Explore our wide range of expertise, which includes:</p>

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3 fade-trigger">
            {featuresData.map((feature) => (
              <SingleFeature
                key={feature.id}
                feature={feature}
                className="fade-trigger"
              />
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Common line styles */
        .line {
          position: absolute;
          animation: move-line 5s linear infinite;
        }

        /* Vertical Lines */
        .vertical-line {
          width: 2px;
          height: 180vh;
          background: linear-gradient(
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0.1),
            rgba(255, 255, 255, 0)
          );
          animation: move-vertical 5s linear infinite;
        }

        .line-1 {
          left: 20%;
        }

        .line-2 {
          left: 80%;
        }

        /* Horizontal Lines */
        .horizontal-line {
          height: 2px;
          width: 280%;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0.1),
            rgba(255, 255, 255, 0)
          );
          animation: move-horizontal 5s linear infinite;
        }

        .line-3 {
          top: 25%;
          left: 10%;
        }

        .line-4 {
          top: 75%;
          left: 10%;
        }

        /* Additional vertical lines */
        .line-3 {
          left: 40%; /* Adjust position */
          animation-delay: 1s; /* Offset animation start */
        }

        .line-4 {
          left: 60%; /* Adjust position */
          animation-delay: 2s; /* Offset animation start */
        }

        /* Additional horizontal lines */
        .line-5 {
          top: 50%; /* Adjust position */
          animation-delay: 1s; /* Offset animation start */
        }

        .line-6 {
          top: 90%; /* Adjust position */
          animation-delay: 2s; /* Offset animation start */
        }


        /* Fade-in and Fade-out Animations */
        .fade-trigger {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .fade-up {
          opacity: 1;
          transform: translateY(0);
        }

        /* Animation for vertical lines */
        @keyframes move-vertical {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(100%);
          }
        }

        /* Animation for horizontal lines */
        @keyframes move-horizontal {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(100%);
          }
        }
      `}</style>
    </>
  );
};

export default Features;
