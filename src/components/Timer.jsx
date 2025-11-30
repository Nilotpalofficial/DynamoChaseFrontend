import React, { useEffect, useRef } from 'react';
import { getApiwithtoken } from '../utils/api';

const Timer = ({ data, id, gameTime, currentRound, noOfRounds,delayTime }) => {
  // Parse the target time from the provided data or set to null if data is not available
  const targetTime = data && data.length !== 0
    ? (() => {
      const [hours, minutes] = data.split(':').map(Number);
      const time = new Date();
      time.setHours(hours, minutes, 0, 0);
      return time;
    })()
    : null;

  // Ref to track if fetchData has been called
  const hasFetchedData = useRef(false);

  useEffect(() => {
    if (!targetTime) return;

    const intervalId = setInterval(() => {
      const currentTime = new Date();

      if (currentTime.getFullYear() === targetTime.getFullYear() &&
        currentTime.getMonth() === targetTime.getMonth() &&
        currentTime.getDate() === targetTime.getDate() &&
        currentTime.getHours() === targetTime.getHours() &&
        currentTime.getMinutes() === targetTime.getMinutes()) {
        
        if (!hasFetchedData.current) {
          console.log("The current time is exactly the target time.");

          const fetchData = async () => {
            const url = `${import.meta.env.VITE_URL}${import.meta.env.VITE_GET_TOURNAMENT_START}${id}/${gameTime}/${currentRound}/${noOfRounds}/${delayTime}`;
            const res = await getApiwithtoken(url);
            console.log('API response:', res);
          };

          fetchData(); // Fetch data when current time matches target time
          hasFetchedData.current = true; // Mark as fetched
        }
      } else {
        console.log("The current time is not the target time.", currentTime, targetTime);
      }
    }, 1000); // Check every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [targetTime, id, gameTime, currentRound, noOfRounds]);

  return null
};

export default Timer;
