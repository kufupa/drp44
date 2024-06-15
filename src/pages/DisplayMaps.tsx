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
// @ts-ignore
import LocationPin from '../components/LocationPin.webp'

import { addMarker, displayRouteByPublicTransport, getEstimatedTime, initMap } from '../components/GoogleMapsLogic';

const DisplayMaps: React.FC = () => {
    const location = useLocation();
    const hospitalName: string = location.state?.hospitalName || null;
    const directions: string = location.state?.directions || null;
    const hospitals: HospitalDetails[] = location.state?.hospitals || null;
    const hospital: HospitalDetails = hospitals.find(hosp => hosp.hospitalName === hospitalName) || hospitals[0]

    console.log(hospitalName);
    console.log(directions);
    console.log(hospitals);
    console.log(hospital)

    const [locationError, setLocationError] = useState<GeolocationPositionError | null>(null);

    useEffect(() => {
        const initializeMap = async () => {
            try {
                const center = await getCurrentLocation();
                await initMap('map', center);

                hospitals.forEach((hosp) => {
                    const [lat, lng] = hosp.directions.split(',').map(coord => parseFloat(coord));
                    getEstimatedTime(center, { lat, lng })
                        .then((eta) => {
                            addMarker(hosp.hospitalName, {
                                lat,
                                lng,
                                title: hosp.hospitalName,
                                eta: eta
                            }, () => {
                                displayRouteByPublicTransport(center, { lat, lng });
                            });
                        })
                        .catch((error) => {
                            console.error('Error getting estimated time:', error);
                        });
                });

                const [lat, lng] = directions.split(',').map(coord => parseFloat(coord));
                displayRouteByPublicTransport(center, { lat, lng });
            } catch (error) {
                console.error('Error initializing map:', error);
                if (error instanceof GeolocationPositionError) {
                    setLocationError(error);
                }
            }
        };

        if (hospitals.length) {
            initializeMap();
        }
    }, [hospitals]);


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
            <div>
                {locationError ? (
                    <div>
                        <h1>Location Error</h1>
                        <p>{locationError.message}</p>
                        <button onClick={enableLocation}>Enable Location</button>
                    </div>
                ) : (
                    <div className='w-screen h-screen flex justify-center items-center pt-20'>
                        <div className='flex flex-col items-center'>
                            <div>
                                {/* <img src={LocationPin} alt="" className='w-10' /> */}
                            </div>
                            <div id="map" className="mt-4 w-screen h-screen"></div>
                            <div></div>
                        </div>
                    </div>

                )}
            </div>
        </div>
    );
};

export default DisplayMaps;
