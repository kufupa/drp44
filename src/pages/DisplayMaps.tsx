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

import { addMarker, displayRouteByPublicTransport, initMap } from '../components/GoogleMapsLogic';

const DisplayMaps: React.FC = () => {
    const location = useLocation();
    const hospital: HospitalDetails = location.state?.hospital || null;
    console.log(hospital)

    useEffect(() => {
        const initializeMap = async () => {
            try {
                const center = { lat: 51.499122900037904, lng: -0.1790965476757596 };
                await initMap('map', center);
                const [lat, lng] = hospital.directions.split(',').map(coord => parseFloat(coord));
                // const [lat, lng] = [51.487002444902714, -0.21937191239860668]
                addMarker({ lat: lat, lng: lng, title: hospital.hospitalName });
                addMarker({ lat: 51.499122900037904, lng: -0.1790965476757596, title: "Huxley Imperial" });

                displayRouteByPublicTransport(center, { lat, lng });
            } catch (error) {
                console.error('Error initializing map:', error);
            }
        };

        if (hospital) {
            initializeMap();
        }
    }, [hospital]);


    return (
        <div className='font-bold backgroundPale items-center justify-center min-h-screen flex flex-col'>
            <div id="map" className="w-screen h-screen mt-4"></div>
        </div>
    );
};

export default DisplayMaps;
