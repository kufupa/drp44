import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PresentationForm: React.FC = () => {
  const [presentations, setPresentations] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/confirmation', { state: { presentations } });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-6 text-center">Presentations</h1>
        <div className="mb-4">
          <textarea
            className="w-full h-32 p-2 border border-gray-300 rounded"
            placeholder="Enter your presentations..."
            value={presentations}
            onChange={(e) => setPresentations(e.target.value)}
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PresentationForm;
