import React, { useState } from 'react';
import FlowChartQuestionaire from '../components/FlowChartQuestionaire';
import { firstButton, nextButtons, selectFlowchart } from '../utils/select_flowchart';
import { useLocation, useNavigate } from 'react-router-dom';

const FlowChart: React.FC = () => {
    // To add later
    const location = useLocation();
    const presentation: string = location.state?.patientProblem || null;
    const displayButtons: string[] = presentation != null ? firstButton(selectFlowchart(presentation)).symptoms : [];

    return (
        <div>
            <div className='text-6xl'>Flowchart</div>
            <div>
                <div>
                    <FlowChartQuestionaire buttonsList={displayButtons} />
                </div>
            </div>
        </div>
    );
};

export default FlowChart;
