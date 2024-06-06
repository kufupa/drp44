import React from 'react';

const Dictation: React.FC = () => {
    const startDictation = () => {
        if ('SpeechRecognition' in window) {
            const recognition = new window.SpeechRecognition();
            recognition.lang = 'en-US';

            recognition.onresult = (event: SpeechRecognitionEvent) => {
                const transcript = event.results[0][0].transcript;
                console.log('Transcript:', transcript);
            };

            recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
                console.error('Speech recognition error:', event.error);
            };

            recognition.start();
        } else {
            console.error('SpeechRecognition is not supported in this browser.');
            alert('Sorry, speech recognition is not supported in your browser.');
        }
    };

    return (
        <div>
            <button onClick={startDictation}>Start Dictation</button>
        </div>
    );
};

export default Dictation;
