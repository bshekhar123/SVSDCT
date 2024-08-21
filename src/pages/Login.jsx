import React, { useRef, useState } from 'react'
import InputField from '../components/InputField';
import { Link } from 'react-router-dom';
import { ENDPOINTS } from '../common';
import IMAGE from "../assets/logo.png"
import { doPOST } from '../store/httpUtil/httpUtils';
import toast from 'react-hot-toast';
import AuthStatus from '../service/AuthService';
import { useNavigate } from "react-router-dom";

function Login() {
    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const rememberRef = useRef(false);
    const navigate = useNavigate();

    const handleLoginLClick = async (e) => {
        e.preventDefault();
        const res = await doPOST(ENDPOINTS.login, { name, pass });
        if (res.status === 200) {
            toast.success(res.data?.message);
            if (rememberRef.current.checked)
                AuthStatus.setToken(res.data?.data?.accessToken);
            navigate("/");
        }
        else {
            toast.error(res.data?.message);
        }
    }

    const imgStyle = {
        backgroundPosition: 'center',
        width: 550,
        height: 550,
        aspectRatio: 1
    }

    return (
        <div className="relative h-screen bg-white flex justify-center items-center" style={{ backgroundColor: '#000' }}>
            <img src={IMAGE} alt='...' style={imgStyle} />
            <div className="absolute w-3/4 pt-3">
                <Link className="text-white px-3" to="/">{"<- Back to Home"}</Link>
                <InputField value={name} setValue={setName} htmlfor="username" label="Username" type="text" placeholder="Enter your Username" isRequired />
                <InputField value={pass} setValue={setPass} htmlfor="password" label="Password" type="password" placeholder="Enter your Password" isRequired />

                <div className="my-6 mx-5">
                    <label className="flex items-center">
                        <input type="checkbox" className="form-checkbox mr-2" ref={rememberRef} />
                        <span className="text-sm text-white">Remember Me</span>
                    </label>
                </div>
                <button className="bg-white text-black mx-5 px-3 py-1 font-semibold text-lg rounded-md" onClick={handleLoginLClick}>Enter</button>
                <Link to="/register"><p className="text-white mx-5 mt-3 cursor-pointer mb-4">Don't have an account? <span className='font-bold'>Signup now</span></p></Link>
            </div>
        </div>
    )
}

export default Login;