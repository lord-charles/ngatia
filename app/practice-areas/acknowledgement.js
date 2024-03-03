import React from "react";

const Acknowledge = () => {
  return (
    <div className="relative bg-gray-950 w-full min-h-[50px] text-gray-50 p-5 lg:p-16 lg:my-10">
        <img src="/assets/acknowledge.jpg" alt="." className="lg:absolute lg:h-auto lg:w-[30rem] lg:-top-14 lg:left-16 w-[300px] h-auto mx-auto mb-3 rounded-lg lg:rounded-none"/>
      <div className="lg:ml-auto lg:w-[50%] space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold">
          We Provide Customer{" "}
          <span className="text-gray-400">Centric Advice to Corporations</span>
        </h2>
        <div className="space-y-3 md:text-lg">
          <p className="">
            In today's complex and ever-changing legal landscape, having a
            trusted legal advisor by your side can make all the difference.
          </p>
          <div className="space-y-1 text-sm md:text-base px-2">
            <div className="flex gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-orange-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>

              <p>Business and Corporate Litigation</p>
            </div>
            <div className="flex gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-orange-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>

              <p>Wealth & Estate Planning</p>
            </div>
            <div className="flex gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-orange-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>

              <p>Arbitration and Mediation</p>
            </div>
            <div className="flex gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-orange-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>

              <p>Debt Collection</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Acknowledge;
