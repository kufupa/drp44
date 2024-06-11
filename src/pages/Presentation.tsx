import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from "../backend/db";
import { collection, addDoc } from "firebase/firestore";
import BackButton from '../components/BackButton';

const PresentationForm: React.FC = () => {
  const [transcript, setTranscript] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isListening, setIsListening] = useState<boolean>(false);

  let recognition: any;

  const handleRecording = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

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

    // Play a beep sound on start
    const beepStart = new Audio('/beep.mp3'); // Replace 'beep.mp3' with the actual path to your beep sound file
    beepStart.play();

    recognition.start();
    setIsListening(true);
  };

  const stopListening = () => {
    if (recognition) {
      // Play a beep sound on start
      const beepStop = new Audio('/beep.mp3'); // Replace 'beep.mp3' with the actual path to your beep sound file
      beepStop.play();

      recognition.stop();
      setIsListening(false);
    }
  };

  const [patientProblem, setPatientProblem] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

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
            <button 
              onClick={handleRecording} 
              disabled={isListening} 
              className={`p-4 ${isListening ? 'recording' : ''}`}
            >
              {isListening ? 'Stop Recording' : 'Start Recording'}
              {isListening && <span className="recording-dot"></span>}
            </button>
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
