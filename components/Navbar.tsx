"use client";
import React, { useState } from "react";
import Link from "next/link";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import Image from "next/image";
import { logo } from "@constants";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex w-full justify-between items-center px-12 md:px-28 py-4 bg-navbar__bg backdrop-blur-sm border-[1px] border-border__bg fixed top-0 z-10">
      <Image src={logo} alt="logo" className="w-32" />
      <ul className="hidden md:flex flex-row space-x-8">
        {["home", "about", "work", "skills", "contact"].map((e) => (
          <li
            className="group flex flex-col items-center justify-center"
            key={e}
          >
            <div className="w-[5px] h-[5px] group-hover:bg-gray-600 bg-transparent rounded-[50%] mb-[5px] " />
            <Link
              className="cursor-pointer font-medium text-gray-600 transition-all hover:text-[#313bac]"
              href={`#${e}`}
            >
              {e.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navbar */}
      <div className="flex justify-end md:hidden  w-full">
        {toggle ? (
          <motion.div
            className="bg-[#edf2f8] absolute top-16 right-0 bg-[url('../public/bgWhite.png')] bg-cover bg-repeat w-full h-[300px] space-y-4 flex flex-col justify-start items-center shadow-md px-8 sm:px-16 rounded-md py-4"
            whileInView={{ x: [100, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX
              onClick={() => setToggle(false)}
              className="text-white bg-blue-700 rounded-sm"
              size={40}
            />
            {["home", "about", "work", "skills", "contact"].map((e) => (
              <li key={e} className="list-none">
                <Link
                  onClick={() => setToggle(false)}
                  className="cursor-pointer font-medium text-gray-600 transition-all hover:text-[#313bac]"
                  href={`#${e}`}
                >
                  {e.toUpperCase()}
                </Link>
              </li>
            ))}
          </motion.div>
        ) : (
          <HiMenuAlt4
            onClick={() => setToggle(true)}
            className="text-white bg-blue-700 rounded-sm"
            size={40}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
