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

const App: React.FC = () => {
  return (
    <div className='backgroundPale'>
      <Router>
        <div className="App container mx-auto p-4">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
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
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;