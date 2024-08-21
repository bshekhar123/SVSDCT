import React from 'react'
import visionPic from "../assets/vision.png"

function HomeAbt() {
    return (
        <div className='bg-white'>
            <h1 className='text-center text-orange-600 text-3xl font-bold mt-12 mb-5'>Our Vision</h1>
            <div>
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-12 lg:px-36">
                    <p>
                        Our mission is to create lasting positive change by addressing the root causes of poverty and inequality. We strive to empower individuals, especially the underprivileged and marginalized, through education, vocational training, and holistic development programs.
                    </p>
                    <img src={visionPic} className='w-64 rounded-md my-4 lg:my-0 lg:ms-16' alt="..." />
                </div>
            </div>
        </div>
    )
}

export default HomeAbt;