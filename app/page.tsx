"use client";
import dynamic from 'next/dynamic';

import { LazySection } from '@/components/ui/LazySection';

const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
const Grid = dynamic(() => import('@/components/Grid'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });
const Experience = dynamic(() => import('@/components/Experience'), { ssr: false });
const RecentProjects = dynamic(() => import('@/components/RecentProjects'), { ssr: false });

const Home = () => {
  if (typeof window !== "undefined") {
    console.log("[Performance] Home page loaded at", new Date().toISOString());
  }
  
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <LazySection data-section-name="Grid" rootMargin="200px">
          <Grid />
        </LazySection>
        <LazySection data-section-name="RecentProjects" rootMargin="200px">
          <RecentProjects />
        </LazySection>
        <LazySection data-section-name="Experience" rootMargin="200px">
          <Experience />
        </LazySection>
        <LazySection data-section-name="Footer" rootMargin="200px">
          <Footer />
        </LazySection>
      </div>
    </main>
  );
};

export default Home;
