import React from 'react';
import Countdown from 'react-countdown';

const CountdownTimer = ({ data }) => {
  // Calculate the difference between the target time and the current time
  const targetTime = data && data.length !== 0
  ? (() => {
    const [hours, minutes] = data.split(':').map(Number);
    const time = new Date();
    time.setHours(hours, minutes, 0, 0);
    return time;
  })()
  : null;
  const currentTime = Date.now();
  const timeDifference = targetTime - currentTime;

  if (timeDifference <= 0) {
    return <span>00:00:00</span>;
  }

  // Renderer callback for react-countdown
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render on completion
      return <span>00:00:00</span>;
    } else {
      // Render countdown
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
    <Countdown
      date={Date.now() + timeDifference} // Set the countdown to the target time
      renderer={renderer}
      onComplete={() => console.log("Countdown finished!")}
    />
  );
};

export default CountdownTimer;
