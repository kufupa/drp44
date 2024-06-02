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
  console.log(diagnosis)
  const firstQuestion: Question = firstButton(diagnosis);

  const handleClick = () => {
    // Pass arguments as an object
    navigate('/FlowChart', { state: { patientProblem} });
  };

  return (
    <div className='textBlue backgroundPale textBlue flex flex-col fixed inset-0 items-center justify-center'>
      <BackButton />
      <div className='textClickBlue text-3xl font-bold top-10 my-5'>Do you fit into this category?</div>
      <div className='md:top-32 top-40 my-5'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#3587b3" className="size-32">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
        </svg>
      </div>
      <div className='text-3xl bg-blue-400 text-white px-10 py-10 rounded-2xl md:top-[340px] my-5'>{diagnosis.toString()}</div>
      
      <button className='bgClickBlue text-2xl text-white rounded-full py-4 px-20 my-4' onClick={handleClick}>Yes</button>
      <button className='textClickBlue text-2xl rounded-full py-3 px-10 border-4 border-blue-200' onClick={() => navigate(-1)}>No</button>
 
    </div>
  );
};

export default Confirmation;
