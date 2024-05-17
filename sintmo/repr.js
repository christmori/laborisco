// Assuming today's date is 2024-03-23 as per the context
const startDate = new Date('2023-01-01');
const todayDate = new Date('2024-03-23');
const timeDifference = todayDate.getTime() - startDate.getTime();
const daysDifference = timeDifference / (1000 * 3600 * 24);

document.write('<li>' + Math.floor(daysDifference) + ' days since 2023-01-01</li>');
