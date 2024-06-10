// metrics.js
import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { db } from './db'; 
import { useUserId } from '../components/UserContext';

export function useScreenTimeTracking() { // Custom Hook name starts with "use"
  const location = useLocation();
  const [screenStartTime, setScreenStartTime] = useState(null);
  const userId = useUserId(); 
  const mountedRef = useRef(true); 

  useEffect(() => {
    setScreenStartTime(Date.now());

    return () => {
      mountedRef.current = false; 
    };
  }, [location]);

  useEffect(() => {
    if (screenStartTime) {
      return () => {
        if (mountedRef.current) { 
          const screenEndTime = Date.now();
          const screenName = location.pathname;

          db.collection('screen_views').add({
            userId,
            screenName,
            startTime: screenStartTime,
            endTime: screenEndTime,
          });
        }
      };
    }
  }, []); 

  return null; // Custom Hooks often return null or nothing
}
