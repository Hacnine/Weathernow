import React from 'react';
import { countryies } from '../constants';


const WorldWeatherForecastSection = () => (
    <>
        <section className="flex flex-col md:flex-row items-center justify-between p-8  animate-fadeIn text-gray-300 ">
            <div className="md:w-1/2 ">
                <h2 className="text-2xl md:text-4xl  font-bold mb-4">
                    World Weather Forecast
                </h2>
                <p>Please select a country</p>
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

        <section className="p-8  animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {countryies.map((country) => (
                    <ServiceCard title={country.name} img={country.img} />
                ))}

            </div>
        </section>
    </>
);

const ServiceCard = ({ title, img, link }) => (
    <div className="bg-slate-700 p-3 rounded-full text-gray-300 shadow-md">
        <div className="flex justify-between">
            <div className="flex items-center gap-2"><img className='size-8 rounded-full' src={img} alt="" />
                <h3 className="text-sm font-semibold mb-2 capitalize">{title}
                </h3>
            </div>
            <a className="elementor-button elementor-size-md flex items-center" href={link}>
                <span className="mr-2 text-sm">Learn more</span>
                <svg width="11" height="11" viewBox="0 0 14 14" fill="#222222" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12.9171L11.9874 0.919411L13.0697 2.00234L1.08229 14L0 12.9171Z"></path>
                    <path d="M3.5 0H14V1.75H3.5V0Z"></path>
                    <path d="M14 10.5229V0H12.25V10.5229H14Z"></path>
                </svg>
            </a>
        </div>
    </div>
);

export default WorldWeatherForecastSection;