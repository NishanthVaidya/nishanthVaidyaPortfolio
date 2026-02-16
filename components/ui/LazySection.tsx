"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface LazySectionProps {
  children: React.ReactNode;
  className?: string;
  rootMargin?: string;
  threshold?: number;
  fallback?: React.ReactNode;
  "data-section-name"?: string;
}

export const LazySection = ({
  children,
  className,
  rootMargin = "100px",
  threshold = 0.1,
  fallback,
  "data-section-name": sectionName,
}: LazySectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const loadStartRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      // Fallback for browsers without IntersectionObserver
      setIsVisible(true);
      setHasLoaded(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasLoaded) {
            const loadStart = performance.now();
            loadStartRef.current = loadStart;
            
            if (typeof window !== "undefined") {
              const componentName = sectionRef.current?.getAttribute("data-section-name") || "Unknown";
              console.log(`[Performance] ${componentName} section intersecting at`, new Date().toISOString());
            }
            
            setIsVisible(true);
            setHasLoaded(true);
            
            // Log when content is actually rendered
            setTimeout(() => {
              if (loadStartRef.current) {
                const loadTime = performance.now() - loadStartRef.current;
                const componentName = sectionRef.current?.getAttribute("data-section-name") || "Unknown";
                console.log(`[Performance] ${componentName} section loaded, time:`, loadTime.toFixed(2), "ms");
              }
            }, 0);
            
            observer.disconnect();
          }
        });
      },
      {
        rootMargin,
        threshold,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [rootMargin, threshold, hasLoaded]);

  return (
    <div ref={sectionRef} className={cn(className)} data-section-name={sectionName}>
      {isVisible ? children : fallback || <div className="min-h-[200px]" />}
    </div>
  );
};
