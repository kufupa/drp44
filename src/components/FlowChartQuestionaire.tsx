import React, { useState } from 'react';
import { FlowChartInterface } from './FlowChartInterface';
import '../styles.css';
// @ts-ignore
import ClipboardIcon from '../components/ClipboardIcon.png'

const FlowChartQuestionaire: React.FC<FlowChartInterface> = ({ buttonsList, onNoneClick, onSubmitClick, onMouseDown, onMouseUp }) => {
    const [selectedButtons, setSelectedButtons] = useState<string[]>([]);
    console.log("ButtonsList: " + buttonsList)
    const handleClick = (buttonData: string) => {
        if (selectedButtons.includes(buttonData)) {
            // If the button is already selected, remove it from the selectedButtons array
            setSelectedButtons(selectedButtons.filter(btn => btn !== buttonData));
        } else {
            // If the button is not selected, add it to the selectedButtons array
            setSelectedButtons([...selectedButtons, buttonData]);
        }
    };

    

    return (
        <div className='grid gird-row-4'>
            <div className='text-4xl row-span-1 pt-20'>Do you have any of these symptoms?</div>
            <div className='flex flex-row items-center justify-center textBlue' >
              <img src={ClipboardIcon} alt="" className='' />
              <div className='mt-8 text-lg'>Hold options for additional information</div>
            </div>
            <div className='text-xl row-span-1 pt-10'>
                {buttonsList.map((buttonData, index) =>
                    <div className={`${selectedButtons.includes(buttonData) ? 'bgClickBlue' : 'bgBlue'} p-4 m-6 rounded-full text-white cursor-pointer`} 
                    onClick={() => handleClick(buttonData)}
                    onMouseDown={() => onMouseDown(buttonData)}
                    onMouseUp={() => onMouseUp()} // Empty to avoid any default behavior
                    onMouseLeave={() => {}} // Empty to avoid any default behavior
                    onTouchStart={() => onMouseDown(buttonData)} // For touch devices
                    onTouchEnd={() => onMouseUp()} // Empty to avoid any default behavior
                    onTouchCancel={() => {}} // Empty to avoid any default behavior
                  >{buttonData}</div>
                )}
            </div>
            <div
                className="row-span-1 flowChartNoneButton lg:mx-96 mx-32 md:mx-56 py-4 mt-6 mb-4 rounded-full text-white text-2xl font-medium cursor-pointer"
                onClick={onNoneClick} // Ensure this calls the correct function
            >
                None
            </div>
            <div className='row-span-1 flowChartSubmitButton lg:mx-96 mx-32 md:mx-56 py-4 my-4 rounded-full text-white text-2xl font-medium cursor-pointer' 
                onClick={onSubmitClick}>Submit</div>
        </div>
    );
};

export default FlowChartQuestionaire;
