import React from 'react';

const WhyChooseUs = () => {
 return (
    <section className=" md:py-4">
      <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
        <h1 className="w-full my-1 md:my-2 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center text-gray-800">
          Why Choose Us
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-2 md:p-5">
            <h3 className="text-xl md:text-3xl text-gray-800 font-bold leading-none mb-3">
              Expert Legal Advice
            </h3>
            <p className="text-sm md:text-base text-gray-600 mb-1 md:mb-5">
              With over 20 years of combined experience, our team of legal experts is ready to navigate through the complexities of the law to find the best solution for you.
            </p>
          </div>
          <div className="w-full sm:w-1/2 p-2 md:p-5">
            <h3 className="text-xl md:text-3xl text-gray-800 font-bold leading-none mb-3">
              Years of Experience
            </h3>
            <p className="text-sm md:text-base text-gray-600 mb-1 md:mb-5">
              Our law firm has been serving clients for over a decade, ensuring that we have the experience and knowledge to handle any legal challenge you may face.
            </p>
          </div>
          <div className="w-full sm:w-1/2 p-2 md:p-5">
            <h3 className="text-xl md:text-3xl text-gray-800 font-bold leading-none mb-3">
              Commitment to Client Satisfaction
            </h3>
            <p className="text-sm md:text-base text-gray-600 mb-1 md:mb-5">
              At our law firm, we believe in the importance of client satisfaction. We strive to provide personalized service and support to ensure that you are fully informed and comfortable throughout your legal journey.
            </p>
          </div>
        </div>
      </div>
    </section>
 );
};

export default WhyChooseUs;
