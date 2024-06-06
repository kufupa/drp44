// TODO
// Implement calling google maps
// Tick for only 1 hospital

import React, { useState } from 'react';
import { HospitalDetails } from './HospitalDetails';
// @ts-ignore
import LocationIcon from './LocationIcon.png'

const HospitalDiv: React.FC<HospitalDetails> = ({ hospitalName, waitTime, distance, directions, ticked }) => {
    const [isTicked, setIsTicked] = useState(ticked);

    const handleToggleTicked = () => {
        if (ticked == false) {
            setIsTicked(true)
        }
    };

    const handleDirectionsClick = () => {
        window.open(`https://www.google.com/maps?q=${directions}`, '_blank');
    };

    return (
        // Maybe have different views for different screens
        <div className="min-h-24 relative py-4 pr-20 md:pr-32 pl-4 border shadow-md m-4 bgBlue flex flex-col gap-4 rounded-3xl text-white">
            {/* Hospital Name */}
            <div className="">
                <h2 className="text-2xl font-semibold max-w-fit">{hospitalName}</h2>
            </div>

            {/* Time */}
            <div className="text-lg font-normal -mt-3 ml-0 flex pb-1">
                <div className=''>
                    <div>
                        {waitTime < 1 ? `Wait Time: ${waitTime * 60} Mins` : `Wait Time: ${waitTime} Hours`}
                    </div>
                    <div className='-mt-1.5'>
                        {`Distance: ${distance} Miles`}
                    </div>
                </div>
            </div>

            {/* Direction and Inform Hospital */}
            <div className="absolute bottom-[10px] right-[16px] cursor-pointer" onClick={handleDirectionsClick}>
                <img src={LocationIcon} alt="" className='w-10 rounded-full' />
            </div>
            {/* <div className="relative row-span-1 flex items-center justify-center"> */}
            {/* <div className="absolute text-sm right-10 bottom-0 cursor-pointer hover:text-lg hover:-bottom-1"
                    onClick={handleDirectionsClick}>Directions</div> */}
            {/* <div className="absolute cursor-pointer top-0" onClick={handleToggleTicked}>
                    <div className="w-8 h-8 rounded-full bg-white">
                        {isTicked ? (
                            // Render green tick if ticked is true
                            <div className="w-8 h-8 rounded-full bg-green-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="textBlue"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            </div>
                        ) : (
                            // Render plus sign if ticked is false
                            <div className="absolute z-10 rounded-lg text-4xl left-1.5 -top-1.5 textBlue font-extralight">+</div>
                        )}
                    </div>
                </div> */}
            {/* </div> */}
        </div>
    );
};

export default HospitalDiv;
