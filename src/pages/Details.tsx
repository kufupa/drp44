import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InitialPage: React.FC = () => {
  const [age, setAge] = useState('');
  const [sex, setSex] = useState(''); // Use 'male' or 'female'
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/PresentationForm', { state: { age, sex } });
  };

  return (
    <div className="fixed inset-0 backgroundPale flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-8">
        <h1 className="text-5xl font-bold mb-6 text-center textClickBlue">Enter Details</h1>
        <div className="mb-4">
          <label className="block textClickBlue text-sm font-bold mb-2" htmlFor="age">Age</label>
          <input
            type="text"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded bg-gray-200"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block textClickBlue text-sm font-bold mb-2" htmlFor="sex">Sex at Birth</label>
          <select
            id="sex"
            value={sex}
            onChange={(e) => setSex(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded bg-gray-200"
            required
          >
            <option className="block textClickBlue text-sm font-bold mb-2" value="" disabled>Select sex</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="p-4 bg-gray-200 rounded mb-4 text-center textClickBlue">
          <p className="text-sm">We will not store this information. If you feel uncomfortable giving this information please call 111 to talk to a Nurse.</p>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="bgClickBlue text-white text-xl rounded-full py-2 px-4">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default InitialPage;
