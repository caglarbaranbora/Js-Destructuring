const topSixRestaurants = [
  "Chick-fil-A",
  "In-N-Out",
  "Chipotle",
  "McDonald's",
  "Taco Bell",
  "KFC",
];

const [first, second, third, ...remaining] = topSixRestaurants;
console.log(`First Restaurant ${first}`);
console.log(`Second Restaurant ${second}`);
console.log(`Third Restaurant ${third}`);
console.log(`Remaining Restaurants ${remaining}`);
