"use client";
import React, { useEffect, useState } from "react";
import { practiceAreasObjs } from "../components/data";
import Link from "next/link";
import axios from "axios";

const PracticeAreasList = () => {
  const [areaList, setAreaList] = useState([])
  const fetchList = async () => {
    try {
      const response = await axios.get("https://fuzzy-pig-pumps.cyclic.app/client/get-services");
    setAreaList(response.data.data);
    return response.data;
    } catch (error) {
      return
    }
    
  };
  useEffect(() => {
    fetchList();
  }, []);
 
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
        {areaList.map((obj, index) => (
          <div
            key={index}
            className="w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-6"
          >
            <h3 className="text-xl md:text-2xl lg:text-3xl text-gray-800 font-bold leading-none mb-3">
              {obj.title}
            </h3>
            <p className="text-sm md:text-base text-gray-600 mb-1 md:mb-8">{obj.shortDescription}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default PracticeAreasList;
