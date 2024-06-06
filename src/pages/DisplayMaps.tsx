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
    console.log(hospital);

    const [locationError, setLocationError] = useState<GeolocationPositionError | null>(null);

    useEffect(() => {
        const initializeMap = async () => {
            try {
                const center = await getCurrentLocation(); // Get current location instead of hardcoded center
                await initMap('map', center);
                const [lat, lng] = hospital.directions.split(',').map(coord => parseFloat(coord));
                displayRouteByPublicTransport(center, { lat, lng });
            } catch (error) {
                console.error('Error initializing map:', error);
                if (error instanceof GeolocationPositionError) {
                    setLocationError(error);
                }
            }
        };

        if (hospital) {
            initializeMap();
        }
    }, [hospital]);

    // Function to get current location
    const getCurrentLocation = (): Promise<google.maps.LatLngLiteral> => {
        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        resolve({ lat: latitude, lng: longitude });
                    },
                    (error) => {
                        reject(error);
                    }
                );
            } else {
                reject(new Error("Geolocation is not supported by this browser."));
            }
        });
    };

    // Function to enable location services
    const enableLocation = () => {
        navigator.geolocation.getCurrentPosition(
            () => {
                // Location enabled, reload the page to get current location
                window.location.reload();
            },
            (error) => {
                console.error('Error enabling location:', error);
                alert("Failed to enable location services. Please try again.");
            }
        );
    };

    return (
        <div className='font-bold backgroundPale items-center justify-center min-h-screen flex flex-col'>
            {locationError ? (
                <div>
                    <h1>Location Error</h1>
                    <p>{locationError.message}</p>
                    <button onClick={enableLocation}>Enable Location</button>
                </div>
            ) : (
                <div id="map" className="w-screen h-screen mt-4"></div>
            )}
        </div>
    );
};

export default DisplayMaps;
