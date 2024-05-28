// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeScreen from './pages/HomeScreen';
import HospitalScreen from './pages/HospitalScreen';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App container mx-auto p-4">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/HospitalScreen" element={<HospitalScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
