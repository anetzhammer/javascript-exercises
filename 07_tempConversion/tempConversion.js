const convertToCelsius = function(ftc) {
  const cel = (ftc - 32) * (5/9)
  return Math.round(cel * 10) / 10 
};

const convertToFahrenheit = function(ctf) {
  const far = (ctf * (9/5) + 32)
  return Math.round(far * 10) / 10 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

convertToCelsius(212)