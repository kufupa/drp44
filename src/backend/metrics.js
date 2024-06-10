import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { db } from './db'; // Import your Firestore instance
import { useUserId } from '../components/UserContext';

export default function useScreenTracking() {
  const location = useLocation();
  const [screenStartTime, setScreenStartTime] = useState(null);

  useEffect(() => {
    setScreenStartTime(Date.now());

    return () => {
      if (screenStartTime) {
        const screenEndTime = Date.now();
        const screenName = location.pathname;

        // Assuming you have a user ID (replace with your actual user ID retrieval)
        const userId = useUserId(); 

        db.collection('screen_views').add({
          userId,
          screenName,
          startTime: screenStartTime,
          endTime: screenEndTime,
        });
      }
    };
  }, [location]);
}
