"use client";
import React, { useState } from "react";
import { staff } from "../components/data";
import { motion } from "framer-motion";
import Link from "next/link";

const AttorneysPage = () => {
  const [hoveredId, setHoveredId] = useState("");

  return (
    <div className="pb-5 bg-[#fdfdfd]">
      <div className="bg-practice-areas w-screen md:h-[40vh] h-[20vh] bg-center bg-cover text-gray-100 flex flex-col justify-end px-7 md:px-28 space-y-5 py-3 md:py-5">
        <h2 className="text-xl lg:text-3xl">THE TEAM</h2>
        <h3 className="text-base lg:text-2xl">
          Creative Ideas for Complex Challenges
        </h3>
      </div>
      <div className="px-3 md:px-28 flex flex-col py-10  gap-10 items-center justify-center">
        <div className=" flex flex-col md:flex-row gap-10 items-center justify-center">
          <h2 className="w-full my-1 md:my-2 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center text-gray-800">
            Change starts here: meet the Ngatia and Advocates Company igniting
            positive change.
          </h2>
          <img
            src="/assets/images/team.jpg"
            className="w-auto lg:min-w-[50%] lg:max-w-[50vw]"
            alt="team"
          />
        </div>
        <div className="container space-y-3 md:space-y-6 lg:space-y-9">
          <h2 className="w-full my-1 md:my-2 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center text-gray-800">
            The Legal Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
            {staff.map((member) => (
              <div key={member.id} className="flex flex-col w-auto relative">
                <img
                  src={member.image}
                  className="w-[100%] max-h-[650px]"
                  alt="team"
                />
                <motion.div
                  // initial={{ opacity: 1, scale: 1 }}
                  // animate={{ opacity: 1, scale: 1, height: 300 }}
                  // transition={{ duration: 0.5 }}
                  onMouseEnter={() => setHoveredId(member.id)}
                  onMouseLeave={() => setHoveredId("")}
                  className="lg:absolute bottom-0 shadow-2xl lg:shadow-sm p-2 lg:min-w-36 lg:w-36 left-0 bg-[#fdfdfd] lg:p-5 lg:transition-all lg:duration-1000 lg:delay-0 lg:ease-out lg:hover:h-[50%] lg:hover:w-[75%] flex flex-col items-center justify-center gap-2"
                >
                  <motion.h3
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="text-xl font-bold text-gray-800 text-center"
                  >
                    {member.name}
                  </motion.h3>
                  <motion.h4
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7}}
                    className="text-base font-bold text-gray-800 text-center"
                  >
                    {member.role}
                  </motion.h4>
                  <p className="lg:scale-0 lg:opacity-0 lg:hidden text-sm text-gray-600">
                    {member.shortDescription}
                  </p>
                  {member.id === hoveredId && (
                    <motion.p
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className={`text-sm text-gray-600`}
                    >
                      {member.shortDescription}
                    </motion.p>
                  )}
                  {/* <Link href={`/${member.id}`} className="text-gray-600">
                    View Bio
                  </Link> */}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttorneysPage;
