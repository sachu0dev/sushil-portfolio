"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Projects from "./Projects";
import { Github } from "lucide-react";

interface Projects {
  num: string;
  category: string;
  title: string;
  description: string;
  stack: string[];
  image: string;
  live: string;
  github: string;
}

const projects: Projects[] = [
  {
    num: "01",
    category: "Fullstack",
    title: "Nameless Feedback: Anonymous Feedback App",
    description:
      "Created an anonymous feedback platform using Next.js and MongoDB, fostering open, honest communication within teams or communities by enabling users to share thoughts and suggestions without revealing their identity.",
    stack: ["Next.js", "NextAuth.js", "GeminiAi", "MongoDB", "Resend"],
    image: "/assets/projects/nameless.png",
    live: "https://nameless.sushilcode.lol",
    github: "https://github.com/sachu0dev/nameless-feedback",
  },
  {
    num: "02",
    category: "Fullstack",
    title: "Kabutar: Real-Time Chat Application",
    description:
      "Kabutar is a real-time chat application built with React, Node.js, Express, and Socket.IO, featuring Cloudinary for media handling and optimized performance using Redux Toolkit for state management.",
    stack: ["React", "Node.js", "Express", "Socket.IO", "Cloudinary", "Redux"],
    image: "/assets/projects/p1.png",
    live: "https://kabutar.sushilcode.lol",
    github: "https://github.com/sachu0dev/Kabutar-Chat-app",
  },
  {
    num: "03",
    category: "Fullstack",
    title: "Typing Panda: Vanila Fullstack Typing app",
    description:
      "Typing Panda: Interactive game to enhance typing skills with customizable features for all skill levels.",
    stack: ["JavaScript", "Node.js", "Express", "MongoDB"],
    image: "/assets/projects/p2.png",
    live: "https://typingpanda.netlify.app/",
    github: "https://github.com/sachu0dev/Typing_Panda",
  },
  {
    num: "04",
    category: "Frontend",
    title: "Masalamandi: Swiggy API Integration Project.",
    description:
      "Masalamandi: Integrated Swiggy API, developed Redux cart, improved data accuracy by 95%, and boosted engagement by 40%.",
    stack: ["React", "Tailwind", "Redux"],
    image: "/assets/projects/p3.png",
    live: "https://masalamandi.vercel.app",
    github: "https://github.com/sachu0dev/MasalaMandi",
  },
];

const Projectcard = () => {
  const [hoverElement, setHoverElement] = useState<{ [key: number]: boolean }>({
    0: false,
    1: false,
    2: false,
    3: false,
  });

  const handleHover = (id: number) => {
    setHoverElement((prevIsHovered) => ({ ...prevIsHovered, [id]: true }));
  };

  const handleLeave = (id: number) => {
    setHoverElement((prevIsHovered) => ({ ...prevIsHovered, [id]: false }));
  };

  return (
    <>
      {projects.map((project, index) => {
        return (
          <div
            key={project.num}
            className={`relative text-gray-400`}
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={() => handleLeave(index)}
          >
            <Link
              href={project.live}
              key={index}
              target="_blank"
              className={`relative flex flex-col xl:flex-row gap-4 text-white mb-14 ${
                index % 2 !== 0 ? "xl:flex-row-reverse" : "xl:flex-row"
              }`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleLeave(index)}
            >
              <motion.div
                className={`h-1/3 xl:h-auto xl:w-1/3 `}
                animate={
                  hoverElement[index] ? { padding: "10px" } : { padding: "0px" }
                }
                transition={{ duration: 0.2 }}
              >
                <Image
                  src={project.image}
                  alt={"profile"}
                  width={900}
                  height={900}
                  className={`w-full h-full object-cover aspect-square rounded-t-3xl xl:rounded-t-[0] ${
                    index % 2 !== 0
                      ? "xl:rounded-tr-3xl xl:rounded-br-3xl"
                      : "xl:rounded-tl-3xl xl:rounded-bl-3xl"
                  }`}
                />
              </motion.div>

              <motion.div
                className={`h-2/3 xl:h-auto xl:w-2/3 relative flex flex-col justify-between bg-[#181819] p-6 space-y-4 rounded-b-3xl xl:rounded-b-[0] ${
                  index % 2 !== 0
                    ? "xl:rounded-tl-3xl xl:rounded-bl-3xl"
                    : "xl:rounded-tr-3xl xl:rounded-br-3xl"
                }`}
                animate={
                  hoverElement[index]
                    ? { border: "1px solid gray" }
                    : { border: "1px solid black" }
                }
                transition={{ duration: 0.2 }}
              >
                <div className="space-y-4 ">
                  <div className="flex justify-between">
                    <span className="text-sm gap-2 relative hidden md:inline-block rounded-3xl border border-gray-600 px-2 py-1 bg-opacity-10 bg-white">
                      {project.category}
                    </span>

                    <div className="flex gap-2 flex-wrap">
                      {project.stack.map((stack) => {
                        return (
                          <span
                            key={stack}
                            className="text-sm relative inline-block rounded-3xl border border-gray-600 px-2 py-1 bg-opacity-10 bg-white"
                          >
                            {stack}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <h1 className="text-5xl font-bold font-DegularBold relative overflow-hidden">
                    {project.title}
                  </h1>

                  <p className="text-white/60 text-lg">{project.description}</p>
                </div>

                <div className="flex space-x-8">
                  <div className="flex-1">
                    <h1 className="text-5xl  font-DegularBold">35%</h1>

                    <p className="text-white/60 text-lg">
                      Developed a full-stack blog platform with React,
                      TypeScript, and Cloudflare
                    </p>
                  </div>

                  <div className="flex-1">
                    <h1 className="text-5xl font-DegularBold">35%</h1>

                    <p className="text-white/60 text-lg">
                      Developed a full-stack blog platform with React,
                      TypeScript, and Cloudflare
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`absolute flex space-x-2 z-30 bg-[#181819] p-1 bottom-[-28px] rounded-b-full  ${
                index % 2 !== 0 ? "left-[40px]" : "right-[40px]"
              }`}
            >
              <Link href={project.github} target="_blank">
                <Github size={20} />
              </Link>
            </motion.div>
          </div>
        );
      })}
    </>
  );
};

export default Projectcard;
