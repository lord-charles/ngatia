import React from "react";
import GoalsComponents from "./goals";
import Testimonials from "./testimonials";

const AboutUsPage = () => {
  return (
    <div className="w-screen min-h-screen pb-10 bg-[#fdfdfd]">
      <div className="bg-practice-areas w-screen md:h-[40vh] h-[20vh] bg-center bg-cover text-gray-100 flex flex-col justify-end px-7 md:px-28 space-y-5 py-3 md:py-5">
        <h2 className="text-xl lg:text-3xl">About Us</h2>
        <h3 className="text-base lg:text-2xl">
          Creative Ideas for Complex Challenges 
        </h3>
      </div>
      <div className="flex flex-col items-start justify-center px-5 lg:px-28 gap-2 lg:gap-8 min-w-screen py-2 lg:py-10">
        <h2 className="w-full my-1 md:my-2 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center text-gray-800">The Evident growth of Ngatia And Advocates Company</h2>
        <div className="text-sm md:text-base text-gray-600">
          <p>
            Eu dolore ea anim magna. Ea nulla consectetur consequat pariatur
            nostrud. Veniam magna pariatur officia in quis non minim cupidatat.
            Incididunt elit duis velit id consectetur consequat aliqua id do.
            Minim proident ad labore tempor anim consequat excepteur quis
            pariatur et cupidatat.
          </p>
          <br />
          <img
            src="/assets/images/about_us.jpg"
            alt="."
            className="lg:float-right lg:w-[500px] w-full my-3 h-auto shadow-lg"
          />
          <p>
            Eu dolore ea anim magna. Ea nulla consectetur consequat pariatur
            nostrud. Veniam magna pariatur officia in quis non minim cupidatat.
            Incididunt elit duis velit id consectetur consequat aliqua id do.
            Minim proident ad labore tempor anim consequat excepteur quis
            pariatur et cupidatat.
          </p>
         
          <p>
            Eu dolore ea anim magna. Ea nulla consectetur consequat pariatur
            nostrud. Veniam magna pariatur officia in quis non minim cupidatat.
            Incididunt elit duis velit id consectetur consequat aliqua id do.
            Minim proident ad labore tempor anim consequat excepteur quis
            pariatur et cupidatat.
          </p>
          <br />
          <p>
            Eu dolore ea anim magna. Ea nulla consectetur consequat pariatur
            nostrud. Veniam magna pariatur officia in quis non minim cupidatat.
            Incididunt elit duis velit id consectetur consequat aliqua id do.
            Minim proident ad labore tempor anim consequat excepteur quis
            pariatur et cupidatat.
          </p>
          <p>
            Eu dolore ea anim magna. Ea nulla consectetur consequat pariatur
            nostrud. Veniam magna pariatur officia in quis non minim cupidatat.
            Incididunt elit duis velit id consectetur consequat aliqua id do.
            Minim proident ad labore tempor anim consequat excepteur quis
            pariatur et cupidatat.
          </p>
          <br />
          <p>
            Eu dolore ea anim magna. Ea nulla consectetur consequat pariatur
            nostrud. Veniam magna pariatur officia in quis non minim cupidatat.
            Incididunt elit duis velit id consectetur consequat aliqua id do.
            Minim proident ad labore tempor anim consequat excepteur quis
            pariatur et cupidatat.
          </p>
          <button type="button" className="flex items-center mt-10 hover:text-blue-600 text-blue-700 gap-2 text-lg">
            Connect with an Attorney
            <svg
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
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
        <GoalsComponents />
        <Testimonials/>
      </div>
    </div>
  );
};

export default AboutUsPage;
