"use client";
import AnimatedBackGround from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full bg-[#0C0C0D]">
      <div className="relative  bg-[#0C0C0D] pb-10">
        <AnimatedBackGround videoUrl="/videos/animaiton.mp4" />
        <Navbar />
        <section>{children}</section>
      </div>
    </main>
  );
}
