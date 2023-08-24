"use client";
import React from "react";
import { motion } from "framer-motion";
import { profile } from "@constants";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <div
      className="w-full h-full pt-20 px-4  bg-[url('../public/bgIMG.png')] bg-cover bg-repeat"
      id="home"
    >
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row items-center justify-around h-full mx-8 "
      >
        <div className="flex flex-col space-y-3">
          <p className="md:text-6xl  text-3xl font-semibold text-left text-gray-600">
            My name is <span className="text-blue-700">Kashif</span>
          </p>
          <p className="md:text-6xl text-3xl font-semibold text-left text-gray-600">
            and I'm a <span className="text-blue-700">Full Stack</span>
          </p>
          <p className="md:text-6xl text-3xl font-semibold text-left text-blue-700">
            Web Developer
          </p>
          <div className="flex items-center pt-4 space-x-4 px-4">
            <Link href={"https://www.linkedin.com/in/codewithkashif/"}>
              <BsLinkedin
                size={30}
                className="text-gray-600 hover:text-black transition-all"
              />
            </Link>
            <Link href={"https://github.com/codewithkashi"}>
              <BsGithub
                size={30}
                className="text-gray-600 hover:text-black transition-all"
              />
            </Link>
          </div>
        </div>
        <div className="mt-12 md:mt-0">
          <Image src={profile} alt="profile" />
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
