import React from "react";
import { TbBrandCpp } from "react-icons/tb";
import Image from "next/image";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  const cardsWithBg = workExperience.filter(
    (card) => "backgroundImage" in card && card.backgroundImage
  ).length;
  if (typeof window !== "undefined") {
    const loadStart = performance.now();
    console.log("[Performance] Experience component loaded at", new Date().toISOString());
    console.log("[Experience] Rendering work experience cards with backgrounds", {
      total: workExperience.length,
      withBackground: cardsWithBg,
    });
    // Track when component becomes visible
    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const loadTime = performance.now() - loadStart;
            console.log("[Performance] Experience section became visible, load time:", loadTime.toFixed(2), "ms");
            observer.disconnect();
          }
        });
      });
      // Observe will be set up after render
      setTimeout(() => {
        const element = document.getElementById("workExperience");
        if (element) observer.observe(element);
      }, 100);
    }
  }

  return (
    <div id="workExperience" className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 overflow-hidden"
          >
            {/* Background image layer — no blur so artwork stays recognizable */}
            {card.backgroundImage && (
              <div
                className="absolute inset-0 overflow-hidden"
                style={{
                  borderRadius: "calc(1.75rem * 0.96)",
                }}
                aria-hidden
              >
                <Image
                  src={card.backgroundImage}
                  alt=""
                  fill
                  className="object-cover object-center"
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                />
              </div>
            )}
            {/* Stronger overlay — maximizes text readability (Option A) */}
            {card.backgroundImage && (
              <div
                className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/70 to-slate-900/95"
                style={{ borderRadius: "calc(1.75rem * 0.96)" }}
                aria-hidden
              />
            )}
            {/* Content on top — stays readable */}
            <div className="relative z-10 flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <div className="relative lg:w-32 md:w-20 w-16 lg:h-32 md:h-20 h-16">
                <Image
                  src={card.thumbnail}
                  alt={card.title}
                  fill
                  className="object-contain"
                  loading="lazy"
                  sizes="(max-width: 768px) 64px, (max-width: 1024px) 80px, 128px"
                />
              </div>
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
