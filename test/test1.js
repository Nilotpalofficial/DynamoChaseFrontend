// const targetTime = new Date('Thu Aug 29 2024 15:37:00 GMT+0530 (India Standard Time)');
// // Get the current date and time
// const currentTime = new Date();
// // Calculate the difference in milliseconds
// const delay = targetTime.getTime() - currentTime.getTime();
// if (delay > 0) {

//         const now = new Date();
//         if (now.getFullYear() === targetTime.getFullYear() &&
//             now.getMonth() === targetTime.getMonth() &&
//             now.getDate() === targetTime.getDate() &&
//             now.getHours() === targetTime.getHours() &&
//             now.getMinutes() === targetTime.getMinutes() &&
//             now.getSeconds() === targetTime.getSeconds()) {
//             console.log("The current time is exactly the target time.");
//         } else {
//             console.log("The timeout executed, but the current time is not exactly the target time.");
//         }
// } else {
//     console.log("The target time has already passed.");
// }
const now = new Date();
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');
const formattedTime = `${hours}:${minutes}`;
const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
console.log(`${formattedTime}
${formattedDate}`);