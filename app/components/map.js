import React from "react";

const MapComponent = () => {
  return (
    <div className="container p-2 md:p-5">
        <h1 className="w-full my-1 md:my-2 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center text-gray-800">Where we are located</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.9286490301383!2d36.84863407508266!3d-1.2099959987784488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3de7a6093c2d%3A0x6b5386718ea0acfa!2sWindsor%20Golf%20Hotel%20%26%20Country%20Club!5e0!3m2!1sen!2ske!4v1709302641613!5m2!1sen!2ske"
      className="w-full h-[300px] lg:h-[500px]"
        style={{border:0}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapComponent;
