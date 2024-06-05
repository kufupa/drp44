// @ts-nocheck

import React from 'react';
import ambulance from "../components/AmbulanceImage.png"

const RedPatients: React.FC = () => {
    return (
        <div className="backgroundPale items-center justify-center min-h-screen flex flex-col">
            <div className="text-5xl mb-20 max-w-xl textClickBlue font-black tracking-wider">We think you are a Critical Patient</div>
            <img src={ambulance} alt="Ambulance" className="mb-4 w-64" />
            <div className="textBlue text-3xl border-4 border-blue-300 rounded-3xl max-w-lg p-10 mt-24 font-bold">
                Please Call <span className="text-red-500">999</span> for additional assistance
            </div>
        </div>
    );
};

export default RedPatients;
