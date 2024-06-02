// TODO
// Use button category to determine wait time

import React, { useState, useEffect } from 'react';
import HospitalDiv from '../components/HospitalDiv';
import { HospitalDetails } from '../components/HospitalDetails';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAllHospitalDetails } from "../backend/hospitals"
import BackButton from '../components/BackButton';

const HospitalScreen: React.FC = () => {
  // To get data from backend
  const [hospitals, setHospitals] = useState<HospitalDetails[]>([]);

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const hospitalsDetails = await getAllHospitalDetails();

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

    return (
      <div className='font-bold'>
          <BackButton />
          <div className='text-5xl font-black'>Hospital Reccommendations</div>
          <div className='py-6'>We're presenting the best hospitals for you, based on both the hospital's waiting time and your commute time.</div>
          <div className='grid grid-cols-10'>
              <div className='lg:col-span-7 col-span-4'></div>
              <div className='lg:col-span-3 col-span-6 mb-6'>
                  <div className='absolute ml-4'>
                      <div className="w-8 h-8 rounded-full bg-green-100 hover:bg-green-300">
                          <div className="absolute z-10 rounded-lg text-2xl left-2 -top-0.5">+</div>
                      </div>
                  </div>
                  <div className='absolute ml-14 mt-1'> - Page the hospital of your arrival</div>
              </div>
          </div>
          {/* Div containing all Hospitals */}
          <div className='mt-10'>
              {/* Map through all hospitals */}
              {hospitals.map((hospital, index) => (
                  <HospitalDiv hospitalName={hospital.hospitalName} waitTime={hospital.waitTime} distance={hospital.distance} directions={hospital.directions} ticked={hospital.ticked} />
              ))}

          </div>
      </div>
    );
};

export default HospitalScreen;
