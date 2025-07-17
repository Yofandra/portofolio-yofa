/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from 'react-slick';
import {useEffect, useState} from 'react';
import { Link } from "react-router-dom";

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="absolute right-[20px] md:right-[200px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
            onClick={onClick}
        >
            {/* <img src={arrowRight} alt="Next" className='md:w-3' /> */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 md:w-10 md:h-10 text-primary cursor-pointer"
                onClick={onClick}
            >
                <polyline points="9 18 15 12 9 6" />
            </svg>
        </div>
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="absolute left-[20px] md:left-[200px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
            onClick={onClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 md:w-10 md:h-10 text-primary cursor-pointer"
                onClick={onClick}
            >
                <polyline points="15 18 9 12 15 6" />
            </svg>
        </div>
    );
};

const CardPortofolio = () => {
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        fetch("/portfolio.json")
          .then((response) => response.json())
          .then((data) => {
            setPortfolio(data.portfolio);
            console.log(data.portfolio);
          })
          .catch((error) => console.error("Error fetching portfolio:", error));
      }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        //         responsive: [
        //     {
        //         breakpoint: 768, 
        //         settings: {
        //             slidesToShow: 1,
        //         }
        //     },
        //     {
        //         breakpoint: 9999, 
        //         settings: {
        //             slidesToShow: 2,
        //         }
        //     }
        // ]
    };

    return (
        <div className="w-full mt-4">
            <Slider {...settings}>
                {portfolio.map((portfolio) => (
                    <div key={portfolio.id} className="!flex justify-center items-center px-[50px]">
                        <div className="rounded-lg shadow-lg bg-[#CEE6EA] h-full md:!h-[550px] md:w-[1000px] flex flex-col items-center p-3 font-poppins">
                            <img
                                className="w-full md:!w-[860px] h-[160px] md:h-[300px] object-cover rounded-lg md:mt-10"
                                src={portfolio.imageUrl}
                                alt={portfolio.title}
                            />
                            <div className="mt-1 md:mt-6 md:px-14 w-full">
                                <h3 className="font-semibold tracking-widest md:text-4xl">{portfolio.title}</h3>
                                <p className='text-sm md:text-lg md:mt-2'>{portfolio.description}</p>
                                <div className='flex my-1 md:my-2'>
                                    {portfolio.techStack.map((tech, index) => (
                                        <div key={index} className='bg-primary rounded-sm w-auto px-2 h-4 md:h-auto text-secondary text-xs md:text-lg text-center shadow-sm md:shadow-xl shadow-gray-700 mr-1'>
                                            <p>{tech}</p>
                                        </div>
                                    ))}
                                </div>
                                <Link to={portfolio.link} target="_blank" >
                                    <p className=" text-slate-500 text-xs md:text-base mt-2">Link Project...</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CardPortofolio;
