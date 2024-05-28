// src/App.tsx
import React from 'react';
import './App.css';
import HomeScreen from './pages/HomeScreen';

const App: React.FC = () => {
  return (
    <div className="App container mx-auto p-4">
      <HomeScreen />
    </div>
  );
}

export default App;
