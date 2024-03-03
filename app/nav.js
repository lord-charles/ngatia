"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

const NavSection = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={`bg-black ${showMenu && 'overflow-y-hidden'} overflow-hidden opacity-90 text-white`}>
      <section className="mx-auto flex w-full max-w-7xl items-center justify-between px-8 lg:py-6 md:px-20">
        <img
          src="./public/assets/logo.png"
          alt="logo"
          className="w-[30px] h-3"
        />

        <section className="flex gap-8 items-center my-1 md:my-3 invisible lg:visible">
          {navLinks.map((link) => {
            return (
              <Link
                href={link.url}
                key={link.id}
                className="hover:text-violet-300"
              >
                {link.title}
              </Link>
            );
          })}
        </section>
        <button className="hover:bg-gray-50 hover:text-red-500 bg-red-500 rounded-full lg:py-3 px-6 text-white text-center invisible lg:visible">
          Logout
        </button>
        {showMenu && (
          <div className="fixed z-[999] bg-black bottom-0 top-14 left-0 right-0 overflow-y-hidden max-h-screen">
          <div className="inset-x-0 top-14 mx-8 pb-5 flex flex-col items-center rounded-xl bg-gray-300 text-black lg:hidden">
            <section className="my-8 flex flex-col items-center gap-6">
              {navLinks.map((link) => {
                return (
                  <Link
                  onClick={()=>setShowMenu(false)}
                    href={link.url}
                    key={link.id}
                    className="hover:text-violet-900"
                  >
                    {link.title}
                  </Link>
                );
              })}
            </section>
            <hr className="w-[80%] border-gray-700 mx-auto mb-5" />
            <button className="hover:bg-gray-50 hover:text-red-500 bg-red-500 rounded-full py-2 px-6 text-white text-center">
              Logout
            </button>
          </div>
          </div>
        )}
        <button
          type="button"
          onClick={() => setShowMenu(!showMenu)}
          className="text-white absolute top-4 right-4 md:right-8 md:top-7 lg:hidden"
        >
          {showMenu ? (
            <AnimatePresence>
              <motion.svg
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </motion.svg>
            </AnimatePresence>
          ) : (
            <AnimatePresence>
              <motion.svg
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </motion.svg>
            </AnimatePresence>
          )}
        </button>
      </section>
    </div>
  );
};

export default NavSection;

const navLinks = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "About", url: "/about" },
  { id: 3, title: "Practice Areas", url: "/practice-areas" },
  { id: 4, title: "Attorneys", url: "/attorneys" },
  { id: 5, title: "Case Studies", url: "/cases" },
  { id: 6, title: "Contact", url: "/contact" },
];
