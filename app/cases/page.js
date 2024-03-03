import React from "react";
import ArticlesComponent from "./articles";

const CaseStudiesPage = () => {
  return (
    <div className="container bg-[#fdfdfd]">
      <div className="bg-practice-areas w-screen md:h-[40vh] h-[20vh] bg-center bg-cover text-gray-100 flex flex-col md:justify-end px-7 md:px-28 space-y-5 py-10 md:py-5">
        <h2 className="text-xl lg:text-3xl">Case Studies</h2>
        <h3 className="text-base lg:text-2xl">
          Creative Ideas for Complex Challenges
        </h3>
      </div>
      <div className="flex flex-col items-start justify-center px-5 lg:px-28 gap-2 lg:gap-8 min-w-screen py-2 lg:py-10">
        <div className="flex flex-col items-center justify-center gap-3 md:gap-5">
          <h2 className="w-full my-1 md:my-2 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center text-gray-800">News & Articles</h2>
          <p className="text-sm md:text-base text-gray-600 mb-1 md:mb-8">
            The information provided in these articles is meant for general use
            and should not be relied upon without obtaining individualized legal
            advice for any specific matter.
          </p>
        </div>
        <div className="text-sm md:text-base">
          <ArticlesComponent />
        
        </div> 
      </div>
    </div>
  );
};

export default CaseStudiesPage;
