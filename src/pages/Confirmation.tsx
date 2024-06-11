import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { firstButton, selectFlowchart } from '../utils/select_flowchart';
import { Question } from '../utils/question';
import BackButton from '../components/BackButton';
import { Presentation } from '../utils/presentation';

const Confirmation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [diagnosis, setDiagnosis] = useState<Presentation | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const patientProblem: string = location.state?.patientProblem || '';
  console.log("Input string was:" + patientProblem);

  useEffect(() => {
    const fetchDiagnosis = async () => {
      try {
        console.log("Input string was:" + patientProblem);
        const result = await selectFlowchart(patientProblem);
        setDiagnosis(result);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unexpected error occurred');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchDiagnosis();
  }, [patientProblem]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!diagnosis) {
    return <div>No diagnosis available</div>;
  }

  console.log("PRESENATION PASSED TO FIRST BUTTON IS: " + diagnosis.toString());

  const firstQuestion: Question = firstButton(diagnosis);

  console.log("PRESENATION PASSED FROM FIRST BUTTON IS: " + firstQuestion.presentation.toString());

  const handleClick = () => {
    // Pass arguments as an object
    console.log("PRESENATION PASSED TO NAVIGATE IS: " + diagnosis.toString());
    const str = diagnosis.toString()

    navigate('/FlowChart', { state: { str } });
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
