import React from 'react';

const WeatherNewsSection = () => (
    <>
        <section className="flex flex-col md:flex-row items-center justify-between p-8   text-gray-300 animate-fadeIn">
            <div className="md:w-1/2">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">
                    Weather forecast news
                </h2>
                <p>Get the best weather news from our team of meteorologists and learn how the weather changes the lives all over the globe.</p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
                <div className="flex justify-end">
                    <a className="elementor-button elementor-button-link elementor-size-sm" href="#">
                        <span className="elementor-button-content-wrapper">
                            <span className="elementor-button-text">view all</span>
                        </span>
                    </a>
                </div>
            </div>
        </section>

        <section className="p-8 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
                <div className="flex flex-col items-center  pl-7">
                    <NewsCard
                        title="Climate change: Facing Earth’s greatest challenge"
                        date="May 30, 2023"
                        author="admin"
                        imgSrc="https://ld-wp73.template-help.com/wordpress/prod_33356/v1/wp-content/uploads/2023/05/post1-min.png"
                        link="https://ld-wp73.template-help.com/wordpress/prod_33356/v1/2023/05/30/lorem-ipsum-dolor-sit-amet-consectetur-12/"
                    />
                </div>
                <div className="flex flex-col items-center ">
                    <NewsCard
                        title="Wildfires burn in Colorado and Texas"
                        date="May 30, 2023"
                        author="admin"
                        imgSrc="https://ld-wp73.template-help.com/wordpress/prod_33356/v1/wp-content/uploads/2023/05/post2.png"
                        link="https://ld-wp73.template-help.com/wordpress/prod_33356/v1/2023/05/30/lorem-ipsum-dolor-sit-amet-consectetur-11/"
                    />
                </div>
                <div className="flex flex-col items-center ">
                    <NewsCard
                        title="The dangers of nighttime heat"
                        date="May 30, 2023"
                        author="admin"
                        imgSrc="https://ld-wp73.template-help.com/wordpress/prod_33356/v1/wp-content/uploads/2023/05/post3.png"
                        link="https://ld-wp73.template-help.com/wordpress/prod_33356/v1/2023/05/30/lorem-ipsum-dolor-sit-amet-consectetur-10/"
                    />
                </div>
            </div>

        </section>
    </>
);

const NewsCard = ({ title, date, author, imgSrc, link }) => (
    <div className=" rounded-lg  text-gray-200 ">
        <div className="flex flex-col items-start">
            <img className={`${title === "The dangers of nighttime heat" ? "h-full" : "h-48"}  md:w-72 w-full object-cover mb-4 rounded-3xl`} src={imgSrc} alt={title} />
            <h3 className="text-xl font-semibold mb-2"><a href={link}>{title}</a></h3>
            <div className="text-sm mb-4">
                <span className="mr-2">By <a href="#" className="text-blue-600">{author}</a></span>
                <span>{date}</span>
            </div>
            <a className="elementor-button elementor-size-md flex items-center text-blue-600" href={link}>
                <span className="mr-2">Read more</span>
                <svg width="11" height="11" viewBox="0 0 14 14" fill="#222222" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12.9171L11.9874 0.919411L13.0697 2.00234L1.08229 14L0 12.9171Z"></path>
                    <path d="M3.5 0H14V1.75H3.5V0Z"></path>
                    <path d="M14 10.5229V0H12.25V10.5229H14Z"></path>
                </svg>
            </a>
        </div>
    </div>
);

export default WeatherNewsSection;