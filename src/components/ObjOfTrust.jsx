import React from 'react'

const data = [
    {
        id: 1,
        message: "Construction and running of schools, colleges, education institutions, library, free dispensaries, Centers for poor feeding and homes for the aged for the benefit of the public."
    },
    {
        id: 2,
        message: "Providing for grants, scholarships, fellowships and other forms of financial assistance to the needy and deserving students for pursuing education, vocational training, skill development etc."
    },
    {
        id: 3,
        message: "Granting of financial assistance to any educational institution for granting scholarships, prizes, medals, awards for excellence in studies, sports, scientific research, distribution of books, note books and study materials for poor and deserving students."
    },
    {
        id: 4,
        message: "Establishment, conduct, maintenance of clinical laboratories, hospitals, nursing homes, dispensaries, health camp, blood donation camp and institutions of similar nature and providing financial assistance to the deserving persons for medical treatment, in any medical institution."
    },
    {
        id: 5,
        message: "Providing financial assistance for children education welfare and thier skills development to work for backward classes and tribal welfare development, empowerment and awareness."
    },
]

function ObjOfTrust() {
    return (
        <div className='bg-white'>
            <h1 className='text-center text-orange-600 text-3xl font-bold mt-20 mb-5'>Object of Trust</h1>
            <ul className='list-square mx-12 lg:mx-36'>
                {
                    data.map(e => <li key={e.id}>{e.message}</li>)
                }
            </ul>
        </div>
    )
}

export default ObjOfTrust;