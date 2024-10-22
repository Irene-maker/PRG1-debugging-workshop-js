// function convertTo12HourClock(time) {
//   const hours = parseInt(time.slice(0, 2));
//   const minutes = time.slice(-2);
//   if (hours > 12) {
//     return `${hours - 12}:${minutes} PM`;
//   } 
//   if (hours < 12) {
//     return `${hours}:${minutes} AM`;
//   } 
//   if (hours == 12) {
//     return `${hours}:${minutes} PM`;
//   }
//   if (hours == '00') {
//     return `${hours + 12}:${minutes} PM`;
//   } 
// }

function convertTo12HourClock(time){
  let [hours,minutes]=time.split(":");
  hours = parseInt(hours);
  const period = hours >= 12? "PM" : "AM";
  hours = hours % 12 || 12;
  return `${hours}:${minutes} ${period}`
}

module.exports = { convertTo12HourClock };

// Hint: I recommend calling the function with an input of '12:05'

console.log(convertTo12HourClock('00:00'));
console.log(convertTo12HourClock('00:01'));
console.log(convertTo12HourClock('12:00'));
console.log(convertTo12HourClock('01:30'));
console.log(convertTo12HourClock('13:00'));
console.log(convertTo12HourClock('15:07'));
console.log(convertTo12HourClock('23:59'));