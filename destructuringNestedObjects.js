//destructuring with nested objects

const localForecast = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 },
};

function getTemp(forecast) {
  const {
    tomorrow: { max: tomorrowMax },
  } = forecast;

  return tomorrowMax;
}

console.log(getTemp(localForecast));
