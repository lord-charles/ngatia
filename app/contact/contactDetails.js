"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ContactDetails = () => {
  const [hoverEffect, setHoverEffect] = useState(false);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-5 lg:gap-16">

      <motion.section
        whileHover={{
          scale: 1.05,
        }}
        onMouseEnter={() => setHoverEffect(true)}
        onMouseLeave={() => setHoverEffect(false)}
        whileTap={{ scale: 0.9 }}
        className="shadow-lg rounded-md p-2 lg:p-4 flex items-center flex-col  my-auto bg-gray-100 space-y-5"
      >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`${
              hoverEffect ? "text-gray-900" : "text-black"
            } w-6 h-6 mx-auto`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg> 
        
        <div className="space-y-2">
          <h2 className="text-lg md:text-xl lg:text-2xl text-gray-800 font-bold leading-none mb-3 text-center">Talk to Us</h2>
          <Link href="tel:0712345678" className="text-sm md:text-base font-light text-gray-600 mb-1">
            <span className="text-base lg:text-lg font-medium text-black">Tel : </span>
            +254712345678
          </Link>
        </div>
      </motion.section>
      <motion.section
        whileHover={{
          scale: 1.05,
        }}
        onMouseEnter={() => setHoverEffect(true)}
        onMouseLeave={() => setHoverEffect(false)}
        whileTap={{ scale: 0.9 }}
        className="shadow-lg rounded-md p-2 lg:p-4 flex items-center flex-col  my-auto bg-gray-100 space-y-5"
      >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor" 
            className={`${
              hoverEffect ? "text-gray-900" : "text-black"
            } w-6 h-6 mx-auto`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
        
        <div className="space-y-2">
          <h2 className="text-lg md:text-xl lg:text-2xl text-gray-800 font-bold leading-none mb-3 text-center">Contact Us</h2>
          <Link href="mailto:advocate@ngatia.co.ke" className="text-sm md:text-base font-light text-gray-600 mb-1">
            <span className="text-base lg:text-lg font-medium text-black">Email : </span>
            advocate@ngatia.co.ke
          </Link>
        </div>
      </motion.section>
      <motion.section
        whileHover={{
          scale: 1.05,
        }}
        onMouseEnter={() => setHoverEffect(true)}
        onMouseLeave={() => setHoverEffect(false)}
        whileTap={{ scale: 0.9 }}
        className="shadow-lg rounded-md p-2 lg:p-4 flex items-center flex-col  my-auto bg-gray-100 space-y-3"
      >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`${
              hoverEffect ? "text-gray-900" : "text-black"
            } w-6 h-6 mx-auto`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
        
        <div className="space-y-2">
          <h2 className="text-lg md:text-xl lg:text-2xl text-gray-800 font-bold leading-none mb-3 text-center">Location</h2>
          <h3 className="text-sm md:text-base font-light text-gray-600 mb-1">Windsor Golf & Country Club, Kiambu Rd</h3>
        </div>
      </motion.section>
      <motion.section
        whileHover={{
          scale: 1.05,
        }}
        onMouseEnter={() => setHoverEffect(true)}
        onMouseLeave={() => setHoverEffect(false)}
        whileTap={{ scale: 0.9 }}
        className="shadow-lg rounded-md p-2 lg:p-4 flex items-center flex-col  my-auto bg-gray-100 space-y-1"
      >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`${
              hoverEffect ? "text-gray-900" : "text-black"
            } w-6 h-6 mx-auto`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        
        <div className="space-y-2">
          <h2 className="text-lg md:text-xl lg:text-2xl text-gray-800 font-bold leading-none mb-3 text-center">Opening Hours</h2>
          <h3 className="text-sm md:text-base font-light text-gray-600 mb-1">
            Monday - Friday : 8.00 - 6.00 | Saturday - Sunday Appointments Only
          </h3>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactDetails;
