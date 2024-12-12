import { HoverEffect } from "./ui/card-hover-effect";

export function OtherProjects() {
  return (
    <>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-KGBlankSpaceSketch text-white ">
          OTHER PROJECTS
        </h1>
      </div>
      <HoverEffect items={projects} />
    </>
  );
}
export const projects = [
  {
    title: "Typing Panda",
    description:
      "Developed a full-stack typing practice platform with Node.js and Express.js, featuring dual modes and real-time leaderboards. Enhanced security with JWT and Zod, improved user experience, and integrated Chart.js for progress tracking, increasing typing speed by 40%.",
    link: "https://typingpanda.netlify.app",
  },
  {
    title: "Masalamandi",
    description:
      "Integrated Swiggy API with a proxy backend for seamless browsing of 1000+ restaurants. Built a Redux Toolkit cart system, boosting engagement by 40%. Optimized load time by 30%.",
    link: "https://masalamandi.vercel.app/",
  },
  {
    title: "Inspiration Blog Website",
    description:
      "Built a full-stack blog platform with React, TypeScript, and Cloudflare Workers, improving load speed by 40%. Enhanced engagement by 25% with secure authentication and optimized PostgreSQL, cutting query times by 50%.",
    link: "https://medium-kappa-six.vercel.app",
  },
  {
    title: "Pay Vault",
    description:
      "A simple wallet application built with React and Express, showcasing dynamic user interfaces, state management, and responsive design.",
    link: "https://github.com/sachu0dev/PayVault",
  },
  {
    title: "PC Parts",
    description:
      "Created a static website for PC parts using HTML, CSS, and JavaScript, featuring a responsive design and visually appealing layout. Showcased static data to highlight frontend development skills and user-friendly interfaces.",
    link: "https://pc-parts-in.netlify.app",
  },
  {
    title: "Mini Projects",
    description:
      "Discover 20+ beginner-friendly mini projects designed to build your coding skills and spark your passion for programming. Enjoy hands-on experiences that make learning fun and accessible for everyone.",
    link: "https://sushil-miniprojects.netlify.app",
  },
];
