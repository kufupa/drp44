import {} from '../types/global.d';
import { LocationMap } from './GoogleMapsApi';
import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
  apiKey: 'AIzaSyBiqV4fobO1QsFz5fNAAYR6xxDtOclmoMc',
  version: 'weekly'
});

let map: google.maps.Map;
let directionsService: google.maps.DirectionsService;

export const initMap = (elementId: string, center: google.maps.LatLngLiteral): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    loader.load().then(() => {
      map = new google.maps.Map(document.getElementById(elementId) as HTMLElement, {
        center: center,
        zoom: 13,
      });
      directionsService = new google.maps.DirectionsService();
      resolve();
    }).catch(error => {
      reject(error);
    });
  });
};


export const addMarker = (location: LocationMap): void => {
  if (map) {
    new google.maps.Marker({
      position: { lat: location.lat, lng: location.lng },
      map: map,
      title: location.title
    });
  }
};

export const displayRouteByPublicTransport = (origin: google.maps.LatLngLiteral, destination: google.maps.LatLngLiteral): void => {
  if (!directionsService) {
    console.error('Direction service is not initialized');
    return;
  }

  const request: google.maps.DirectionsRequest = {
    origin: origin,
    destination: destination,
    travelMode: google.maps.TravelMode.TRANSIT, // Use transit mode for public transportation
  };

  directionsService.route(request, (response, status) => {
    if (status === 'OK' && response) { // Check if response is not null
      const route = response.routes[0];
      if (route) { // Check if route is not null
        const leg = route.legs[0];
        if (leg) { // Check if leg is not null
          const travelTime = leg.duration ? leg.duration.text : 'Unknown'; // Check if duration is not undefined
          const transitMode = leg.steps[0] ? leg.steps[0].travel_mode : 'Unknown'; // Check if travel_mode is not undefined

          console.log('Estimated travel time:', travelTime);
          console.log('Transit mode:', transitMode);

          const directionsRenderer = new google.maps.DirectionsRenderer();
          directionsRenderer.setMap(map); // Assuming 'map' is the Google Map object
          directionsRenderer.setDirections(response);
        } else {
          console.error('Leg is null or undefined');
        }
      } else {
        console.error('Route is null or undefined');
      }
    } else {
      console.error('Error:', status);
    }
  });
};

