"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import { projects } from "@constants/projects";
const Work = () => {
  return (
    <motion.div
      whileInView={{ x: [100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      id="work"
    >
      <h2 className="head__text mt-16" id="about">
        My Creative <span className="text-blue-700">Portfolio </span>
        Section
      </h2>
      <div className="flex justify-center items-start flex-wrap mt-8">
        {projects.map((e, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="sm:w-[350px] min-w-[200px] flex justify-start items-start flex-col m-8 shadow-md p-8 min-h-[500px]"
            key={e.title + index}
          >
            <Image src={e.imgUrl} alt={e.title} className="rounded-md" />
            <h2 className="mt-[20px] text-lg md:text-xl font-semibold text-black">
              {e.title}
            </h2>
            <p className="mt-[10px] text-sm md:text-base text-gray-600">
              {e.description}
            </p>
            <div className="flex justify-between items-center mt-8 w-full">
              <div className="flex flex-row  flex-wrap">
                {e.techs.map((e) => (
                  <p
                    className="text-white bg-blue-700 hover:bg-blue-900 transition-all rounded-md py-1 px-2 m-1"
                    key={e}
                  >
                    {e}
                  </p>
                ))}
              </div>

              <Link href={e.githubUrl}>
                <BsGithub
                  className="text-gray-600 hover:text-black transition-all"
                  size={28}
                />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Work;
