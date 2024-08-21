import React from 'react';
import orgLogo from "../assets/logo.png";
import { useNavigate } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { fbLink } from '../common';
import { MdEmail } from 'react-icons/md';

function Footer() {
    const navigate = useNavigate();
    return (
        <div className='bg-black opacity-90 py-6'>
            <div className='px-5 flex items-center justify-between lg:px-16 lg:flex-row'>
                <div>
                    <img src={orgLogo} style={{ aspectRatio: 1, width: 150 }} alt="..." />
                </div>
                <div className='mx-5'>
                    <p className='text-2xl font-semibold text-orange-600'>We are...</p>
                    <p className='text-md text-white'>non-profit organisation that operates independently of any government. Mainly we aim to educate underprivileged students and help them in the pursuit of their dreams.</p>
                    <p className='text-sm text-center font-semibold text-orange-600 my-6'>Swami Vivekananda Social Development and Charitable Trust &copy; 2024</p>
                </div>
                <div>
                    <div className='cursor-pointer' onClick={() => window.open(fbLink)}>
                        <FaFacebook size={40} color='rgb(234, 88, 12)' />
                    </div>
                    <br/>
                    <div className='cursor-pointer' onClick={() => window.open('mailto:example@example.com')}>
                        <MdEmail size={40} color='rgb(234, 88, 12)' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;