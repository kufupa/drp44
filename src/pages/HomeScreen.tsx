// @ts-nocheck

import React from 'react';
import homeScreenImage from "../components/HomeImage.jpeg"
import {useNavigate} from 'react-router-dom';

const HomeScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleClickPatient = () => {
    // Pass arguments as an object
    navigate('/details');
  };

  const handleClickHospital = () => {
    // Pass arguments as an object
    navigate('/RegisterHospital');
  };

  return (
    <div className='fixed inset-0 backgroundPale text-white flex flex-col items-center justify-center'>
      <div className='text-5xl textClickBlue font-bold max-w-md'>Welcome to quickER!</div>
      <img src={homeScreenImage} alt="Image" className='h-96'/>
      <button className='bgBlue text-white rounded-full py-6 px-20 mt-2 font-bold ' style={{fontSize: '24px'}} onClick={handleClickPatient}>Patient</button>
      <button className='textBlue font-bold rounded-full py-3 px-10 mt-8 border-4 border-blue-200' onClick={handleClickHospital}>Hospital</button>
    </div>
  );
};

export default HomeScreen;
