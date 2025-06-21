"use client";
import React from "react";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa6";
import Link from "next/link";

const IconGroup = () => {
  return (
    <div className="flex gap-3 items-center justify-center">
      <Link
        href="#"
        className="transition-transform hover:scale-90 cursor-pointer"
      >
        <FaDiscord
          color={"rgb(82 82 91)"}
          size={32}
          className="transition-transform hover:scale-90 cursor-pointer"
        />
      </Link>
      <Link
        href="#"
        className="transition-transform hover:scale-90 cursor-pointer"
      >
        <FaInstagram
          color={"rgb(82 82 91)"}
          size={32}
          className="transition-transform hover:scale-90 cursor-pointer"
        />
      </Link>
      <Link
        href="#"
        className="transition-transform hover:scale-90 cursor-pointer"
      >
        <FaTwitter
          color={"rgb(82 82 91)"}
          size={32}
          className="transition-transform hover:scale-90 cursor-pointer"
        />
      </Link>
    </div>
  );
};

export default IconGroup;
