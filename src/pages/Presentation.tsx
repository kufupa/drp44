import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from "../backend/db" ;
import { collection, addDoc} from "firebase/firestore";


const PresentationForm: React.FC = () => {
  const [patientProblem, setPatientProblem] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const inputId =  Math.floor(Math.random() * (10000));
    // Add the new hospital to Firestore
    addDoc(collection(db, 'inputs'), {
      inputId: inputId,
      problem: patientProblem
    })
    .then(() => {
      // Navigate to the confirmation page
      console.log(patientProblem);
      navigate('/confirmation', { state: { patientProblem } });
    })
    .catch((error) => {
      console.error('Error adding hospital:', error);
    });
  
  };
  

  return (
    <div className="fixed inset-0 backgroundPale flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-8">
        <h1 className="text-6xl font-bold mb-6 text-center textBlue">Describe your problem</h1>
        <div className='relative'>
          <div className='relative left-20'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#3587b3" className="size-32">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
            </svg>
          </div>
          <div className='absolute top-0 left-48'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#3587b3" className="size-32">
              <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
            </svg>

          </div>
        </div>
        <div className="mb-4">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
            </svg>
            <div className="textBlue ml-2">Best to answer in 10-20 words</div>
          </div>

          <textarea
            className="w-full h-32 p-2 border border-gray-300 rounded"
            value={patientProblem}
            onChange={(e) => setPatientProblem(e.target.value)}
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PresentationForm;
