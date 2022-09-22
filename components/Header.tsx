import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto p-5 z-20 xl:items-center translate-x-100 ease-in duration-200">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
      >
        <SocialIcon
          url="https://www.facebook.com/kumurbek"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/kumbey"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/khumarbyek-beybit/"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        className="flex items-center text-gray-300 cursor-pointer"
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden  md:inline-flex text-sm text-gray-400">
          get in touch
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
