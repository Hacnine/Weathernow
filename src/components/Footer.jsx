import React from 'react';

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/3 text-center md:text-left mb-8 md:mb-0">
          <a href="">
           <h1 className=' text-2xl font-bold'>Weathernow</h1>
          </a>
          <p className="mt-4 text-gray-400">
            Aliquam volutpat sapien a augue vulputate vestibulum. Quisque sodales lectus ac sollicitudin pretium. Duis malesuada erat a nisl congue luctus.
          </p>
        </div>
        <div className="w-full md:w-1/3 text-center mb-8 md:mb-0">
          <h2 className="text-xl font-bold mb-4">Find us</h2>
          <address className="not-italic text-gray-400">
            New York<br />
            4140 Parker Rd. Allentown,<br />
            New Mexico 31134
          </address>
          <div className="flex justify-center mt-4 space-x-4">
            <a href="#" target="_blank" className="text-gray-400 hover:text-white">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" target="_blank" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" target="_blank" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" target="_blank" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
       <div className="flex items-center justify-end w-full md:w-1/3">
       <div className=" text-center md:text-left">
          <h2 className="text-xl font-bold mb-4">Contacts</h2>
          <h3 className="font-semibold">General:</h3>
          <p className="text-gray-400">
            <a href="tel:+1(505) 555-0125" className="hover:text-white">+1(505) 555-0125</a>
          </p>
          <a
            href="mailto:namecompany@example.com"
            className="block text-blue-500 hover:text-blue-700 mt-2"
          >
            namecompany@example.com
          </a>
          <h3 className=" font-semibold mt-4">New business:</h3>
          <p className="text-gray-400">
            <a href="tel:+1(808) 555-0111" className="hover:text-white">+1(808) 555-0111</a>
          </p>
          <a
            href="mailto:namecompany@example.com"
            className="block text-blue-500 hover:text-blue-700 mt-2"
          >
            namecompany@example.com
          </a>
        </div>
       </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400  ">
        <p>
          <a href="#" className="hover:text-white"></a> ©. All rights reserved.
          <a href="" className="ml-6 hover:text-white">Privacy policy</a>
          <a href="#" className="ml-6 hover:text-white">Terms &amp; use</a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;