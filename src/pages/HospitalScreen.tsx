import React from 'react';
import HospitalDiv from '../components/HospitalDiv';

interface HospitalDetails {
    hospitalName: string;
    waitTime: string;
    distance: string;
}

const HospitalScreen: React.FC = () => {
    // To get data from backend
    const hospital1: HospitalDetails = {
        hospitalName: 'Charing Cross Hospital',
        waitTime: '7 Hours',
        distance: '2 Hours'
    }
    const hospital2: HospitalDetails = {
        hospitalName: 'Royal London Hospital',
        waitTime: '5 Hours',
        distance: '3 Hours'
    }
    const hospital3: HospitalDetails = {
        hospitalName: "Guy's Hospital",
        waitTime: '1 Hours',
        distance: '30 Mins'
    }
    const hospitals: Array<HospitalDetails> = [hospital1, hospital2, hospital3];

  return (
    <div>
      <div className='text-3xl'>Hospital HomeScreen</div>
      {/* Div containing all Hospitals */}
      <div className=''>
        {/* Map through all hospitals */}
        {hospitals.map((hospital, index) => (
            <HospitalDiv hospitalName={hospital.hospitalName} waitTime={hospital.waitTime} distance={hospital.distance} />
        ))}
        
      </div>
    </div>
  );
};

export default HospitalScreen;
