// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HospitalScreen from './pages/HospitalScreen';
import PresentationForm from './pages/Presentation';
import Confirmation from './pages/Confirmation';
import FlowChart from './pages/FlowChart';
import { AbdominalPainAdultsHandler } from './utils/flowcharts/abdominal_pain_in_adults';

const App: React.FC = () => {
  const mockFlowChartPres = AbdominalPainAdultsHandler.getInstance();
  return (
    <Router>
      <div className="App container mx-auto p-4">
        <Routes>
          {/* <Route path="/" element={<HomeScreen />} /> */}
          <Route path="/HospitalScreen" element={<HospitalScreen />} />
          <Route path="/FlowChart" element={<FlowChart />} />
          <Route path="/Presentation" element={<PresentationForm />} />
          <Route path="/Confirmation" element={<Confirmation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;