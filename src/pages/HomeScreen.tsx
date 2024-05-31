// @ts-nocheck

import React from 'react';
import homeScreenImage from "../components/HomeImage.jpeg"

const HomeScreen: React.FC = () => {
  return (
    <div className='fixed inset-0 backgroundPale text-white flex flex-col items-center justify-center'>
      <div className='text-5xl textClickBlue font-bold max-w-md'>Welcome to quickER</div>
      <img src={homeScreenImage} alt="Image" className='h-96'/>
      <div className='px-4'>Patient</div>
      <div>Hospital</div>
    </div>
  );
};

export default HomeScreen;
