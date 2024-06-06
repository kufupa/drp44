interface Window {
    SpeechRecognition: any;
}

interface SpeechRecognitionEvent extends Event {
    readonly resultIndex: number;
    readonly results: SpeechRecognitionResultList;
}

interface SpeechRecognitionErrorEvent extends SpeechRecognitionEvent {
    readonly error: SpeechRecognitionError;
}
