import { useState } from "react";
import InputField from "../components/InputField";
import StringTransition from "../components/StringTransition";
import TextAreaField from "../components/TextAreaField";
import toast from "react-hot-toast";
import emailjs from "emailjs-com"

function Contact() {
    const [data, setData] = useState({ subject: "", email: "", msg: "" });
    const [loading, setLoading] = useState(false);

    const changeHandler = (key, val) => {
        setData({
            ...data,
            [key]: val
        })
    }

    const submitHandler = async (e) => {
        if (loading) return;

        e.preventDefault();
        setLoading(true);
        emailjs.sendForm("service_9dryqns", "template_apgnlxn", e.target, "Pl6KuhBvt-PwM3QQ9")
            .then((res) => {
                console.log("res", res);
                toast.success("Email sent");
                setData({ subject: "", email: "", msg: "" })
            }).catch((err) => {
                console.log(err);
                toast.error("Error while sending email");
            }).finally(() => {
                setLoading(false)
            })
    }

    return (
        <div className='flex flex-col lg:flex-row items-center justify-evenly mt-44 mb-10'>
            <div className="w-full lg:px-6 mb-10 flex flex-col items-center">
                <h1 className="font-bold text-4xl text-orange-600">Connect with Us</h1>
                <StringTransition />
            </div>

            <div className="w-full flex justify-center items-center">
                <div className="w-3/4 p-3 rounded-md shadow-custom">
                    <form onSubmit={submitHandler}>
                        <InputField name="email" htmlfor="email" label="Your Email" placeholder="Email ID" type="email" lightBg value={data?.email} setValue={(v) => changeHandler("email", v)} />
                        <InputField name="subject" htmlfor="subject" label="Subject" placeholder="Subject" type="text" lightBg value={data?.subject} setValue={(v) => changeHandler("subject", v)} />
                        <TextAreaField name="msg" htmlfor="msg" label="Message" placeholder="Message" value={data?.msg} setValue={(v) => changeHandler("msg", v)} />
                        <button className="mx-5 mt-2 bg-orange-600 font-semibold text-white py-1 px-3 rounded-md">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;