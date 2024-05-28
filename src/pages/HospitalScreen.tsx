import React from 'react';
import HospitalDiv from '../components/HospitalDiv';
import { HospitalDetails } from '../components/HospitalDetails';

const HospitalScreen: React.FC = () => {
    // To get data from backend
    const hospital1: HospitalDetails = {
        hospitalName: 'Charing Cross Hospital',
        waitTime: 7,
        distance: 2,
        directions: 'googleMapsLink'
    }
    const hospital2: HospitalDetails = {
        hospitalName: 'Royal London Hospital',
        waitTime: 5,
        distance: 3,
        directions: 'googleMapsLink'
    }
    const hospital3: HospitalDetails = {
        hospitalName: "Guy's Hospital",
        waitTime: 1,
        distance: 0.5,
        directions: 'googleMapsLink'
    }
    const hospital4: HospitalDetails = {
        hospitalName: "St Thomas' Hospital",
        waitTime: 3,
        distance: 0.75,
        directions: 'googleMapsLink'
    }
    const hospital5: HospitalDetails = {
        hospitalName: "King's College Hospital",
        waitTime: 1,
        distance: 3,
        directions: 'googleMapsLink'
    }
    const hospitals: Array<HospitalDetails> = [hospital1, hospital2, hospital3, hospital4, hospital5];

  return (
    <div>
      <div className='text-3xl'>Hospital HomeScreen</div>
      {/* Div containing all Hospitals */}
      <div className=''>
        {/* Map through all hospitals */}
        {hospitals.map((hospital, index) => (
            <HospitalDiv hospitalName={hospital.hospitalName} waitTime={hospital.waitTime} distance={hospital.distance} directions={hospital.directions} />
        ))}
        
      </div>
    </div>
  );
};

export default HospitalScreen;