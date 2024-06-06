import {} from '../types/global.d';
import { LocationMap } from './GoogleMapsApi';
import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
  apiKey: 'AIzaSyBiqV4fobO1QsFz5fNAAYR6xxDtOclmoMc',
  version: 'weekly'
});

let map: google.maps.Map;

export const initMap = (elementId: string, center: google.maps.LatLngLiteral): void => {
  loader.load().then(() => {
    map = new google.maps.Map(document.getElementById(elementId) as HTMLElement, {
      center: center,
      zoom: 13
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
