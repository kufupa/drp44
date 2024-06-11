// TODO
// Use button category to determine wait time

import React, { useState, useEffect } from 'react';
import HospitalDiv from '../components/HospitalDiv';
import { HospitalDetails } from '../components/HospitalDetails';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAllHospitalDetails } from "../backend/hospitals"
import BackButton from '../components/BackButton';
// @ts-ignore
import HospitalIcon from '../components/HospitalIcon.png'
// @ts-ignore
import ClipboardIcon from '../components/ClipboardIcon.png'

import { addMarker, initMap } from '../components/GoogleMapsLogic';
import DisplayMaps from './DisplayMaps';

const HospitalScreen: React.FC = () => {
  const hospital1: HospitalDetails = {
    hospitalName: 'Charing Cross Hospital',
    waitTime: 7,
    distance: 2.5,
    directions: '51.48697601826863, -0.21951089239672142',
    ticked: false,
  }
  const hospital2: HospitalDetails = {
    hospitalName: 'Royal London Hospital',
    waitTime: 5,
    distance: 6.6,
    directions: '51.51885418944482, -0.05774435842324855',
    ticked: false,
  }
  const hospital3: HospitalDetails = {
    hospitalName: "Guy's Hospital",
    waitTime: 1,
    distance: 4.8,
    directions: '51.50392461109935, -0.08734215935546974',
    ticked: false,
  }
  const hospital4: HospitalDetails = {
    hospitalName: "St Thomas' Hospital",
    waitTime: 3,
    distance: 4,
    directions: '51.49921390992211, -0.11885373048485628',
    ticked: false,
  }
  const hospital5: HospitalDetails = {
    hospitalName: "King's College Hospital",
    waitTime: 1,
    distance: 5.6,
    directions: '51.4695394804474, -0.093888722197904',
    ticked: false,
  }

  // To get data from backend
  const [hospitals, setHospitals] = useState<HospitalDetails[]>([]);

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        // const hospitalsDetails: HospitalDetails[] = await getAllHospitalDetails();
        const hospitalsDetails: HospitalDetails[] = [hospital1, hospital2, hospital3, hospital4, hospital5]

        // Calculate the score for each hospital based on waitTime and distance
        const sortedHospitals = hospitalsDetails.sort((a, b) => {
          const scoreA = a.waitTime + a.distance * 2;
          const scoreB = b.waitTime + b.distance * 2;

          // Compare the scores
          if (scoreA < scoreB) {
            return -1;
          } else if (scoreA > scoreB) {
            return 1;
          } else {
            return 0;
          }
        });

        setHospitals(sortedHospitals);
      } catch (error) {
        setHospitals([hospital1, hospital2, hospital3, hospital4, hospital5])
      }
    };

    fetchHospitals();
  }, []);

  const navigate = useNavigate();
  const location = useLocation();
  const button: string = location.state?.button || null;

  const handleClick = (hospitalName: string, directions: string) => {
    // const [lat, lng] = directions.split(',').map(coord => parseFloat(coord));
    // const marker = addMarker({ lat, lng, title: hospitalName });
    navigate("/DisplayMaps", { state: { hospitalName, directions, hospitals } })
  }

  return (
    <div className='font-bold backgroundPale items-center justify-center min-h-screen flex flex-col'>
      <BackButton />
      <div className='md:text-5xl text-3xl font-black textClickBlue md:mt-10 mt-4 max-w-xl'>Hospital Recommendations</div>
      <img src={HospitalIcon} alt="" className='w-64' />
      <div className='flex flex-row textBlue' >
        <img src={ClipboardIcon} alt="" className='' />
        <div className='mt-8 text-lg'>Below are our recommendations</div>
      </div>
      {/* Div containing all Hospitals */}
      <div className=''>
        {/* Map through all hospitals */}
        {hospitals.map((hospital, index) => (
          <HospitalDiv hospitalName={hospital.hospitalName} waitTime={hospital.waitTime} distance={hospital.distance} directions={hospital.directions} ticked={hospital.ticked} mapsFunc={handleClick} />
        ))}

      </div>
      <div className='mt-8 text-lg'>N.B. The wait times are an estimate and may not be representative of the actual time once you arrive at the hospital</div>

    </div>
  );
};

export default HospitalScreen;
