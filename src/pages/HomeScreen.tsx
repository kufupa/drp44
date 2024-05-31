// @ts-nocheck

import React from 'react';
import homeScreenImage from "../components/HomeImage.jpeg"
import {useNavigate} from 'react-router-dom';

const HomeScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleClickPatient = () => {
    // Pass arguments as an object
    navigate('/PresentationForm');
  };

  const handleClickHospital = () => {
    // Pass arguments as an object
    navigate('/RegisterHospital');
  };

  return (
    <div className='fixed inset-0 backgroundPale text-white flex flex-col items-center justify-center'>
      <div className='text-5xl textClickBlue font-bold max-w-md'>Welcome to quickER</div>
      <img src={homeScreenImage} alt="Image" className='h-96'/>
      <div className='bgClickBlue text-white rounded-full py-4 px-20 mt-10' onClick={handleClickPatient}>Patient</div>
      <div className='bgClickBlue text-white rounded-full py-4 px-20 mt-10' onClick={handleClickHospital}>Hospital</div>
    </div>
  );
};

export default HomeScreen;
