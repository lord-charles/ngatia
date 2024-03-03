"use client";
import React, { useEffect, useState } from "react";
import { practiceAreasObjs } from "../components/data";
import axios from "axios";

const LawSlider = () => {
  const [areaList, setAreaList] = useState([]);
  const fetchAreasList = async () => {
    try {
      const response = await axios.get(
        "https://fuzzy-pig-pumps.cyclic.app/client/get-services"
      );
      setAreaList(response.data.data);
      return response.data;
    } catch (error) {
      return
    }
  };
  useEffect(() => {
    fetchAreasList();
  }, []);
  return (
    <div className="h-[450px] lg:w-[50%] space-y-1 overflow-y-scroll snap snap-y snap-mandatory">
      {areaList.map((item) => {
        return (
          <section className="w-full h-full snap-start" key={item._id}>
            <img className="h-[250px] w-full object-cover" src={item.bgImageUrl} />
            <div className="flex flex-col gap-1 px-1">
              <h2 className="text-base lg:text-lg font-semibold">
                {item.title}
              </h2>
              <p className="font-light text-sm lg:text-base">{item.shortDescription.substring(0, 350)}...</p>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default LawSlider;
