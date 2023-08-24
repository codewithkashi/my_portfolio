import React from "react";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="flex w-full justify-between items-center px-16 py-4 bg-navbar__bg border-t-2 border-border__bg">
      <p className="text-gray-600 font-semibold">
        Copyright &copy; 2023 All rights reserved
      </p>
      <div className="flex space-x-4">
        <Link href={"https://instagram.com/codewithkashif"}>
          <BsInstagram size={24} className="text-gray-600 hover:text-black" />
        </Link>
        <Link href={"https://twitter.com/codewithkashif"}>
          <BsTwitter size={24} className="text-gray-600 hover:text-black" />
        </Link>
        <Link href={"https://www.linkedin.com/in/codewithkashif/"}>
          <BsLinkedin size={24} className="text-gray-600 hover:text-black" />
        </Link>
        <Link href={"https://github.com/codewithkashi"}>
          <BsGithub size={24} className="text-gray-600 hover:text-black" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
