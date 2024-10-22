function calculatePercentageChange(original, newAmount) {
  const difference = newAmount - original;
  if(difference == 0){
    return 0;
  }
  // const average = (original - newAmount) / 2;
  const percentageDifference = (difference / original) * 100;
  return Math.round(percentageDifference);
  // return percentageDifference.toFixed(0);
}

module.exports = { calculatePercentageChange };

console.log(calculatePercentageChange(100, 120)); // should return -20 as there's been a 20% decrease from 50 to 40
console.log(calculatePercentageChange(50, 40)); // should return -20 as there's been a 20% decrease from 50 to 40
console.log(calculatePercentageChange(200, 200)); // should return -20 as there's been a 20% decrease from 50 to 40
