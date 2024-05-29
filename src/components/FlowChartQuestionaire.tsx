import React from 'react';
import { FlowChartInterface } from './FlowChartInterface';
import '../styles.css';

const FlowChartQuestionaire: React.FC<FlowChartInterface> = ({ buttonsList }) => {
    return (
        <div className='grid gird-row-4'>
            <div className='text-4xl row-span-1 pt-20'>What symptoms do you have?</div>
            <div className='text-xl row-span-1 pt-10'>
                {buttonsList.map((buttonData, index) =>
                    <div className='flowChartButton p-4 m-6 rounded-full text-white'>{buttonData}</div>
                )}
            </div>
            <div className='row-span-1 flowChartNoneButton lg:mx-96 mx-40 py-4 mt-6 mb-4 rounded-full text-white text-2xl font-medium'>None</div>
            <div className='row-span-1 flowChartSubmitButton lg:mx-96 mx-40 py-4 my-4 rounded-full text-white text-2xl font-medium'>Submit</div>
        </div>
    );
};

export default FlowChartQuestionaire;
