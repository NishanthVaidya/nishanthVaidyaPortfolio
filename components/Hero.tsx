import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
          fillOpacity={0.14}
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="#e8e0f0"
        />
      </div>

      {/**
       *  Hero background: same image as "I focus on delivering..." (bg1.png)
       *  with overlay for contrast matching work experience section
       */}
      <div
        className="h-screen w-full overflow-visible bg-transparent dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Background + overlay with bottom fade — fades out naturally into next section */}
        <div
          className="absolute inset-0 [mask-image:linear-gradient(to_bottom,black_0%,black_55%,transparent_100%)]"
          aria-hidden
        >
          {/* Background image — same as grid item "I focus on delivering..." */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url(/bg1.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            aria-hidden
          />
          {/* Overlay — same as work experience for consistent text contrast */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/70 to-slate-900/95"
            aria-hidden
          />
        </div>
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center bg-transparent [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
          aria-hidden
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-3xl text-center text-blue-100 max-w-80">
            Nishanth Vaidya
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="MSCE-Syracuse University | Ex-Deloitte | Ex-Oracle"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">
            Technology isn’t about complexity—it’s about making life simpler and smarter.
          </p>

          <a href="#about" className="relative-container">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
