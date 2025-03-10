import React from 'react';

const NewsletterSection = () => (
  <section className=" max-w-[85%] mx-auto flex flex-col items-center justify-center py-8 animate-fadeIn text-gray-300">
    <div className="w-full md:w-2/3 text-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-4">Get the fresh weather forecast daily</h2>
      <p className="mb-4">
        Subscribe to our newsletter to receive regular updates on the latest weather insights, news, and tips to help you avoid any unwanted risks and surprises during your day.
      </p>
      <form method="POST" action="#" className="flex flex-col md:flex-row items-center justify-center">
        <input
          className="p-2 border border-gray-300 placeholder:text-gray-300 rounded-md mb-4 md:mb-0 md:mr-4 w-full md:w-auto"
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <button
          type="submit"
          className="elementor-button elementor-size-md px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Count me in!
        </button>
      </form>
    </div>
  </section>
);

export default NewsletterSection;