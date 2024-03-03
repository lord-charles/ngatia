import React from "react";
import ContactDetails from "./contactDetails";
import FormComponent from "./form";

const ContactUsPage = () => {
  return (
    <div className="container bg-[#fdfdfd]">
      <div className="bg-practice-areas w-screen md:h-[40vh] h-[20vh] bg-center bg-cover text-gray-100 flex flex-col justify-end px-7 md:px-28 space-y-5 py-3 md:py-5">
        <h2 className="text-xl lg:text-3xl">CONTACT</h2>
        <h3 className="text-base lg:text-2xl">
          Creative Ideas for Complex Challenges
        </h3>
      </div>
      <div className="flex flex-col items-start justify-center px-5 lg:px-28 gap-2 lg:gap-16 min-w-screen py-2 lg:py-10">
        <ContactDetails />
        <FormComponent/>
      </div>
    </div>
  );
};

export default ContactUsPage;
