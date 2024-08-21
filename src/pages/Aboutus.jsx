import React, { useEffect, useRef, useState } from 'react';
import backgroundImage from '../assets/images/ngo.jpg';
import { IoSchool, IoFastFood, IoColorPaletteSharp } from "react-icons/io5";
import { GiMusicalScore } from "react-icons/gi";
import { donationLink } from '../common';
import Footer from '../components/Footer';

const AboutUs = () => {
    const [isInView, setIsInView] = useState(false);
    const pictureRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (pictureRef.current) {
            observer.observe(pictureRef.current);
        }

        return () => {
            if (observer && observer.disconnect) {
                observer.disconnect();
            }
        };
    }, []);

    const openUrl = () => {
        window.open(donationLink)
    }

    return (
        <>
            <div className=" min-h-screen py-10 px-5 sm:px-10 md:px-20">
                <div className="max-w-7xl mx-auto  overflow-hidden">
                    <div className="p-16">
                        <h1 className="text-4xl font-bold text-orange-600 mb-10 text-center">
                            About Us
                        </h1>

                        <div className="flex flex-col md:flex-row gap-8 mb-8">
                            <div className="bg-gray-200 p-6 rounded-lg shadow-sm flex-1">
                                <h2 className="text-3xl font-semibold text-orange-600 mb-4">Our Vision</h2>
                                <p className="text-black">
                                    Our vision is to build a society where every individual, regardless of their socio-economic background, has the opportunity to lead a dignified and fulfilling life. We aspire to create a world where education, health, and prosperity are accessible to all, empowering individuals to contribute positively to their communities.
                                </p>
                            </div>
                            <div className="bg-gray-200 p-6 rounded-lg shadow-sm flex-1">
                                <h2 className="text-3xl font-semibold text-orange-600 mb-4">Our Mission</h2>
                                <p className="text-black">
                                    Our mission is to create lasting positive change by addressing the root causes of poverty and inequality. We strive to empower individuals, especially the underprivileged and marginalized, through education, vocational training, and holistic development programs.
                                </p>
                            </div>
                        </div>

                        <div
                            ref={pictureRef}
                            className={`relative overflow-hidden bg-cover bg-center h-96 mb-8 rounded-lg ${isInView ? 'animate-slideUp' : 'opacity-0'}`}
                            style={{ backgroundImage: `url(${backgroundImage})`, transition: 'opacity 2s ease-in-out' }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-black opacity-60 rounded-lg"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <p className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white p-2 sm:p-4 md:p-6 lg:p-8 text-center font-bold italic ${isInView ? 'animate-textSlideUp' : 'opacity-0'}`}>
                                    "Swami Vivekananda Charitable Trust is a dedicated non-profit organization committed to uplifting underprivileged communities through education, skill development, and cultural enrichment. Inspired by the teachings and philosophy of Swami Vivekananda, our mission is to provide comprehensive support to those in need, fostering an environment where every individual can thrive and achieve their full potential."
                                </p>
                            </div>
                        </div>

                        <div className="relative mb-10 text-center">
                            <div className="relative inline-block mt-6 mb-0">
                                <div className="relative text-orange-600 font-bold text-3xl">
                                    Our Core Programs
                                    <div className="absolute inset-x-0 bottom-0  bg-orange-600 rounded-full"></div>
                                </div>
                            </div>
                            <div className="flex flex-wrap justify-center gap-10 mt-16">
                                <div className="group relative w-64 bg-orange-200 rounded-lg p-6 transition-all duration-300 ease-in-out hover:bg-white hover:shadow-lg">
                                    <div className="flex justify-center items-center h-16 w-16 bg-orange-400 rounded-full mb-4">
                                        <IoSchool color='#fff' size={30} />
                                    </div>
                                    <p className="text-center text-orange-600 mb-2 group-hover:opacity-0 transition-opacity duration-300 hover:cursor-default">Education for Underprivileged Students</p>
                                    <p className="text-center text-orange-600 opacity-0 group-hover:opacity-100 hover:cursor-default  transition-opacity duration-300">
                                        We provide educational support to students from disadvantaged backgrounds to help them achieve their academic goals.
                                    </p>
                                </div>
                                <div className="group relative w-64 bg-orange-200 rounded-lg p-6 transition-all duration-300 ease-in-out hover:bg-white hover:shadow-lg">
                                    <div className="flex justify-center items-center h-16 w-16 bg-orange-400 rounded-full mb-4">
                                        <IoFastFood color='#fff' size={30} />
                                    </div>
                                    <p className="text-center text-orange-600 mb-2 hover:cursor-default group-hover:opacity-0 transition-opacity duration-300">Food Distribution</p>
                                    <p className="text-center text-orange-600 hover:cursor-default opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        Our food distribution program ensures that no one goes hungry by providing nutritious meals to those in need.
                                    </p>
                                </div>
                                <div className="group relative w-64 bg-orange-200 rounded-lg p-6 transition-all duration-300 ease-in-out hover:bg-white hover:shadow-lg">
                                    <div className="flex justify-center items-center h-16 w-16 bg-orange-400 rounded-full mb-4">
                                        <GiMusicalScore color='#fff' size={30} />
                                    </div>
                                    <p className="text-center hover:cursor-default text-orange-600 mb-2 group-hover:opacity-0 transition-opacity duration-300">Vocational Training for Girls</p>
                                    <p className="text-center hover:cursor-default text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        We offer vocational training to young girls, empowering them with skills to build a better future.
                                    </p>
                                </div>
                                <div className="group relative w-64 bg-orange-200 rounded-lg p-6 transition-all duration-300 ease-in-out hover:bg-white hover:shadow-lg">
                                    <div className="flex justify-center items-center h-16 w-16 bg-orange-400 rounded-full mb-4">
                                        <IoColorPaletteSharp color='#fff' size={30} />
                                    </div>
                                    <p className="text-center hover:cursor-default text-orange-600 mb-2 group-hover:opacity-0 transition-opacity duration-300">Arts and Cultural Programs</p>
                                    <p className="text-center hover:cursor-default text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        We promote cultural enrichment through various arts and cultural programs.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-semibold text-orange-600 mb-4">Additional Initiatives</h2>
                        <p className="text-gray-700 mb-8">
                            In addition to our core programs, we are involved in various other activities that contribute to the well-being and development of our community:
                        </p>
                        <ul className="list-disc list-inside mb-8 text-gray-700">
                            <li className="mb-2"><strong>Health Camps:</strong> Regular medical check-ups and health awareness programs.</li>
                            <li><strong>Environmental Conservation:</strong> Tree plantation drives and clean-up campaigns.</li>
                        </ul>

                        <h2 className="text-3xl font-semibold text-orange-600 mb-4">Join Us</h2>
                        <p className="text-gray-700">
                            We invite you to be a part of our journey. Whether through volunteering, donations, or partnerships, your support can help us reach more people and create a brighter, more equitable future for all.
                        </p>

                        <p className="text-gray-700 mt-8">
                            Together, we can make a difference, one life at a time.
                        </p>

                        <div className="mt-10 text-center">
                            <button onClick={openUrl} className="bg-orange-600 text-white py-2 px-6 rounded-full transition duration-300 ease-in-out hover:bg-white hover:text-orange-600 border border-orange-600">
                                Donate
                            </button>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                @keyframes slideUp {
                    0% {
                        transform: translateY(100%);
                        opacity: 0;
                    }
                    100% {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }

                @keyframes textSlideUp {
                    0% {
                        transform: translateY(50%);
                        opacity: 0;
                    }
                    100% {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }

                .animate-slideUp {
                    animation: slideUp 2s ease-in-out;
                    opacity: 1 !important;
                }

                .animate-textSlideUp {
                    animation: textSlideUp 2s ease-in-out;
                    opacity: 1 !important;
                }

                .opacity-0 {
                    opacity: 0;
                }

                .font-bold.italic {
                    font-family: 'Roboto', sans-serif;
                    font-weight: bold;
                    font-style: italic;
                }
            `}</style>
            </div>
            <Footer />
        </>
    );
};

export default AboutUs;
