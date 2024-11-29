"use client";
import HomeAbout from "@/components/HomeAbout";
import MyStack from "@/components/MyStack";
import MyTools from "@/components/MyTools";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import FlickeringGrid from "@/components/ui/flickering-grid";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = await import("locomotive-scroll");
      new LocomotiveScroll.default({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        multiplier: 0.5,
        inertia: 0.5,
        smartphone: {
          smooth: true,
        },
      });
    })();
  }, []);
  return (
    <main className="w-full bg-[#0C0C0D]">
      <div className="relative pt-[120px] xl:pt-0 bg-[#0C0C0D] pb-10">
        <FlickeringGrid
          className="z-0 hidden xl:block absolute w-full inset-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
          squareSize={4}
          gridGap={6}
          color="#60A5FA"
          maxOpacity={0.5}
          flickerChance={0.1}
        />
        {/* <AnimatedBackGround videoUrl="/videos/animaiton.mp4" /> */}
        <Navbar />
        <section>{children}</section>
      </div>
      <motion.section
        className={
          "h-full z-20 flex flex-col px-8 sm:px-16 md:px-40 2xl:px-64 py-8 md:py-16"
        }
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <Projects />
      </motion.section>
      <section
        className={
          "h-full z-20 flex flex-col px-8 sm:px-16 md:px-32 2xl:px-64 py-32"
        }
      >
        <HomeAbout />
      </section>
      <section
        className={
          "h-full z-20 flex flex-col px-8 sm:px-16 md:px-32 2xl:px-64 py-32 mb-12"
        }
      >
        <MyStack />
      </section>
      <section
        className={
          "h-full z-20 flex flex-col px-8 sm:px-16 md:px-32 2xl:px-64 pb-32"
        }
      >
        <MyTools />
      </section>
    </main>
  );
}
