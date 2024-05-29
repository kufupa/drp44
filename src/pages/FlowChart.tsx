import React, { useState } from 'react';
import FlowChartQuestionaire from '../components/FlowChartQuestionaire';
import { Question } from '../utils/question';
import { nextButtons } from '../utils/select_flowchart';

const FlowChart: React.FC = () => {
    // To add later
    const buttonsDisplayList: string[] = ["First prompt", "Second Prompt"];
    // const firstSetOfButtons: Question = nextButtons();

    return (
        <div>
            <div className='text-6xl'>Flowchart</div>
            <div>
                <div>
                    <FlowChartQuestionaire buttonsList={buttonsDisplayList} />
                </div>
            </div>
        </div>
    );
};

export default FlowChart;
