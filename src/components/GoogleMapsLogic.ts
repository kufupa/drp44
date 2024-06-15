import { } from '../types/global.d';
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

// Make another for waiting time
export const addMarker = (name: string, location: { lat: number, lng: number, title: string, eta: string }, onClick: () => void): void => {
  if (map) {
    const marker = new google.maps.Marker({
      position: { lat: location.lat, lng: location.lng },
      map: map,
      title: name
    });

    // Create content for the info window
    const contentString = `
      <div style="background-color: white; padding: 10px; border-radius: 5px;">
        <h3>${name}</h3>
        <p>ETA: ${location.eta}</p>
      </div>
    `;

    // Create an info window with the custom HTML content
    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    infowindow.open(map, marker);

    // Add listener to open info window on marker click
    marker.addListener('click', () => {
      onClick(); // Execute the provided onClick function
    });
  }
};


export const getEstimatedTime = (origin: google.maps.LatLngLiteral, destination: google.maps.LatLngLiteral): Promise<string> => {
  return new Promise((resolve, reject) => {
    const directionsService = new google.maps.DirectionsService();
    const request: google.maps.DirectionsRequest = {
      origin: origin,
      destination: destination,
      travelMode: google.maps.TravelMode.TRANSIT, // Use transit mode for public transportation
    };

    directionsService.route(request, (response, status) => {
      if (status === 'OK' && response) {
        const route = response.routes[0];
        if (route) {
          const leg = route.legs[0];
          if (leg) {
            const travelTime = leg.duration ? leg.duration.text : 'Unknown';
            resolve(travelTime);
          } else {
            reject(new Error('Leg is null or undefined'));
          }
        } else {
          reject(new Error('Route is null or undefined'));
        }
      } else {
        reject(new Error('Error calculating directions'));
      }
    });
  });
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
