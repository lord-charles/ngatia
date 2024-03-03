"use client"
import React, { useEffect, useState } from "react";
import { News_N_Updates } from "../components/data";
import Link from "next/link";
import axios from "axios";

const ArticlesComponent = () => {
  const [articleList, setArticleList] = useState([])
  const fetchArticles = async() =>{
    try {
      const response = await axios.get('https://fuzzy-pig-pumps.cyclic.app/client/get-news')
      setArticleList(response.data.data);
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
  
  const sortedItems = articleList.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  )
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-10">
      {sortedItems.map((item, index) => (
        <section
          key={index}
          className="max-w-sm rounded overflow-hidden bg-white shadow-lg mx-auto mt-4"
        >
          <img
            className="w-full h-64 object-cover"
            src={item.bgImageUrl}
            alt="Card image"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-lg md:text-xl mb-2 text-gray-800">{item.title}</div>
            <p className="text-gray-600 text-sm md:text-base">
              {item.content[0].substring(0, 145)}...
              <span>
                <Link href={`/cases/${item._id}`} className="ml-3 text-black font-semibold hover:text-gray-800">
                  Read More{" "}
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
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </Link>
              </span>
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs md:text-sm font-semibold text-gray-700 mr-2 mb-2">
              John Doe
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs md:text-sm font-semibold text-gray-700 mr-2 mb-2">
              {getDateOnly(item.createdAt)}
            </span>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ArticlesComponent;
