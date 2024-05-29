import React, { useState } from 'react';
import FlowChartQuestionaire from '../components/FlowChartQuestionaire';
import { firstButton, nextButtons, selectFlowchart } from '../utils/select_flowchart';
import { useLocation, useNavigate } from 'react-router-dom';
import { Question } from '../utils/question';
import { CategoryEnum } from '../utils/category.enum';

const FlowChart: React.FC = () => {
    const location = useLocation();
    const presentation: string = location.state?.presentations || null;
    const [button, setButton] = useState(presentation != null ? firstButton(selectFlowchart(presentation)) : null);
    const [displayButtons, setDisplayButtons] = useState(button != null ? button.symptoms : []);

    const handleNoneClick = () => {
        // TODO
        // Fix clicking None twice for the first case
        console.log("None clicked in FlowChart");
        const question: Question = {
            category: button != null ? button.category : CategoryEnum.UNDEFINED,
            symptoms: [],
            presentation: selectFlowchart(presentation)
        }
        setButton(nextButtons(question))
        setDisplayButtons(button != null ? button.symptoms : [])
    };

    const handleSubmitClick = () => {
        console.log("Submit clicked in FlowChart");
        // Add your logic here
        // Add code to navigate to next which will display your category ... BLACK, RED, ...
        // use navigate
    };

    return (
        <div>
            <div className='text-6xl'>Flowchart</div>
            <div>
                <div>
                    <FlowChartQuestionaire buttonsList={displayButtons} onNoneClick={handleNoneClick} onSubmitClick={handleSubmitClick}  />
                </div>
            </div>
        </div>
    );
};

export default FlowChart;
