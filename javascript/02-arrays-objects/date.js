let myDate= new Date();
console.log(myDate.getTime()); // Milliseconds since Jan 1, 1970 (Unix timestamp)
console.log(myDate.getHours()); // Current hour in local time (0-23)
console.log(myDate.getMinutes()); // Current minutes in local time (0-59)
console.log(myDate.getSeconds()); // Current seconds in local time (0-59)
console.log(myDate.getMilliseconds()); // Current milliseconds in local time (0-999)
console.log(myDate.getFullYear()); // Current year (4 digits)
console.log(myDate.getMonth()); // Current month index (0-11), Jan is 0
console.log(myDate.getDay()); // Current weekday index (0-6), Sunday is 0
console.log(myDate.getTimezoneOffset()); // Difference from UTC in minutes
console.log(myDate.getUTCDate()); // Day of month in UTC (1-31)
console.log(myDate.getUTCDay()); // Weekday index in UTC (0-6)