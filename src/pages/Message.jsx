import React from 'react';
import presidentImage from '../assets/images/trust.png';
import Footer from '../components/Footer';

const MessageFromPresident = () => {
    return (
        <>
            <div className="  min-h-screen py-10 px-5 sm:px-10 md:px-20">
                <div className="max-w-5xl mx-auto  overflow-hidden">
                    <div className="p-16 text-center">
                        <h1 className="text-4xl font-bold text-orange-600 mb-6">Message from the President</h1>

                        <div className="flex flex-col items-center mb-8">
                            <img
                                src={presidentImage}
                                alt="Mukul Biswas"
                                className="w-40 h-40 object-cover rounded-full mb-6 border-4 border-orange-600"
                            />
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Mukul Biswas</h2>
                            <p className="text-gray-600 italic">President, Swami Vivekananda Charitable Trust</p>
                        </div>

                        <div className="bg-orange-100 p-6 rounded-lg shadow-sm">
                            <p className="text-lg text-zinc-800 font-medium leading-relaxed">
                                "Swami Vivekananda Charitable Trust is a dedicated non-profit organization committed to uplifting underprivileged communities through education, skill development, and cultural enrichment. Inspired by the teachings and philosophy of Swami Vivekananda, our mission is to provide comprehensive support to those in need, fostering an environment where every individual can thrive and achieve their full potential. Our vision is to build a society where every individual, regardless of their socio-economic background, has the opportunity to lead a dignified and fulfilling life. We aspire to create a world where education, health, and prosperity are accessible to all, empowering individuals to contribute positively to their communities.
                            </p>
                            <p className="text-lg text-zinc-800 font-medium leading-relaxed mt-4">
                                Our mission is to create lasting positive change by addressing the root causes of poverty and inequality. We strive to empower individuals, especially the underprivileged and marginalized, through education, vocational training, and holistic development programs. Together, we can create a ripple effect of positive change that will uplift entire communities and generations to come. At Swami Vivekananda Charitable Trust, we believe in the power of education as a fundamental right and a powerful tool for transformation. Our educational initiatives focus on providing quality education to underprivileged children, equipping them with the knowledge and skills they need to build a better future for themselves and their families. We also place great emphasis on vocational training for girls, empowering them with the skills and confidence to pursue meaningful careers and become self-reliant.
                            </p>
                            <p className="text-lg text-zinc-800 font-medium leading-relaxed mt-4">
                                Our food distribution programs ensure that no one in our community goes to bed hungry. We are dedicated to addressing the immediate needs of those who are most vulnerable, while also working towards long-term solutions to food insecurity. In addition, our arts and cultural programs provide a platform for individuals to express themselves, celebrate their heritage, and foster a sense of community and belonging. We are grateful for the support of our volunteers, donors, and partners who share our vision and commitment to making a difference. Together, we can create a more just and equitable world where everyone has the opportunity to thrive. Thank you for being a part of our journey."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        <Footer />
        </>
    );
};

export default MessageFromPresident;