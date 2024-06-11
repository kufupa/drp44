import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from "../backend/db";
import { collection, addDoc } from "firebase/firestore";
import BackButton from '../components/BackButton';
import { HospitalDetails } from '../components/HospitalDetails';
import { addNewHospitalDetails } from '../backend/hospitals';

const PresentationForm: React.FC = () => {
  const [transcript, setTranscript] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isListening, setIsListening] = useState<boolean>(false);

  let recognition: any;

  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setError('SpeechRecognition is not supported in this browser.');
      return;
    }

    recognition = new SpeechRecognition();

    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event: any) => {
      const last = event.results.length - 1;
      const text = event.results[last][0].transcript;
      setTranscript(text);
      setPatientProblem(text); // Update patientProblem with the transcript value
    };

    recognition.onerror = (event: any) => {
      setError(`Error occurred: ${event.error}`);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
    setIsListening(true);
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
      setIsListening(false);
    }
  };

  const [patientProblem, setPatientProblem] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const hospital1: HospitalDetails = {
      hospitalName: 'Charing Cross Hospital',
      waitTime: 7,
      distance: 2,
      directions: '51.48697601826863, -0.21951089239672142',
      ticked: false,
    }
    const hospital2: HospitalDetails = {
      hospitalName: 'Royal London Hospital',
      waitTime: 5,
      distance: 3,
      directions: '51.51885418944482, -0.05774435842324855',
      ticked: false,
    }
    const hospital3: HospitalDetails = {
      hospitalName: "Guy's Hospital",
      waitTime: 1,
      distance: 0.5,
      directions: '51.50392461109935, -0.08734215935546974',
      ticked: false,
    }
    const hospital4: HospitalDetails = {
      hospitalName: "St Thomas' Hospital",
      waitTime: 3,
      distance: 0.75,
      directions: '51.49921390992211, -0.11885373048485628',
      ticked: false,
    }
    const hospital5: HospitalDetails = {
      hospitalName: "King's College Hospital",
      waitTime: 1,
      distance: 3,
      directions: '51.4695394804474, -0.093888722197904',
      ticked: false,
    }
    
    
    async function addAllHospitalDetails(hospitals: HospitalDetails[]): Promise<void> {
      for (const hospital of hospitals) {
        await addNewHospitalDetails(hospital);
      }
    }
    
    addAllHospitalDetails([hospital1, hospital2, hospital3, hospital4, hospital5])

    if (!patientProblem) {
      setError('Please describe your problem.');
      return;
    }

    const inputId = Math.floor(Math.random() * (10000));
    addDoc(collection(db, 'inputs'), {
      inputId: inputId,
      problem: patientProblem // Use patientProblem here
    })
      .then(() => {
        navigate('/confirmation', { state: { patientProblem } });
      })
      .catch((error) => {
        console.error('Error adding hospital:', error);
      });
  };


  return (
    <div className="fixed inset-0 backgroundPale flex flex-col items-center justify-center">
      <BackButton />
      <form onSubmit={handleSubmit} className="w-full max-w-md p-8">
        <h1 className="text-5xl font-bold mb-6 text-center textClickBlue">Describe your problem</h1>
        <div className="mb-4">
          <div>
            <button onClick={startListening} disabled={isListening} className='p-4'>Start Listening</button>
            <button onClick={stopListening} className='p-4'>Stop Listening</button>
          </div>
          <textarea
            className="w-full h-32 p-2 border border-gray-300 rounded"
            value={patientProblem}
            onChange={(e) => setPatientProblem(e.target.value)}
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button type="submit" className='bgClickBlue text-white text-xl rounded-full py-4 px-20 my-2'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default PresentationForm;
