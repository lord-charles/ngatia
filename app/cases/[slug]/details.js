"use client"
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const CaseDetails = ({params}) => {
    const [targetArticle, setTargetArticle] = useState("")
    const [filteredTitles, setFilteredTitles] = useState([])

    
    const fetchArticles = async() =>{
      try {
        const response = await axios.get('https://fuzzy-pig-pumps.cyclic.app/client/get-news')
        setTargetArticle(response.data.data.find((element) => element._id == params.params.slug));
        setFilteredTitles(response.data.data.filter((item) => item._id != params.params.slug));
        return
      } catch (error) {
        return
      }

    }
    useEffect(() => {
      fetchArticles()
    
     
    }, [])
    function getDateOnly(timestamp) {
      // Parse the timestamp string to create a Date object
      const dateObj = new Date(timestamp);
      
      // Extract the day, month, and year
      const day = dateObj.getDate();
      const month = dateObj.getMonth() + 1; // getMonth() returns month index starting from 0
      const year = dateObj.getFullYear();
      
      // Format the date as MM-DD-YYYY
      const formattedDate = `${year}-${month}-${day}`;
      
      return formattedDate;
  }
   
  
    return (
      <div className="flex flex-col lg:flex-row gap-3 md:gap-5 lg:gap-10 px-2 md:px-14 lg:px-28 py-5 bg-[#fdfdfd]">
        <div className="flex flex-col gap-3">
          <img src={targetArticle?.bgImageUrl} alt={targetArticle?.alt} className="w-full max-h-[400px] md:max-h-[400px] lg:max-h-[650px] h-auto object-cover "/>
          <div className="flex justify-around text-xs md:text-sm text-gray-800 font-medium">
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 inline-block"
              >
                <path 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              <p className="inline-block">{targetArticle?.author}</p>
            </div>
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                />
              </svg>
  
              <p className="inline-block">{getDateOnly(targetArticle?.createdAt)}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
          <h2 className="w-full my-1 md:my-2 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center text-gray-800">{targetArticle?.title}</h2>
          {targetArticle?.content?.map((paragraph,index) => (<p key={index} className="text-sm md:text-base text-gray-600 mb-1 md:mb-8">{paragraph}</p>))}
          </div>
        </div>
        <div className="flex flex-col space-y-6 py-2 md:py-5 lg:py-10">
          <h2 className="w-full my-1 md:my-2 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center text-gray-800">Other Cases</h2>
          {filteredTitles.map((result) => (
            <section key={result._id} className="space-y-4">
              <Link href={`/cases/${result._id}`} className="text-base md:text-lg lg:text-xl text-gray-800 hover:text-gray-600 font-bold leading-none mb-3">
                {result.title}
              </Link>
              <hr />
            </section>
          ))}
        </div>
      </div>
    );
  };

export default CaseDetails;
