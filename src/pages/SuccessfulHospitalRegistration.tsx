import React from 'react';

const SuccessfulHospitalRegistration: React.FC = () => {
    return (
        <div className='textBlue backgroundPale textBlue flex flex-col fixed inset-0 items-center justify-center'>
            <div className='text-5xl font-bold top-10 absolute'>Thank You!</div>
            <div className='absolute md:top-32 top-40'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-40">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                </svg>
            </div>
            <div className='text-lg bgClickBlue text-white px-4 py-6 rounded-2xl absolute md:top-[340px]'>We will be in touch shortly</div>
        </div>
    );
};

export default SuccessfulHospitalRegistration;
