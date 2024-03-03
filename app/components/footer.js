import React from 'react';

const Footer = () => {
 return (
    <footer className="bg-black text-white p-6 lg:px-28 lg:py-20">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-auto mb-6 sm:mb-0">
            <h3 className="text-lg font-semibold">About Us</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="text-gray-50 hover:text-white">Our Story</a></li>
              <li><a href="#" className="text-gray-50 hover:text-white">Team</a></li>
              <li><a href="#" className="text-gray-50 hover:text-white">Careers</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-auto mb-6 sm:mb-0">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="text-gray-50 hover:text-white">Personal Injury</a></li>
              <li><a href="#" className="text-gray-50 hover:text-white">Criminal Law</a></li>
              <li><a href="#" className="text-gray-50 hover:text-white">Family Law</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-auto mb-6 sm:mb-0">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="text-gray-50 hover:text-white">123 Main St, City, State</a></li>
              <li><a href="#" className="text-gray-50 hover:text-white">(123) 456-7890</a></li>
              <li><a href="#" className="text-gray-50 hover:text-white">contact@example.com</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-auto">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="mt-2 space-y-2">
              <a href="#" className="text-gray-50 hover:text-white mr-4"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-50 hover:text-white mr-4"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-50 hover:text-white mr-4"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="text-gray-50 hover:text-white"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
 );
};

export default Footer;
