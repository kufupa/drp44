import React, { useState } from 'react';
import { HospitalDetails } from './HospitalDetails';
// @ts-ignore
import LocationIcon from './LocationIcon.png'

const HospitalDiv: React.FC<HospitalDetails> = ({ hospitalName, waitTime, distance, directions, ticked, mapsFunc }) => {
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
    <div>
        <div className="min-h-24 relative py-4 pr-20 md:pr-32 pl-4 border shadow-md m-4 bgBlue flex flex-col gap-4 rounded-3xl text-white cursor-pointer"  onClick={() => mapsFunc && mapsFunc(hospitalName, directions)}>
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
            <div className="absolute bottom-[10px] right-[16px]">
                <img src={LocationIcon} alt="" className='w-10 rounded-full' />
            </div>
        </div>
    </div>
    );
};

export default HospitalDiv;
