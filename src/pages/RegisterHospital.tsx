import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const RegisterHospital: React.FC = () => {
    const [receptionistName, setName] = useState('');
    const [email, setEmail] = useState('');
    const [hospitalName, setHospitalName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (receptionistName.trim() === '' || email.trim() === '' || hospitalName.trim() === '') {
            setErrorMessage('All fields are mandatory');
        } else {
            // Call your submit function here with the form data
            setErrorMessage('');
            navigate("/SuccessfulHospitalRegistration");
            console.log(receptionistName + "    " + email + "    " + hospitalName)
        }
    };

    return (
        <div className='backgroundPale textBlue fixed inset-0 flex flex-col items-center justify-center'>
            <div className='text-5xl font-bold top-10 absolute'>Register Your Hospital</div>
            {/* Enter Image of */}
            <div className='absolute md:top-32 top-40'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-40">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                </svg>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='relative md:mt-20 mt-64'>
                    <div className='textBlue md:-ml-56 -ml-40'>
                        <label htmlFor="name">Receptionist Name:</label>
                    </div>
                    <div>
                        <input type="text" id="name" value={receptionistName} onChange={(e) => setName(e.target.value)} required className='rounded-full border-blue-300 border-2 w-80 md:w-96 py-2 px-4' />
                    </div>
                </div>
                <div className='mt-4'>
                    <div className='textBlue md:-ml-56 -ml-40'>
                        <label htmlFor="email">Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    </div>

                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className='rounded-full border-blue-300 border-2 w-80 md:w-96 py-2 px-4' />
                </div>
                <div className='mt-4'>
                    <div className='textBlue md:-ml-56 -ml-40'>
                        <label htmlFor="hospitalName">Hospital Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    </div>
                    <input type="text" id="hospitalName" value={hospitalName} onChange={(e) => setHospitalName(e.target.value)} required className='rounded-full border-blue-300 border-2 w-80 md:w-96 py-2 px-4' />
                </div>
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                <div>
                    <button type="submit" className='bgClickBlue text-white rounded-full py-4 px-20 mt-10'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default RegisterHospital;
