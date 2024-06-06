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

const HospitalScreen: React.FC = () => {
  // To get data from backend
  const [hospitals, setHospitals] = useState<HospitalDetails[]>([]);

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const hospitalsDetails: HospitalDetails[] = await getAllHospitalDetails();

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
        // Handle errors here
      }
    };

    fetchHospitals();
  }, []);


  const location = useLocation();
  const button: string = location.state?.button || null;
  console.log(button)

  useEffect(() => {
    initMap('map', { lat: 51.499122900037904, lng: -0.1790965476757596 });
    (async () => {
      try {
        const hospitalsDetails: HospitalDetails[] = await getAllHospitalDetails();
        hospitalsDetails.map((hospital) => {
          const [lat, lng] = hospital.directions.split(',').map(coord => parseFloat(coord));
          console.log(lat + "     " + lng)
          addMarker({ lat, lng, title: hospital.hospitalName });
        });
      } catch (error) {
        console.error('Error fetching hospital details:', error);
      }
    })();
  }, []);


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
          <HospitalDiv hospitalName={hospital.hospitalName} waitTime={hospital.waitTime} distance={hospital.distance} directions={hospital.directions} ticked={hospital.ticked} />
        ))}

      </div>
      <div id="map" className="w-screen h-[300px] mt-4"></div>
    </div>
  );
};

export default HospitalScreen;
