import { Timeline } from "@/components/ui/timeline";
import { motion } from "framer-motion";
import { Github, Radio } from "lucide-react";
import { ProjectCard } from "./projectCard";

export function ProjectsV2() {
  const data = [
    {
      title: "PGConnect",
      content: (
        <motion.div
          className="w-full"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <ProjectCard
            title="PGConnect: A Platform for Booking PGs"
            href="https://pgconnect.site"
            description="Developed a SaaS platform that connects users seeking PG accommodations with PG owners. The platform integrates Google Maps API to provide precise address details, ensuring seamless connections between users and PG owners."
            dates="2023"
            tags={["Next.js", "MongoDB", "Google Maps API", "SaaS"]}
            image="/assets/projects/project/p1.png"
            links={[
              {
                icon: <Radio size={16} />,
                type: "Live Site",
                href: "https://pgconnect.site",
              },
              {
                icon: <Github size={16} />,
                type: "GitHub",
                href: "https://github.com/sachu0dev/PGConnect",
              },
            ]}
          />
        </motion.div>
      ),
    },
    {
      title: "Nameless",
      content: (
        <motion.div
          className="w-full"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <ProjectCard
            title="Nameless Feedback: Anonymous Feedback App"
            href="https://nameless.devbysushil.com"
            description="Created an anonymous feedback platform using Next.js and MongoDB, fostering open, honest communication within teams or communities by enabling users to share thoughts and suggestions without revealing their identity."
            dates="2023"
            tags={["Next.js", "NextAuth.js", "GeminiAi", "MongoDB", "Resend"]}
            image="/assets/projects/project1/p1.png"
            links={[
              {
                icon: <Radio size={16} />,
                type: "Live Site",
                href: "https://nameless.devbysushil.com",
              },
              {
                icon: <Github size={16} />,
                type: "GitHub",
                href: "https://github.com/sachu0dev/nameless-feedback",
              },
            ]}
          />
        </motion.div>
      ),
    },
    {
      title: "Kabutar",
      content: (
        <motion.div
          className="w-full "
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <ProjectCard
            title="Kabutar: Real-Time Chat Application"
            href="https://kabutar.devbysushil.com"
            description="Kabutar is a real-time chat application built with React, Node.js, Express, and Socket.IO, featuring Cloudinary for media handling and optimized performance using Redux Toolkit for state management."
            dates="2023"
            tags={[
              "React",
              "Node.js",
              "Express",
              "Socket.IO",
              "Cloudinary",
              "Redux",
            ]}
            image="/assets/projects/project2/p1.png"
            links={[
              {
                icon: <Radio size={16} />,
                type: "Live Site",
                href: "https://kabutar.devbysushil.com",
              },
              {
                icon: <Github size={16} />,
                type: "GitHub",
                href: "https://github.com/sachu0dev/Kabutar-Chat-app",
              },
            ]}
          />
        </motion.div>
      ),
    },
  ];

  return (
    <div className="w-full dark font-DegularBold pb-6">
      <Timeline data={data} />
    </div>
  );
}
