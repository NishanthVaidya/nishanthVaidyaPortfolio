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
      {/* Fade to black after footer: gradient so page ends naturally in black */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[38vh] pointer-events-none bg-gradient-to-t from-black to-transparent"
        aria-hidden
      />
    </main>
  );
};

export default Home;
