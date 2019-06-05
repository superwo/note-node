const request = require('request');

const forecast = (lat, long, callback) => {
  const url = `https://api.darksky.net/forecast/f463fd9e263b4ae05527d6c979b85108/${lat},${long}?units=si`;
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (response.body.error) {
      callback('Unable to find location', undefined);
    } else {
      callback(
        undefined,
        `${response.body.daily.data[0].summary} It is currently ${
          response.body.currently.temperature
        } degrees out. There is a ${
          response.body.currently.precipProbability
        }% chanse of rain.`
      );
    }
  });
};

module.exports = forecast;
