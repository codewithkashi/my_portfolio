"use client";
import React from "react";
import { abouts } from "@constants/projects";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="head__text mt-16" id="about">
        I Know That{" "}
        <span className="text-blue-700">
          Good
          <br /> Skills
        </span>{" "}
        means
        <span className="text-blue-700"> Good Business</span>
      </h2>
      <div className="flex justify-center items-start flex-wrap mt-8">
        {abouts.map((e, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="sm:w-[350px] min-w-[200px] flex justify-start items-start flex-col m-8 shadow-md p-8 min-h-[450px]"
            key={e.title + index}
          >
            <Image src={e.imgUrl} alt={e.title} className="rounded-md" />
            <h2 className="mt-[20px] text-lg md:text-xl font-semibold text-black">
              {e.title}
            </h2>
            <p className="mt-[10px] text-sm md:text-base text-gray-600">
              {e.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default About;
