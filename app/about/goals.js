import React from "react";

const GoalsComponents = () => {
  return (
    <div className="w-full space-y-3 md:space-y-7 lg:space-y-10">
      <section className="flex flex-col md:flex-row w-full gap-10 items-center text-gray-600">
        <div className="text-sm md:text-base">
          <h2 className="w-full my-1 md:my-2 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center text-gray-800">
            {" "}
            Our Mission
          </h2>
          <p className="text-center">
            Laborum mollit ad duis cillum minim ex labore eu id tempor nostrud
            cillum. Ipsum veniam mollit sit amet consectetur ullamco. Elit
            cillum sunt occaecat sit nisi velit dolor dolore. Velit ex minim
            officia et ea culpa reprehenderit eiusmod reprehenderit. Id do id in
            tempor mollit excepteur aute laborum labore. Quis nisi et eu
            adipisicing cillum elit reprehenderit fugiat.
          </p>
        </div>
        <img src="/assets/icons/Mission.svg" alt="mission" className="w-[60vw] md:w-[35vw] h-auto"/>
      </section>
      <section className="flex flex-col  md:flex-row-reverse w-full gap-10 items-center text-gray-600">
        <div className="text-sm md:text-base">
          <h2 className="w-full my-1 md:my-2 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center text-gray-800">
            {" "}
            Our Vision
          </h2>
          <p className="text-center">
            Laborum mollit ad duis cillum minim ex labore eu id tempor nostrud
            cillum. Ipsum veniam mollit sit amet consectetur ullamco. Elit
            cillum sunt occaecat sit nisi velit dolor dolore. Velit ex minim
            officia et ea culpa reprehenderit eiusmod reprehenderit. Id do id in
            tempor mollit excepteur aute laborum labore. Quis nisi et eu
            adipisicing cillum elit reprehenderit fugiat.
          </p>
        </div>
        <img src="/assets/icons/Vision.svg" alt="mission" className="w-[60vw] md:w-[35vw] h-auto"/>
      </section>
    </div>
  );
};

export default GoalsComponents;
