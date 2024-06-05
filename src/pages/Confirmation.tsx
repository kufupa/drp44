import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { firstButton, selectFlowchart } from '../utils/select_flowchart';
import { Question } from '../utils/question';
import BackButton from '../components/BackButton';

const Confirmation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const patientProblem: string = location.state?.patientProblem || '';
  console.log("Input string was:" + patientProblem);
  const diagnosis = selectFlowchart(patientProblem);
  console.log(diagnosis.image)
  const firstQuestion: Question = firstButton(diagnosis);

  const handleClick = () => {
    // Pass arguments as an object
    navigate('/FlowChart', { state: { patientProblem} });
  };

  return (
    <div className='backgroundPale items-center justify-center min-h-screen flex flex-col textClickBlue'>
      <div className='textClickBlue text-5xl max-w-xl font-bold mb-4 -mt-2'>Do you fit into this category?</div>
      <div className='md:top-32 top-40 my-3'>
        <img src={diagnosis.image()} alt="" className='w-64'/>
      </div>
      <div className='text-3xl bgLightShadow px-10 py-10 rounded-3xl md:top-[340px] my-5 border-4 borderBlueConfirmation font-bold'>{diagnosis.toString()}</div>
      <button className='bgClickBlue text-2xl text-white rounded-full py-6 px-32 mb-6 mt-10' onClick={handleClick}>Yes</button>
      <button className='borderBlueConfirmation textClickBlue text-2xl rounded-full py-3 px-20 border-4' onClick={() => navigate(-1)}>No</button>
    </div>
  );
};

export default Confirmation;
