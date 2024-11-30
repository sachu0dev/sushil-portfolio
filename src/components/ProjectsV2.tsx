import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Github, Radio } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { NeonGradientCard } from "./ui/neon-gradient-card";

export function ProjectsV2() {
  const data = [
    {
      title: "PGConnect",
      content: (
        <motion.div
          className="w-full bg-[#181819] p-6 rounded-xl border-[1px] border-gray-700 "
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <NeonGradientCard className="items-center justify-center text-center">
            <div className="flex justify-between w-full">
              <div className="text-neutral-800 w-full dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                <div className="flex justify-between">
                  <h3 className="text-2xl font-semibold mb-2 text-start">
                    PGConnect: A Saas Paltform for Booking Pgs
                  </h3>
                  <div className="flex space-x-2 h-full">
                    <Link
                      href={"https://pgconnect.site"}
                      target="_blank"
                      className="bg-black p-2 right-4  text-white rounded-full"
                    >
                      <Radio size={16} />
                    </Link>
                    <Link
                      href={"https://github.com/sachu0dev/PGConnect"}
                      target="_blank"
                      className="bg-black p-2  text-white rounded-full"
                    >
                      <Github size={16} />
                    </Link>
                  </div>
                </div>
                <p className="line-clamp-4 text-ellipsis text-start">
                  Developed a SaaS platform that connects users seeking PG
                  accommodations with PG owners. The platform integrates Google
                  Maps API to provide precise address details, ensuring seamless
                  connections between users and PG owners.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/assets/projects/project/p1.png"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="/assets/projects/project/p2.png"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="/assets/projects/project/p3.png"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="/assets/projects/project/p4.png"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </NeonGradientCard>
        </motion.div>
      ),
    },
    {
      title: "Nameless",
      content: (
        <motion.div
          className="w-full bg-[#181819] p-6 rounded-xl border-[1px] border-gray-700"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <NeonGradientCard className="items-center justify-center text-center">
            <div className="flex justify-between w-full">
              <div className="text-neutral-800 w-full dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                <div className="flex justify-between">
                  <h3 className="text-2xl font-semibold mb-2 text-start">
                    Nameless Feedback: Anonymous Feedback App
                  </h3>
                  <div className="flex space-x-2 h-full">
                    <Link
                      href={"https://nameless.devbysushil.com"}
                      target="_blank"
                      className="bg-black p-2 right-4  text-white rounded-full"
                    >
                      <Radio size={16} />
                    </Link>
                    <Link
                      href={"https://github.com/sachu0dev/nameless-feedback"}
                      target="_blank"
                      className="bg-black p-2  text-white rounded-full"
                    >
                      <Github size={16} />
                    </Link>
                  </div>
                </div>
                <p className="line-clamp-4 text-ellipsis text-start">
                  Created an anonymous feedback platform using Next.js and
                  MongoDB, fostering open, honest communication within teams or
                  communities by enabling users to share thoughts and
                  suggestions without revealing their identity.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/assets/projects/project1/p1.png"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="/assets/projects/project1/p2.png"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="/assets/projects/project1/p3.png"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="/assets/projects/project1/p4.png"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </NeonGradientCard>
        </motion.div>
      ),
    },
    {
      title: "Kabutar",
      content: (
        <motion.div
          className="w-full bg-[#181819] p-6 rounded-xl border-[1px] border-gray-700"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <NeonGradientCard className="items-center justify-center text-center">
            <div className="flex justify-between w-full">
              <div className="text-neutral-800 w-full dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 ">
                <div className="flex justify-between">
                  <h3 className="text-2xl font-semibold mb-2 text-start">
                    Kabutar: Real-Time Chat Application
                  </h3>
                  <div className="flex space-x-2 h-full">
                    <Link
                      href={"https://kabutar.devbysushil.com"}
                      target="_blank"
                      className="bg-black p-2 right-4  text-white rounded-full"
                    >
                      <Radio size={16} />
                    </Link>
                    <Link
                      href={"https://github.com/sachu0dev/Kabutar-Chat-app"}
                      target="_blank"
                      className="bg-black p-2  text-white rounded-full"
                    >
                      <Github size={16} />
                    </Link>
                  </div>
                </div>
                <p className="line-clamp-4 text-ellipsis text-start">
                  Kabutar is a real-time chat application built with React,
                  Node.js, Express, and Socket.IO, featuring Cloudinary for
                  media handling and optimized performance using Redux Toolkit
                  for state management.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/assets/projects/project2/p1.png"
                alt="hero template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="/assets/projects/project2/p2.png"
                alt="feature template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="/assets/projects/project2/p3.png"
                alt="bento template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="/assets/projects/project2/p4.png"
                alt="cards template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </NeonGradientCard>
        </motion.div>
      ),
    },
    {
      title: "Typing Panda",
      content: (
        <motion.div
          className="w-full bg-[#181819] p-6 rounded-xl border-[1px] border-gray-700"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <NeonGradientCard className="items-center justify-center text-center">
            <div className="flex justify-between w-full">
              <div className="text-neutral-800 w-full dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 ">
                <div className="flex justify-between">
                  <h3 className="text-2xl font-semibold mb-2 text-start">
                    Typing Panda: Vanila Fullstack Typing app
                  </h3>
                  <div className="flex space-x-2 h-full">
                    <Link
                      href={"https://typingpanda.netlify.app"}
                      target="_blank"
                      className="bg-black p-2 right-4  text-white rounded-full"
                    >
                      <Radio size={16} />
                    </Link>
                    <Link
                      href={"https://github.com/sachu0dev/Typing_Panda"}
                      target="_blank"
                      className="bg-black p-2  text-white rounded-full"
                    >
                      <Github size={16} />
                    </Link>
                  </div>
                </div>
                <p className="line-clamp-4 text-ellipsis text-start">
                  Typing Panda: Interactive game to enhance typing skills with
                  customizable features for all skill levels.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/assets/projects/project3/p1.png"
                alt="hero template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="/assets/projects/project3/p2.png"
                alt="feature template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="/assets/projects/project3/p3.png"
                alt="bento template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="/assets/projects/project3/p4.png"
                alt="cards template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </NeonGradientCard>
        </motion.div>
      ),
    },
  ];
  return (
    <div className="w-full dark font-DegularBold">
      <Timeline data={data} />
    </div>
  );
}
