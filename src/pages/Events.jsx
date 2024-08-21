import React, { useState } from 'react';
import awarenessMain from '../assets/images/1.jpg';
import clothesMain from '../assets/images/2.jpg';
import workshopsMain from '../assets/images/3.jpg';
import awareness1 from '../assets/images/4.jpg';
import awareness2 from '../assets/images/5.jpg';
import awareness3 from '../assets/images/6.jpg';
import awareness4 from '../assets/images/7.jpg';
import clothes1 from '../assets/images/8.jpg';
import clothes2 from '../assets/images/9.jpg';
import clothes3 from '../assets/images/10.jpg';
import clothes4 from '../assets/images/11.jpg';
import drawingMain from '../assets/images/12.jpg';
import danceMain from '../assets/images/13.jpg';
import singingMain from '../assets/images/14.jpg';
import drawing1 from '../assets/images/15.jpg';
import drawing2 from '../assets/images/16.jpg';
import drawing3 from '../assets/images/17.jpg';
import drawing4 from '../assets/images/18.jpg';
import dance1 from '../assets/images/20.jpg';
import dance2 from '../assets/images/21.jpg';
import dance3 from '../assets/images/22.jpg';
import dance4 from '../assets/images/23.jpg';
import singing1 from '../assets/images/19.jpg';
import singing2 from '../assets/images/24.jpg';
import singing3 from '../assets/images/25.jpg';
import singing4 from '../assets/images/26.jpg';
import Footer from '../components/Footer';

const Events = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [selectedWorkshop, setSelectedWorkshop] = useState(null);
    const [zoomedImage, setZoomedImage] = useState(null);

    const events = [
        {
            name: 'Awareness Program',
            mainImage: awarenessMain,
            description: 'Programs aimed at educating the community about various social issues. Through our awareness programs, we strive to enlighten individuals about health, hygiene, education, and other crucial matters. We believe that awareness is the first step towards change, and our goal is to empower communities with knowledge and understanding.',
            images: [awareness1, awareness2, awareness3, awareness4],
        },
        {
            name: 'Clothes and Stationary Distribution',
            mainImage: clothesMain,
            description: 'Distributing essential clothes and stationery to those in need. Our distribution drives ensure that underprivileged children and families have access to necessary clothing and educational supplies. By providing these essentials, we aim to support their education and improve their quality of life.',
            images: [clothes1, clothes2, clothes3, clothes4],
        },
        {
            name: 'Workshops',
            mainImage: workshopsMain,
            description: 'Conducting various workshops for skill development. Our workshops are designed to teach new skills and enhance existing ones. From art and dance to vocational training, our workshops cater to different age groups and interests, helping individuals develop their talents and improve their opportunities.',
            subEvents: [
                {
                    name: 'Drawing Workshop',
                    mainImage: drawingMain,
                    description: 'Workshops aimed at enhancing drawing skills. Participants learn various drawing techniques and styles, allowing them to express their creativity and improve their artistic abilities.',
                    images: [drawing1, drawing2, drawing3, drawing4],
                },
                {
                    name: 'Dance Workshop',
                    mainImage: danceMain,
                    description: 'Workshops focused on teaching different dance forms. These sessions help participants develop their dance skills, gain confidence, and enjoy the physical and emotional benefits of dancing.',
                    images: [dance1, dance2, dance3, dance4],
                },
                {
                    name: 'Singing Workshop',
                    mainImage: singingMain,
                    description: 'Workshops to improve singing abilities. Through vocal training and practice, participants can enhance their singing skills, learn new techniques, and find joy in music.',
                    images: [singing1, singing2, singing3, singing4],
                },
            ],
        },
    ];

    const renderImages = (images) => (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 animate-slideIn">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Event Image ${index + 1}`}
                    className="w-full h-40 object-cover rounded-md cursor-pointer"
                    onClick={() => setZoomedImage(image)}
                />
            ))}
        </div>
    );

    return (
        <>
            <div className="  min-h-screen py-10 px-5 sm:px-10 md:px-20">
                <div className="max-w-7xl mx-auto overflow-hidden">
                    <div className="p-16">
                        <h1 className="text-4xl font-bold text-orange-600 mb-6 text-center">
                            Our Events
                        </h1>
                        <p className="text-lg text-gray-700 mb-10 text-center">
                            Our NGO organizes various events to educate, empower, and support our community. Through these events, we aim to address critical social issues, provide essential resources, and foster skill development. By engaging with our community through diverse programs and initiatives, we strive to make a meaningful impact on the lives of those we serve. Our events range from awareness programs and educational workshops to distribution drives and cultural activities. Each event is designed with the goal of promoting knowledge, enhancing skills, and improving the overall well-being of individuals and families. Join us in making a difference as we work together to create a more informed and empowered society, where everyone has the opportunity to thrive and succeed. Your participation and support are crucial in helping us achieve our mission and bring about positive change in our community.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                            {events.map((event, index) => (
                                <div
                                    key={index}
                                    className="bg-orange-100 p-4 rounded-lg shadow-md cursor-pointer hover:bg-orange-200 transition duration-300"
                                    onClick={() => {
                                        setSelectedEvent(event.name);
                                        setSelectedWorkshop(null);
                                    }}
                                >
                                    <img src={event.mainImage} alt={event.name} className="w-full h-40 object-cover rounded-md mb-4" />
                                    <h2 className="text-xl font-semibold text-orange-600 mb-2">{event.name}</h2>
                                    <p className="text-gray-700">{event.description}</p>
                                </div>
                            ))}
                        </div>

                        {selectedEvent && (
                            <div className="mb-10 animate-fadeIn">
                                <h2 className="text-3xl font-semibold text-orange-600 mb-6 text-center">{selectedEvent}</h2>
                                {events.find(event => event.name === selectedEvent).subEvents ? (
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                                        {events.find(event => event.name === selectedEvent).subEvents.map((subEvent, index) => (
                                            <div
                                                key={index}
                                                className="bg-orange-100 p-4 rounded-lg shadow-md cursor-pointer hover:bg-orange-200 transition duration-300"
                                                onClick={() => setSelectedWorkshop(subEvent.name)}
                                            >
                                                <img src={subEvent.mainImage} alt={subEvent.name} className="w-full h-40 object-cover rounded-md mb-4" />
                                                <h3 className="text-xl font-semibold text-orange-600 mb-2">{subEvent.name}</h3>
                                                <p className="text-gray-700">{subEvent.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    renderImages(events.find(event => event.name === selectedEvent).images)
                                )}

                                {selectedWorkshop && (
                                    <div className="mb-10 animate-fadeIn">
                                        <h3 className="text-2xl font-semibold text-orange-600 mb-6 text-center">{selectedWorkshop}</h3>
                                        {renderImages(events.find(event => event.name === selectedEvent).subEvents.find(subEvent => subEvent.name === selectedWorkshop).images)}
                                    </div>
                                )}
                            </div>
                        )}

                        {zoomedImage && (
                            <div
                                className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                                onClick={() => setZoomedImage(null)}
                            >
                                <img src={zoomedImage} alt="Zoomed" className="max-w-full max-h-full rounded-lg" />
                            </div>
                        )}
                    </div>
                </div>

                <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes slideIn {
                    from { transform: translateY(50px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.5s ease-in-out;
                }

                .animate-slideIn {
                    animation: slideIn 0.5s ease-in-out;
                }
            `}</style>
            </div>
            <Footer />
        </>
    );
};

export default Events;