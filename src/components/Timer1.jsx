import React, { useState, useRef } from 'react';
import Countdown from 'react-countdown';
import { getApiwithtoken } from '../utils/api';

const Timer = ({ data, id, gameTime, currentRound, noOfRounds ,delayTime}) => {
  // Parse the target time from the provided data or set to null if data is not available
  console.log(data,id,gameTime,currentRound,noOfRounds,delayTime,"fffffffff");
  
  const targetTime = data && data.length !== 0
    ? (() => {
      const [hours, minutes] = data.split(':').map(Number);
      const time = new Date();
      time.setHours(hours, minutes, 0, 0);
      return time;
    })()
    : null;

  // Ref to track if fetchData has been called
  // const hasFetchedData = useRef(false);

  // Renderer function to format the countdown
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // if (!hasFetchedData.current) {
      //   // Ensure fetchData is called only once when the countdown is completed

      //   // Get the current date and time
      //   const currentTime = new Date();
      //   console.log("ooooooooooooooooo.");
      //   // Check if current time matches the target time exactly
      //   if (currentTime.getFullYear() === targetTime.getFullYear() &&
      //     currentTime.getMonth() === targetTime.getMonth() &&
      //     currentTime.getDate() === targetTime.getDate() &&
      //     currentTime.getHours() === targetTime.getHours() &&
      //     currentTime.getMinutes() === targetTime.getMinutes()) {
      //     console.log("The current time is exactly the target time.");
      //     const fetchData = async () => {
      //       const url = `${import.meta.env.VITE_URL}${import.meta.env.VITE_GET_TOURNAMENT_START}${id}/${gameTime}/${currentRound}/${noOfRounds}/${delayTime}`;
      //       const res = await getApiwithtoken(url);
      //       console.log('API response:', res);
      //     };

      //     fetchData(); // Fetch data when countdown is completed
      //     hasFetchedData.current = true; // Mark as fetched
      //   } else {
      //     console.log("The current time is not the target time.", currentTime, targetTime);
      //   }
      // }

      return <span>00:00:00</span>; // Display when countdown is completed
    } else {
      return (
        <span>
          {hours.toString().padStart(2, '0')}:
          {minutes.toString().padStart(2, '0')}:
          {seconds.toString().padStart(2, '0')}
        </span>
      );
    }
  };

  return (
    <span>
      {targetTime ? <Countdown date={targetTime} renderer={renderer} /> : <span>No upcoming match</span>}
    </span>
  );
};

export default Timer;
