import React, { useRef, useState } from 'react'
import InputField from '../components/InputField';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { doPOST } from '../store/httpUtil/httpUtils';
import { ENDPOINTS } from '../common';
import AuthStatus from '../service/AuthService';
import IMAGE from "../assets/logo.png"

function Signup() {
    const [username, setUsername] = useState("");
    const [num, setNum] = useState("");
    const [passs, setPasss] = useState("");
    const [cnfPass, setCnfPass] = useState("");
    const [authState, setAuthState] = useState(0);
    const otpRef = useRef(null);
    const navigate = useNavigate();

    const sendOTPHandler = async (e) => {
        e.preventDefault();
        if (passs !== cnfPass) {
            toast.error("Passwords do not match");
        }
        else {
            const res = await doPOST(ENDPOINTS.sentOtp, { phone: num, name: username });
            if (res.status === 200) {
                toast.success("OTP Sent");
                setAuthState(1);
            }
            else {
                toast.error(res.data?.message);
            }
        }
    }

    const signupHandler = async (e) => {
        e.preventDefault();
        const res = await doPOST(ENDPOINTS.verifyOtp, { phone: num, name: username, pass: passs, otp: otpRef.current.value });
        if (res.status === 200) {
            toast.success("Sign up successfull");
            AuthStatus.setToken(res.data?.accessToken);
            navigate("/");
        }
        else {
            toast.error(res.data?.message);
        }
        // console.log(otpRef.current.value, typeof otpRef.current.value);
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
            <div className="absolute w-3/4 pb-4 pt-2">
                <Link to="/login" className="text-white mx-3">{"<- Back to Login Page"}</Link>
                <InputField value={username} setValue={setUsername} htmlfor="username" label="Username" type="text" placeholder="Enter your Username" isRequired isDisabled={authState !== 0} />
                <InputField value={num} setValue={setNum} htmlfor="phnum" label="Phone Number" type="number" placeholder="Enter your Phone Number" isRequired isDisabled={authState !== 0} />
                <InputField value={passs} setValue={setPasss} htmlfor="password" label="Password" type="password" placeholder="Enter your Password" isRequired isDisabled={authState !== 0} />
                <InputField value={cnfPass} setValue={setCnfPass} htmlfor="cnfpassword" label="Confirm Password" type="password" placeholder="Renter your Password" isRequired isDisabled={authState !== 0} />

                {authState !== 0 ? (
                    <div className="mx-5 mt-4">
                        <label htmlFor="otp" className="block text-white text-sm font-bold mb-2">Enter 6 Digit OTP:</label>
                        <input
                            type="number"
                            id="otp"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none"
                            placeholder="OTP"
                            maxLength="6"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            ref={otpRef}
                        />
                    </div>
                ) : null}
                <button className="bg-white text-black mx-5 px-3 py-1 mt-6 font-semibold text-lg rounded-md" onClick={authState === 0 ? sendOTPHandler : signupHandler}>Enter</button>
            </div>

        </div>
    )
}

export default Signup;