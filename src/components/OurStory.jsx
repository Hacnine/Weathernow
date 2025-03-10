import React from 'react';

const OurStory = () => (
  <section className="flex flex-col md:flex-row items-center justify-between p-8 bg-gray-100 animate-fadeIn">
    <div className="md:w-1/2 animate-fadeInLeft">
      <img
        decoding="async"
        loading="lazy"
        width="1080"
        height="1080"
        src="https://ld-wp73.template-help.com/wordpress/prod_33356/v1/wp-content/uploads/2023/05/home_img2.png"
        className="mx-auto"
        alt="image"
      />
    </div>
    <div className="md:w-1/2 animate-fadeInRight mt-8 md:mt-0">
      <h2 className="text-2xl md:text-4xl font-bold mb-4">
        Accurate and well-timed weather forecasts from top meteorology experts on any device
      </h2>
      <p className="mb-4">
        Weathernow partners with national weather services and qualified meteorologists to bring you accurate forecasts for any location. We help people understand the impact of weather, make the best decisions, and plan their day in advance.
      </p>
      <p className="mb-4">
        On our website, you can expect highly accurate weather forecasts that provide actionable weather insights and increase your safety.
      </p>
      <a
        className="jet-button__instance jet-button__instance--icon-left hover-effect-0"
        href="https://ld-wp73.template-help.com/wordpress/prod_33356/v1/about/"
      >
        <div className="jet-button__plane jet-button__plane-normal"></div>
        <div className="jet-button__plane jet-button__plane-hover"></div>
        <div className="jet-button__state jet-button__state-normal">
          <span className="jet-button__label">Read our story</span>
        </div>
        <div className="jet-button__state jet-button__state-hover">
          <span className="jet-button__label">Read our story</span>
        </div>
      </a>
    </div>
  </section>
);

export default OurStory;