import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="w-full h-28 bg-white py-6 shadow-inner border-t border-gray-300 fixed bottom-0 left-0 z-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-700 text-center sm:text-left">
        {/* Contact */}
        <div className="flex items-center gap-3 justify-center sm:justify-start hover:text-amber-800 transition">
          <FaPhoneVolume className="text-xl text-blue-500" />
          <p className="text-lg font-medium">+977 1-4216789</p>
        </div>

        {/* Email */}
        <div className="flex items-center gap-3 justify-center sm:justify-start hover:text-amber-800 transition">
          <MdOutlineEmail className="text-xl text-red-500" />
          <p className="text-lg font-medium">plstore@gmail.com</p>
        </div>

        {/* Location  */}
        <div className="flex items-center gap-3 justify-center sm:justify-start hover:text-amber-800 transition">
          <IoLocationOutline className="text-xl text-green-500" />
          <p className="text-lg font-medium">New Road, Kathmandu, Nepal</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 text-sm mt-4">
        &copy; {new Date().getFullYear()} PL Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
