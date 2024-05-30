// @ts-nocheck

import React from 'react';
import ambulance from "../components/Ambulance.jpeg"

const RedPatients: React.FC = () => {
    return (
        <div>
            <div className='bg-black text-white w-screen h-screen'>
                <div className='text-3xl'>You have been diagnosed as a Critical Patient</div>
                <img src={ambulance} alt="Ambulance" />
                <div className=''>Please Call 999 for additional assistance</div>
            </div>
        </div>
    );
};

export default RedPatients;
