import React from "react";
import { practiceAreasObjs } from "../components/data";

const PracticeAreas = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
        <h1 className="w-full my-1 md:my-2 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center text-gray-800">
          Our Practice Areas
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="flex flex-wrap">
          {practiceAreasObjs.map((obj) => (
            <div
              key={obj.id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-6"
            >
              <h3 className="text-xl md:text-3xl text-gray-800 font-bold leading-none mb-3">
                {obj.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 mb-1 md:mb-8">{obj.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
