import React, { useEffect, useState } from 'react';
import FlowChartQuestionaire from '../components/FlowChartQuestionaire';
import { firstButton, nextButtons, selectFlowchart } from '../utils/select_flowchart';
import { useLocation, useNavigate } from 'react-router-dom';
import { Question } from '../utils/question';
import { CategoryEnum } from '../utils/category.enum';
import BackButton from '../components/BackButton';

const HOLD_THRESHOLD = 500; // 500 milliseconds for distinguishing between click and hold


const FlowChart: React.FC = () => {
    const location = useLocation();
    const presentation: string = location.state?.patientProblem || null;
    const [button, setButton] = useState(presentation != null ? firstButton(selectFlowchart(presentation)) : null);
    const [displayButtons, setDisplayButtons] = useState(button != null ? button.symptoms : []);
    const [holdTimer, setHoldTimer] = useState<NodeJS.Timeout | null>(null);
    const [isHeld, setIsHeld] = useState(false); // To track if the button was held

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

    const handleMouseDown = (buttonData: string) => {
        const timer = setTimeout(() => {
          setIsHeld(true);
          navigate(`/unique-page/${buttonData}`, { state: { displayButtons } });
        }, HOLD_THRESHOLD);
        setHoldTimer(timer);
      };
    
      const handleMouseUp = () => {
        if (holdTimer) {
          clearTimeout(holdTimer);
          setHoldTimer(null);
          if (!isHeld) {
            console.log('Button clicked');
            // Handle click action here if needed
          } else {
            setIsHeld(false); // Reset the hold state
          }
        }
      };
    
      useEffect(() => {
        if (location.state?.displayButtons) {
          setDisplayButtons(location.state.displayButtons);
        }
      }, [location.state]);

    return (
        <div>
            <BackButton />
            <div className='text-6xl'>Additional symptoms</div>
            <div>
                <div>
                    <FlowChartQuestionaire buttonsList={displayButtons} onNoneClick={handleNoneClick} onSubmitClick={handleSubmitClick}  onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} />
                </div>
            </div>
        </div>
    );
};

export default FlowChart;
