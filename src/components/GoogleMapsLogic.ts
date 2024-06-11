import {} from '../types/global.d';
import { LocationMap } from './GoogleMapsApi';
import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
  apiKey: 'AIzaSyBiqV4fobO1QsFz5fNAAYR6xxDtOclmoMc',
  version: 'weekly'
});

let map: google.maps.Map;
let directionsService: google.maps.DirectionsService;
let directionsRenderer: google.maps.DirectionsRenderer;

export const initMap = (elementId: string, center: google.maps.LatLngLiteral): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    loader.load().then(() => {
      map = new google.maps.Map(document.getElementById(elementId) as HTMLElement, {
        center: center,
        zoom: 10,
      });
      directionsService = new google.maps.DirectionsService();
      directionsRenderer = new google.maps.DirectionsRenderer();
      directionsRenderer.setMap(map);
      resolve();
    }).catch(error => {
      reject(error);
    });
  });
};

export const addMarker = (location: { lat: number, lng: number, title: string }, onClick: () => void): void => {
  if (map) {
    const marker = new google.maps.Marker({
      position: { lat: location.lat, lng: location.lng },
      map: map,
      title: location.title
    });

    marker.addListener('click', onClick);
  }
};

export const displayRouteByPublicTransport = (origin: google.maps.LatLngLiteral, destination: google.maps.LatLngLiteral): void => {
  if (!directionsService || !directionsRenderer) {
    console.error('Direction service or renderer is not initialized');
    return;
  }

  // Clear previous directions
  directionsRenderer.setDirections(null);

  const request: google.maps.DirectionsRequest = {
    origin: origin,
    destination: destination,
    travelMode: google.maps.TravelMode.TRANSIT,
  };

  directionsService.route(request, (response, status) => {
    if (status === 'OK' && response) {
      directionsRenderer.setDirections(response);
    } else {
      console.error('Error:', status);
    }
  });
};
