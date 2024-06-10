import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { db } from './db'; 
import { useUserId } from '../components/UserContext';
import { addDoc, collection } from "firebase/firestore"; // Import necessary functions

export function useScreenTimeTracking() {
  const location = useLocation();
  const [screenStartTime, setScreenStartTime] = useState(null);
  const userId = useUserId(); 
  const mountedRef = useRef(true); 

  useEffect(() => {
    setScreenStartTime(Date.now());

    return () => {
      mountedRef.current = false; 
      if (screenStartTime) {
        const screenEndTime = Date.now();
        const screenName = location.pathname;

        addDoc(collection(db, 'screen-views'), {
          userId,
          screenName,
          startTime: screenStartTime,
          endTime: screenEndTime,
        })
        .then(() => {
          console.log('Screen-view added successfully!');
        })
        .catch((error) => {
          console.error('Error adding screen-view:', error);
        });
      }
    };
  }, [location]);

  return null; 
}
