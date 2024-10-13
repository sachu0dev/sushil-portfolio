import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const stack = [
  {
    name: "Docker",
    icon: "/icons/docker.svg",
    type: "Containerization platform",
    link: "https://www.docker.com/",
  },
  {
    name: "Cloudflare Worker",
    icon: "/icons/cloudflare.svg",
    type: "Serverless framework",
    link: "https://www.cloudflare.com/",
  },
  {
    name: "Git",
    icon: "/icons/git.svg",
    type: "Version control system",
    link: "https://git-scm.com/",
  },
  {
    name: "Postman",
    icon: "/icons/postman.svg",
    type: "Api testing tool",
    link: "https://www.postman.com/",
  },
  {
    name: "Github",
    icon: "/icons/github.svg",
    type: "Code hosting platform",
    link: "https://github.com/",
  },
  {
    name: "Notion",
    icon: "/icons/notion.svg",
    type: "Document management platform",
    link: "https://www.notion.so",
  },
];

const MyTools = () => {
  // Explicitly type the hovered state
  const [hovered, setHovered] = React.useState<{ [key: number]: boolean }>({});

  const handleHover = (id: number) => {
    setHovered((prevIsHovered) => ({ ...prevIsHovered, [id]: true }));
  };

  const handleLeave = (id: number) => {
    setHovered((prevIsHovered) => ({ ...prevIsHovered, [id]: false }));
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <motion.div
        className={"w-full flex-col"}
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        <h1 className="text-4xl font-KGBlankSpaceSketch text-white justify-start mb-2">
          My Tools
        </h1>
        <p className="text-lg font-medium text-white/80 justify-start font-PPNeueMontrealBook">
          Dedicated to keeping up-to-date with the latest web development
          technologies and best practices.
        </p>
        <Separator className="my-4 bg-white/5" />
      </motion.div>
      <div className="w-full grid gap-4 grid-cols-1 md:px-20 lg:px-0 lg:grid-cols-2">
        {stack.map((item, index) => (
          <Link href={item.link} key={index} target="_blank">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleLeave(index)}
              className="w-full flex items-center justify-between gap-4 text-white bg-[#121212] p-4 rounded-xl hover:bg-[#19191A] cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 gap-2 bg-[#19191A] rounded-md">
                  <Image
                    className="h-[40px] w-[40px] object-contain rounded-md"
                    src={item.icon}
                    alt="logo"
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <h1 className="text-xl font-SpaceGrotesk font-semibold">
                    {item.name}
                  </h1>
                  <p className="text-lg font-SpaceGrotesk font-medium text-white/75">
                    {item.type}
                  </p>
                </div>
              </div>
              <motion.div
                className="flex p-4"
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={hovered[index] ? { rotate: -45 } : { rotate: 0 }}
                >
                  <ArrowRight color={`${hovered[index] ? "white" : "gray"}`} />
                </motion.div>
              </motion.div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MyTools;