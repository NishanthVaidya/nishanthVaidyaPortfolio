"use client";
import dynamic from 'next/dynamic';


const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
const Grid = dynamic(() => import('@/components/Grid'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });
const Experience = dynamic(() => import('@/components/Experience'), { ssr: false });
const RecentProjects = dynamic(() => import('@/components/RecentProjects'), { ssr: false });
const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Footer />
      </div>
      {/* Fade at bottom so blue blends into body background */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[25vh] pointer-events-none bg-gradient-to-t from-[hsl(var(--background))] to-transparent"
        aria-hidden
      />
    </main>
  );
};

export default Home;
