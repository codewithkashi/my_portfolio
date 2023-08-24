"use client";
import React from "react";
import { skills } from "@constants/projects";
import Image from "next/image";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div>
      <h2 className="head__text mt-16" id="about">
        My <span className="text-blue-700">Skills</span>
      </h2>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        id="skills"
        className="flex flex-wrap p-16 justify-center items-center"
      >
        {skills.map((e, index) => (
          <div
            className="flex items-center flex-col justify-center w-[150px] h-[200px] m-4"
            key={index}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="w-[120px] h-[120px] bg-gray-200 p-4 rounded-full"
            >
              <Image src={e.imgUrl} alt={e.title} className="w-full h-full" />
            </motion.div>
            <p className="mt-4 text-lg md:text-xl font-semibold">{e.title}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
