// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeScreen from './pages/HomeScreen';
import HospitalScreen from './pages/HospitalScreen';
import ContinuePage from './pages/Continue';
import PresentationForm from './pages/Presentation';
import Confirmation from './pages/Confirmation';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App container mx-auto p-4">
        <Routes>
          {/* <Route path="/" element={<HomeScreen />} /> */}
          <Route path="/HospitalScreen" element={<HospitalScreen />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/" element={<PresentationForm />} />
          <Route path="/continue" element={<ContinuePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
