import React from 'react';
import { countryies } from '../constants';
import { RiExternalLinkFill } from "react-icons/ri";
import { Link, useNavigate } from 'react-router';


const WorldWeatherForecastSection = () => {
    const navigate = useNavigate();
    const handleClick = (event) => {
        event.preventDefault();
          navigate(`/search?city=${city}`); 
      };
    return <>
        <section className=" max-w-[85%] mx-auto flex flex-col md:flex-row items-center justify-between py-8  animate-fadeIn text-gray-300 ">
            <div className="md:w-1/2 ">
                <h2 className="text-2xl md:text-4xl  font-bold mb-4">
                    World Weather Forecast
                </h2>
                <p>Please select a city</p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
                <div className="flex justify-end">
                    <a className="elementor-button elementor-button-link elementor-size-sm" href="#">
                        <span className="elementor-button-content-wrapper">
                            <span className="elementor-button-text">More locations</span>
                        </span>
                    </a>
                </div>
            </div>
        </section>

        <section className="  max-w-[85%] mx-auto  animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {countryies.map((country) => (
                    <ServiceCard title={country.name} img={country.img} />
                ))}

            </div>
        </section>
    </>
};

const ServiceCard = ({ title, img, link }) => (
    <Link to={`/search?city=${title}`} className="bg-slate-700 p-3 cursor-pointer rounded-full text-gray-300 shadow-md">
        <div className="flex justify-between">
            <div className="flex items-center gap-2"><img className='size-8 rounded-full' src={img} alt="" />
                <h3 className="text-sm font-semibold mb-2 capitalize">{title}
                </h3>
            </div>
            <a className="elementor-button elementor-size-md flex items-center" href={link}>
                <span className="mr-2 text-sm">Search Now</span>
                <RiExternalLinkFill/>
            </a>
        </div>
    </Link>
);

export default WorldWeatherForecastSection;