import React from "react";
import CaseDetails from "./details";

export const dynamic = 'force-static'
export const generateStaticParams = async () => {
  const posts = await fetch("https://fuzzy-pig-pumps.cyclic.app/client/get-news").then(
    (res) => res.json()
  );
  return posts.data.map((post) => ({
    slug: post._id,
  }))
  // return [
  //   { slug: "651a7a49b81c92d695ebf51e" },
  //   { slug: "651a7a06b81c92d695ebf51c" },
  //   { slug: "651a797c0202d4ad7721d5f8" },
  //   { slug: "651a78f40202d4ad7721d5f6" },
  // ];
};

const mainContent = (params) => {
  return <CaseDetails params={params} />;
};

export default mainContent;
