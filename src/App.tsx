// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HospitalScreen from './pages/HospitalScreen';
import PresentationForm from './pages/Presentation';
import Confirmation from './pages/Confirmation';
import FlowChart from './pages/FlowChart';
import RedPatients from './pages/RedPatients';
import ErrorPage from './pages/Error';
import RegisterHospital from './pages/RegisterHospital';
import SuccessfulHospitalRegistration from './pages/SuccessfulHospitalRegistration';
import HomeScreen from './pages/HomeScreen';
import InfoPage from './pages/Info';
import DisplayMaps from './pages/DisplayMaps';
import SpeechRecognitionComponent from './components/Dictation';
import { UserProvider } from './components/UserContext';
import InitialPage from './pages/Details';
import { NoneOfTheAbovePage } from './pages/NoneOfTheAbove';
import { OneOneOnePage } from './pages/One';
import DisplayMapsP from './pages/DisplayMapsP';

const App: React.FC = () => {
  return (
    <div className='backgroundPale'>
      <UserProvider>
        <Router>
          <div className="App container mx-auto p-4">
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/111" element={<OneOneOnePage />} />
              <Route path="/details" element={<InitialPage />} />
              <Route path="/NoneOfTheAbove" element={<NoneOfTheAbovePage />} />
              <Route path="/PresentationForm" element={<PresentationForm />} />
              <Route path="/HospitalScreen" element={<HospitalScreen />} />
              <Route path="/FlowChart" element={<FlowChart />} />
              <Route path="/Presentation" element={<PresentationForm />} />
              <Route path="/Confirmation" element={<Confirmation />} />
              <Route path="/RedPatient" element={<RedPatients />} />
              <Route path="/Error" element={<ErrorPage />} />
              <Route path="/RegisterHospital" element={<RegisterHospital />} />
              <Route path="/SuccessfulHospitalRegistration" element={<SuccessfulHospitalRegistration />} />
              <Route path="/unique-page/:buttonData" Component={InfoPage} />
              <Route path="*" element={<HomeScreen />} />
              <Route path="/DisplayMaps" element={<DisplayMaps />} />
              <Route path="/DisplayMapsP" element={<DisplayMapsP />} />
            </Routes>
          </div>
        </Router>  
      </UserProvider>
    </div>
  );
}

export default App;