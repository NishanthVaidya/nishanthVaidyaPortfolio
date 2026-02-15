"use client";

import { ExternalLink } from "lucide-react";

import { projects } from "@/data";
import { cn } from "@/lib/utils";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4 mt-10 max-w-7xl mx-auto">
        {projects.map((item) => (
          <div
            key={item.id}
            className={cn(
              "w-full rounded-3xl border border-white/[0.05] p-5 transition duration-300",
              "hover:border-white/[0.1] hover:shadow-lg hover:scale-[1.02]",
              "flex flex-col"
            )}
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
          >
            {/* Image: full image visible, edges fade into card background */}
            <div
              className={cn(
                "relative w-full aspect-[4/3] min-h-[180px] rounded-2xl overflow-hidden",
                "bg-black/20 flex items-center justify-center"
              )}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-contain rounded-2xl"
              />
              {/* Gradient overlay: image edges fade into card background */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 40%, rgba(4,7,29,0.4) 70%, rgba(4,7,29,0.95) 100%)",
                }}
              />
            </div>

            <h2 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 mt-4">
              {item.title}
            </h2>

            <p
              className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 mt-1"
              style={{ color: "#BEC1DD" }}
            >
              {item.des}
            </p>

            <div className="flex items-center justify-between mt-6 gap-3 flex-wrap">
              <div className="flex items-center">
                {item.iconLists.map((icon, index) => (
                  <div
                    key={index}
                    className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                    style={{
                      transform: `translateX(-${5 * index + 2}px)`,
                    }}
                  >
                    <img src={icon} alt="" className="p-2" />
                  </div>
                ))}
              </div>

              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex items-center gap-2 text-sm font-medium text-purple",
                    "hover:text-purple-300 transition-colors"
                  )}
                >
                  View on GitHub
                  <ExternalLink className="w-4 h-4 shrink-0" />
                </a>
              ) : (
                <span className="text-sm text-white/50">Code on request</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
