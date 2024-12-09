import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Minus, MoveRight } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isHovered, setIsHovered] = React.useState({
    about: false,
    projects: false,
    contact: false,
    cv: false,
  });
  const [dropIsOpen, setDropIsOpen] = React.useState(false);

  const handleHover = (id: string) => {
    setIsHovered((prevIsHovered) => ({ ...prevIsHovered, [id]: true }));
  };

  const handleLeave = (id: string) => {
    setIsHovered((prevIsHovered) => ({ ...prevIsHovered, [id]: false }));
  };

  return (
    <>
      {/* mobile */}
      <div className="absolute top-0 left-0 w-full">
        <motion.div
          className={`flex flex-col  xl:hidden relative top-0  z-50  justify-between items-center rounded-2xl mx-10 lg:mx-32 xl:mx-64 my-6  ${
            dropIsOpen ? "bg-[#111112]  opacity-0" : "bg-[#0C0C0D]"
          } text-white mb-24 xl:mb-30 overflow-hidden`}
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <div className="flex w-full justify-between items-center text-white">
            <Link href={"/"}>
              <Image
                src="/images/logo.png"
                className="invert w-[70px] h-[70px]"
                alt="logo"
                width={100}
                height={100}
              />
            </Link>

            <div
              className="cursor-pointer relative  p-6"
              onClick={() => setDropIsOpen(!dropIsOpen)}
            >
              <motion.div
                initial={{ rotate: 0 }}
                className="absolute top-[10px] right-[15px]"
                animate={dropIsOpen ? { rotate: 180 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Minus size={30} />
              </motion.div>
              <motion.div
                initial={{ rotate: 90 }}
                animate={dropIsOpen ? { rotate: 180 } : { rotate: 90 }}
                className="absolute top-[10px] right-[15px]"
                transition={{ duration: 0.3 }}
              >
                <Minus size={30} />
              </motion.div>
            </div>
          </div>
          {dropIsOpen && (
            <motion.div
              className="font-DegularBold text-sm w-full"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link href="mailto:sushil.dev.in@gmail.com">
                <div className="cursor-pointer w-full h-[70px] flex justify-start items-center  border-b-[1px] px-8 border-white/10">
                  <motion.span
                    whileHover={{ x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="text-left w-full "
                  >
                    CONTACT ME
                  </motion.span>
                </div>
              </Link>
              <Link
                target="_blank"
                href="https://drive.google.com/file/d/1yOwydSbpM2dZUPPyPnZ-ynlQaGN6DRpf/view?usp=sharing"
              >
                <div className="cursor-pointer w-full h-[70px] flex justify-start items-center   px-8">
                  <motion.span
                    whileHover={{ x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="text-left w-full "
                  >
                    MY CV
                  </motion.span>
                </div>
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
      {/* desktop */}
      <div className="hidden xl:flex relative z-20  justify-between items-center px-64 bg-[#0C0C0D] bg-opacity-40 text-white mb-24 xl:mb-30">
        <Link href="/">
          <Image
            src="/images/logo.png"
            className="invert w-[100px] h-[100px]"
            alt="logo"
            width={100}
            height={100}
          />
        </Link>
        <ul className="flex space-x-10 2xl:space-x-20 font-sans font-bold text-xs h-full">
          <Link href={"mailto:sushil.dev.in@gmail.com"}>
            <motion.li
              initial={{ y: 0, opacity: 1 }}
              whileHover={{ y: 20, opacity: 1 }}
              onMouseEnter={() => handleHover("contact")}
              onMouseLeave={() => handleLeave("contact")}
              className="p-4 cursor-pointer flex space-x-16 items-center h-full"
            >
              <span>CONTACT ME</span>{" "}
              <motion.div
                initial={{ rotate: 0, opacity: 0 }}
                animate={
                  isHovered.contact
                    ? { rotate: -45, opacity: 1 }
                    : { rotate: 0, opacity: 0 }
                }
              >
                <MoveRight size={16} />
              </motion.div>
            </motion.li>
          </Link>
          <Link
            target="_blank"
            href={
              "https://drive.google.com/file/d/1yOwydSbpM2dZUPPyPnZ-ynlQaGN6DRpf/view?usp=sharing"
            }
          >
            <motion.li
              initial={{ y: 0, opacity: 1 }}
              whileHover={{ y: 20, opacity: 1 }}
              onMouseEnter={() => handleHover("cv")}
              onMouseLeave={() => handleLeave("cv")}
              className="p-4 cursor-pointer flex space-x-16 items-center h-full"
            >
              <span>MY CV</span>{" "}
              <motion.div
                initial={{ rotate: 0, opacity: 0 }}
                animate={
                  isHovered.cv
                    ? { rotate: -45, opacity: 1 }
                    : { rotate: 0, opacity: 0 }
                }
              >
                <MoveRight size={16} />
              </motion.div>
            </motion.li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
