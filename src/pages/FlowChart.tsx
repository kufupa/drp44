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
    const navigate = useNavigate();

    const handleNoneClick = () => {
        // TODO
        // Fix clicking None twice for the first case
        console.log("None clicked in FlowChart");
        console.log(button)
        const question: Question = {
            category: button != null ? button.category : CategoryEnum.UNDEFINED,
            // symptoms: button != null ? button?.symptoms : [""],
            symptoms: [],
            presentation: selectFlowchart(presentation)
        }
        setButton(nextButtons(question))
        console.log(button)
        console.log(nextButtons(question))
        if (button != null) {
            if (button.category != CategoryEnum.BLACK) {
                setDisplayButtons(nextButtons(question).symptoms)
            } else {
                // Lowest category
                navigate('/HospitalScreen', { state: { button } });
            }
        } else {
            setDisplayButtons([])
        }
    };

    const handleSubmitClick = () => {
        console.log("Submit clicked in FlowChart");
        console.log(button)
        if (button?.category == CategoryEnum.RED) {
            navigate('/RedPatient');
        } else {
            navigate('/HospitalScreen', { state: { button } });
        }
        // Need to submit button
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
