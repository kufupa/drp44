import React, { useState } from 'react';

const SpeechRecognitionComponent: React.FC = () => {
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
    }
  };

  return (
    <div>
      <button onClick={startListening} disabled={isListening}>Start Listening</button>
      <button onClick={stopListening}>Stop Listening</button>
      {error && <p>Error: {error}</p>}
      {transcript && <p>Transcript: {transcript}</p>}
    </div>
  );
};

export default SpeechRecognitionComponent;
