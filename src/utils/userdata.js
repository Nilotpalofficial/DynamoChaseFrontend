export const formatDate = (dateString) => {
    const date = new Date(dateString);

    const optionsDate = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', optionsDate);

    return formattedDate;
};

export function formatTime(inputTime) {
    if (!inputTime) {
        return ''; // or return a default value like 'Invalid time'
    }

    const [hour, minute] = inputTime.split(':');
    const date = new Date();

    // Set hours and minutes
    date.setHours(hour, minute);

    // Options for formatting time
    const optionsTime = { hour: 'numeric', minute: 'numeric', hour12: true };
    const formattedTime = date.toLocaleTimeString('en-US', optionsTime);

    return formattedTime;
}
