import React from 'react';

interface HospitalDivProps {
  hospitalName: string;
  waitTime: string;
  distance: string;
}

const HospitalDiv: React.FC<HospitalDivProps> = ({hospitalName, waitTime, distance}) => {
  return (
    <div className="p-4 border rounded shadow-md">
      <h2 className="text-2xl font-bold mb-2">{hospitalName}</h2>
      <div className=''>Wait Time: {waitTime}</div>
      <div className=''>Distance: {distance}</div>
    </div>
  );
};

export default HospitalDiv;
