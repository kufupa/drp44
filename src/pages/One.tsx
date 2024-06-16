import React from 'react';
// @ts-ignore
import ambulance from "../components/imgs/AmbulanceImage.png"

export const OneOneOnePage: React.FC = () => {
    return (
        <div className="backgroundPale items-center justify-center min-h-screen flex flex-col">
            <div className="text-5xl mb-20 max-w-xl textClickBlue font-black tracking-wider">Sorry we could not help you</div>
            <img src={ambulance} alt="Ambulance" className="mb-4 w-64" />
            <div className="textBlue text-3xl border-4 border-blue-300 rounded-3xl max-w-lg p-10 mt-24 font-bold">
                Please Call <span className="text-red-500">111</span> for additional assistance
            </div>
        </div>
    );
}