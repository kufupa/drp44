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

const DisplayMaps: React.FC = () => {
  const location = useLocation();
  const button: string = location.state?.hospitals || null;
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
      <div id="map" className="w-screen h-[300px] mt-4"></div>
    </div>
  );
};

export default DisplayMaps;
