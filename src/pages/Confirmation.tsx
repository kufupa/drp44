import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { firstButton, selectFlowchart } from '../utils/select_flowchart';
import { Question } from '../utils/question';

const Confirmation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const patientProblem: string = location.state?.patientProblem || '';
  console.log("Input string was:" + patientProblem);
  const presentation = selectFlowchart(patientProblem);
  console.log(presentation)
  const firstQuestion: Question = firstButton(presentation);

  const handleClick = () => {
    // Pass arguments as an object
    navigate('/FlowChart', { state: { patientProblem} });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">Confirm Your Condition Please</h1>
        <p className="text-center mb-4">We have diagnosed you as</p>
        <p className="text-3xl font-bold text-center mb-8">{presentation.toString()}</p>
        <div className="flex justify-between">
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick = { handleClick }
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
