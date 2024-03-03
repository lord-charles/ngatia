import React from "react";
import { Example } from "./accordion";
import LawSlider from "./slider";
import Acknowledge from "./acknowledgement";
import PracticeAreasList from "./areasList";

const PracticeAreas = () => {
  return (
    <div className="container bg-[#fdfdfd]">
      <div className="bg-practice-areas w-screen md:h-[40vh] h-[20vh] bg-center bg-cover text-gray-100 flex flex-col justify-end px-7 md:px-28 space-y-5 py-2 md:py-5">
        <h2 className="text-xl lg:text-3xl">WHAT WE DO</h2>
        <h3 className="text-base lg:text-2xl">
          Creative Ideas for Complex Challenges
        </h3>
      </div>
      <div className="flex flex-col gap-5 md:gap-8 lg:gap-10 px-2 md:px-14 lg:px-28 py-5 md:py-8">
        <div className="flex flex-col lg:flex-row gap-5 md:gap-10 items-center">
          <LawSlider /> <Example />
        </div>

        <PracticeAreasList />
        <Acknowledge />
      </div>
    </div>
  );
};

export default PracticeAreas;
