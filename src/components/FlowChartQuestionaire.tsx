import React from 'react';
import { FlowChartInterface } from './FlowChartInterface';

const FlowChartQuestionaire: React.FC<FlowChartInterface> = ({ buttonsList }) => {
    return (
        <div className='grid gird-row-3'>
            <div className='text-4xl row-span-1 pt-20'>What symptoms do you have?</div>
            <div className='text-xl row-span-1 pt-10'>
                {buttonsList.map((buttonData, index) => 
                    <div className='bg-cyan-900 p-4 m-6 rounded-full text-white'>{buttonData}</div>
                )}
            </div>
            <div className='row-span-1 bg-blue-300 py-10 m-6 rounded-full text-white text-2xl font-medium'>None</div>
        </div>
    );
};

export default FlowChartQuestionaire;
