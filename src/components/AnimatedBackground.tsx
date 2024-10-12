import React from "react";
import { motion } from "framer-motion";

// Define a type for the component props
interface AnimatedBackGroundProps {
  videoUrl: string;
}

// Use the props type in the component definition
const AnimatedBackGround: React.FC<AnimatedBackGroundProps> = ({
  videoUrl,
}) => {
  return (
    <motion.div
      className="absolute inset-0 overflow-hidden bg-[#0C0C0D]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.3 }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0D] to-[#0C0C0D] via-[#0C0C0D]/80 mix-blend-darken"></div>
    </motion.div>
  );
};

export default AnimatedBackGround;
