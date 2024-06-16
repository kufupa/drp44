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
  let diagnosis: Presentation = getFromMap(str)
  console.log(str)

  const question: Question | null = location.state?.question;

  console.log(location.state?.link)

  const presName: string | undefined = location.state.presName
  const [button, setButton] = useState<Question | null>(location.state?.link == null ? (str != null ? firstButton(diagnosis) : null) : location.state?.link);
  const [displayButtons, setDisplayButtons] = useState(button != null ? button.symptoms : []);
  const [holdTimer, setHoldTimer] = useState<NodeJS.Timeout | null>(null);
  const [isHeld, setIsHeld] = useState(false);
  const [error, setError] = useState<string | null>(null);

  console.log(button)
  console.log(presName)
  if (presName) {
    console.log(getFromMap(presName))
  }

  if (button?.presentation == undefined && presName != undefined) {
    const newButton = button!
    newButton.presentation = getFromMap(presName)
    setButton(newButton)
  }

  if (diagnosis == undefined && presName != undefined) {
    diagnosis = getFromMap(presName)
  }

  const handleNoneClick = () => {
    console.log("None clicked in FlowChart");
    console.log(button);
    console.log(diagnosis)

    if (!diagnosis) {
      setError('Diagnosis is not available');
      console.log("Unable to diagnose")
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
  };

  const handleClick = (buttonData: string) => {
    console.log(button)
    console.log(diagnosis)
    const presName: string = diagnosis.getClassName()
    navigate(`/unique-page/${buttonData}`, { state: { displayButtons, button, diagnosis, presName } });
  };

  useEffect(() => {
    if (location.state?.displayButtons) {
      setDisplayButtons(location.state.displayButtons);
    }
  }, [location.state]);

  return (
    <div>
      <BackButton />
      <div className='text-6xl'>Do you have any of these symptoms?</div>
      <div>
        <div>
          <FlowChartQuestionaire buttonsList={displayButtons} onNoneClick={handleNoneClick} onSubmitClick={handleSubmitClick} whenClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default FlowChart;
