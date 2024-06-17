// TODO
// Use button category to determine wait time

import React, { useState, useEffect } from 'react';
import HospitalDiv from '../components/HospitalDiv';
import { HospitalDetails } from '../types/HospitalDetails';
import { useLocation, useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';
// @ts-ignore
import HospitalIcon from '../components/imgs/HospitalIcon.png'
// @ts-ignore
import ClipboardIcon from '../components/imgs/ClipboardIcon.png'
import { getLatLngFromPostcode } from '../components/GoogleMapsLogic';

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
  const [userPostcode, setUserPostcode] = useState<string>("");

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

  const handleClick = async (hospitalName: string, directions: string) => {
    if (userPostcode === "") {
      navigate("/DisplayMaps", { state: { hospitalName, directions, hospitals } });
    } else {
      try {
        // Check if postcode is valid and get lat/lng
        const { lat, lng } = await getLatLngFromPostcode(userPostcode);
        navigate("/DisplayMapsP", { state: { hospitalName, directions, hospitals, lat, lng } });
      } catch (error) {
        console.error('Error getting location from postcode:', error);
        console.log(error)
        // setUserPostcode("Invalid Postcode")
      }
    }
  };


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserPostcode(event.target.value);
  };

  return (
    <div className='font-bold backgroundPale items-center justify-center min-h-screen flex flex-col'>
      <BackButton />
      <div className='md:text-5xl text-3xl font-black textClickBlue md:mt-10 mt-4 max-w-xl'>Hospital Recommendations</div>
      <img src={HospitalIcon} alt="" className='w-64' />
      {/* Div containing all Hospitals */}
      <div className=''>

        <div className="border-t-4 border-blue-900 mt-4" />
        <div className='flex flex-row textBlue mt-4 text-2xl justify-center'>Our recommendation:</div>
        {/* First Hospital Div */}
        {hospitals.length > 0 && (
          <HospitalDiv
            hospitalName={hospitals[0].hospitalName}
            waitTime={hospitals[0].waitTime}
            distance={hospitals[0].distance}
            directions={hospitals[0].directions}
            ticked={hospitals[0].ticked}
            mapsFunc={handleClick}
          />
        )}
        <div className="border-b-4 border-blue-900 mb-4" />


        {/* "Below are our recommendations" div */}
        <div className='flex flex-row textBlue' >
          <img src={ClipboardIcon} alt="" className='md:ml-0 ml-10' />
          <div className='mt-8 text-2xl'>Below are other recommendations</div>
        </div>

        {/* Map through remaining hospitals */}
        {hospitals.slice(1).map((hospital, index) => (
          <HospitalDiv
            hospitalName={hospital.hospitalName}
            waitTime={hospital.waitTime}
            distance={hospital.distance}
            directions={hospital.directions}
            ticked={hospital.ticked}
            mapsFunc={handleClick}
          />
        ))}

      </div>
      <div className='mt-8 text-lg'>N.B. The wait times are an estimate and may not be representative of the actual time once you arrive at the hospital</div>

    </div>
  );
};
export default HospitalScreen;
