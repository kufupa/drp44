// TODO
// Implement calling google maps and turn + to tick on click

import React, { useState } from 'react';
import { HospitalDetails } from './HospitalDetails';

const HospitalDiv: React.FC<HospitalDetails> = ({ hospitalName, waitTime, distance, directions, ticked }) => {
    const [isTicked, setIsTicked] = useState(ticked);

    const handleToggleTicked = () => {
        if (ticked == false) {
            setIsTicked(true)
        }
    };

    return (
        // Maybe have different views for different screens
        <div className="min-h-24 relative p-4 border rounded shadow-md m-4 hover:bg-red-50 grid grid-cols-3 gap-4">
            {/* Hospital Name */}
            <div className="col-span-1 flex items-center justify-center">
                <h2 className="text-2xl font-bold mb-2 max-w-96">{hospitalName}</h2>
            </div>

            {/* Time */}
            <div className="relative col-span-1 flex items-center justify-center text-lg">
                <div className='absolute right-0'>
                    <div>
                        {waitTime < 1 ? `Wait Time: ${waitTime * 60} Mins` : `Wait Time: ${waitTime} Hours`}
                    </div>

                    {distance < 1 ? `Distance: ${distance * 60} Mins` : `Distance: ${distance} Hours`}
                </div>
            </div>

            {/* Direction and Inform Hospital */}
            <div className="relative col-span-1 flex items-center justify-center">
                <div className="absolute text-sm right-10 bottom-0 cursor-pointer">Directions</div>
                <div className="absolute cursor-pointer right-14 top-0" onClick={handleToggleTicked}>
                    <div className="w-8 h-8 rounded-full bg-green-100 hover:bg-green-300">
                        {isTicked ? (
                            // Render green tick if ticked is true
                            <div className="w-8 h-8 rounded-full bg-green-100 hover:bg-green-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            </div>
                        ) : (
                            // Render plus sign if ticked is false
                            <div className="absolute z-10 rounded-lg text-2xl left-2 -top-0.5">+</div>
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HospitalDiv;
