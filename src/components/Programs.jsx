import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import stationary from "../assets/stationary.png";
import awareness from "../assets/aware.png";
import clothes from "../assets/clothes.png";
import drawing from "../assets/drawing.png";
import extra from "../assets/extra.png";
import { useNavigate } from 'react-router-dom';

const data = [
    {
        id: 1,
        image: stationary,
        text: "Stationary Distribution",
    },
    {
        id: 2,
        image: awareness,
        text: "Awareness Campaigns",
    },
    {
        id: 3,
        image: clothes,
        text: "Clothes Distribution",
    },
    {
        id: 4,
        image: drawing,
        text: "Drawing Competition",
    },
    {
        id: 5,
        image: extra,
        text: "Extra Curricular Activities",
    },
]

function Card({ image, text }) {
    const navigate = useNavigate()
    const containerStyle = {
        backgroundImage: `url(${image})`,
    };

    const overlayStyle = {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    };

    return (
        <div style={containerStyle} className="relative h-96 bg-contain bg-center" onClick={() => { navigate("/events") }}>
            <div style={overlayStyle}></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-3xl text-center font-bold">{text}</p>
            </div>
        </div>
    )
}

function Programs() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    };

    return (
        <div className='bg-white'>
            <h1 className='text-center text-orange-600 text-3xl font-bold mt-16 mb-6'>Events</h1>
            <div className="flex justify-center items-center">
                <Slider className='w-2/3 lg:w-1/2 cursor-pointer' {...settings}>
                    {
                        data.map(e => {
                            return (
                                <div key={e.id}>
                                    <Card {...e} />
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Programs;
