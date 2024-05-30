// @ts-nocheck

import React from 'react';
import ambulance from "../components/Ambulance.jpeg"

const RedPatients: React.FC = () => {
    return (
        <div className="fixed inset-0 ambulaneBGColor text-white flex flex-col items-center justify-center">
            <div className="text-5xl mb-20 max-w-2xl">You have been diagnosed as a Critical Patient</div>
            <img src={ambulance} alt="Ambulance" className="mb-4" />
            <div className="text-2xl border rounded-3xl max-w-80 p-10 mt-24">
                Please Call <span className="text-red-500">999</span> for additional assistance
            </div>
        </div>
    );
};

export default RedPatients;
