import React, { useState } from 'react';
import { FlowChartInterface } from './FlowChartInterface';
import '../styles.css';
// @ts-ignore
import ClipboardIcon from '../components/ClipboardIcon.png'

const FlowChartQuestionaire: React.FC<FlowChartInterface> = ({ buttonsList, onNoneClick, onSubmitClick, whenClick }) => {
    const [selectedButtons, setSelectedButtons] = useState<string[]>([]);

    console.log(buttonsList)

    return (
        <div className='grid gird-row-4 backgroundPale pb-96'>
            {/* <div className='text-4xl row-span-1 pt-20'>Do you have any of these symptoms?</div> */}
            <div className='flex flex-row items-center justify-center textBlue mt-10' >
              <img src={ClipboardIcon} alt="" className='' />
              <div className='mt-4 text-4xl mb-5 text-black font-bold'>Click option for additional information</div>
            </div>
            <div className='text-xl row-span-1'>
                {buttonsList.map((buttonData, index) =>
                    <div className={`${selectedButtons.includes(buttonData) ? 'bgClickBlue' : 'bgBlue'} p-4 m-6 rounded-full text-white cursor-pointer`} 
                    onClick={() => whenClick(buttonData)}
                    onMouseLeave={() => {}} // Empty to avoid any default behavior
                    onTouchCancel={() => {}} // Empty to avoid any default behavior
                  >{buttonData.slice(0, buttonData.indexOf('-'))}</div>
                )}
            </div>
            <div
                className="row-span-1 flowChartNoneButton lg:mx-96 mx-32 md:mx-56 py-4 mt-6 mb-4 rounded-full text-white text-2xl font-medium cursor-pointer border-4 borderBlueConfirmation"
                onClick={onNoneClick} // Ensure this calls the correct function
            >
                No
            </div>
            <div className='row-span-1 flowChartSubmitButton lg:mx-96 mx-32 md:mx-56 py-4 my-4 rounded-full text-white text-2xl font-medium cursor-pointer' 
                onClick={onSubmitClick}>Yes</div>
        </div>
    );
};

export default FlowChartQuestionaire;