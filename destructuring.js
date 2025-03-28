const AVG_TEMP = {
  today: 12,
  tomorrow: 124,
};

function getTemperature(avgTemp) {
  const { tomorrow: tempOfTomorrow } = avgTemp; //destructuring
  return tempOfTomorrow;
}

function getTemp(avgTemp) {
  return avgTemp.today;
}

function getTempAnother({ tomorrow }) {
  return tomorrow;
}

console.log(getTemperature(AVG_TEMP));
console.log(getTemp(AVG_TEMP));
console.log(getTempAnother(AVG_TEMP));
