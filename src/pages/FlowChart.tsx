import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { firstButton, getFromMap, nextButtons } from '../utils/select_flowchart';
import { Question } from '../utils/question';
import BackButton from '../components/BackButton';
import { Presentation } from '../utils/presentation'; // Ensure this import is correct
import { CategoryEnum } from '../utils/category.enum';
import FlowChartQuestionaire from '../components/FlowChartQuestionaire';
import { fireEvent } from '@testing-library/react';

const FlowChart: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const str = location.state?.str;
  const diagnosis: Presentation = getFromMap(str) 
  const firstQuestion =  useState(str != null ? firstButton(diagnosis) : null);


  const [button, setButton] = useState(str != null ? firstButton(diagnosis) : null);
  const [displayButtons, setDisplayButtons] = useState(button != null ? button.symptoms : []);
  const [holdTimer, setHoldTimer] = useState<NodeJS.Timeout | null>(null);
  const [isHeld, setIsHeld] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleNoneClick = () => {
    console.log("None clicked in FlowChart");
    console.log(button);

    if (!diagnosis) {
      setError('Diagnosis is not available');
      return;
    }

    const question: Question = {
      category: button != null ? button.category : CategoryEnum.UNDEFINED,
      symptoms: [],
      presentation: diagnosis,
    };

    setButton(nextButtons(question));
    console.log(question);
    if (button != null) {
      if (button.category !== CategoryEnum.BLACK) {
        setDisplayButtons(nextButtons(question).symptoms);
      } else {
        // Lowest category
        navigate('/HospitalScreen', { state: { button } });
      }
    } else {
      setDisplayButtons([]);
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
          console.log("transferring to unique page: " + buttonData);
          navigate(`/unique-page/${buttonData}`, { state: { displayButtons } });
        }, 500);
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
