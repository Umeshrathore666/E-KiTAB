import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import List from '../../public/List.json'
import Cards from './Cards';

const Freebook = (porps) => {
    const filterData = List.filter((data) => data.category === "Stroy Book");
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className='max-w-screen-2xl container md:px-20 px-4'>
                <div>
                    <h1 className='font-bold text-xl pb-3'>Your E-Kitab Book </h1>
                    <p>Please you choice your Book and gain your khowlege again and agin you choice your Book and gain your khowlege again and agin</p>

                </div>

                <div>
                    <Slider {...settings}>
                        {filterData.map((frigment) =>(<Cards item={frigment} key={frigment.id}/>
                      ))}
                         
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default Freebook