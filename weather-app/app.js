const request = require('request');

// const url =
//   'https://api.darksky.net/forecast/f463fd9e263b4ae05527d6c979b85108/37.8267,-122.4233?units=si';

// request({ url: url, json: true }, (err, response) => {
//   console.log(
//     `${response.body.daily.data[0].summary} It is currently ${
//       response.body.currently.temperature
//     } degrees out. There is a ${
//       response.body.currently.precipProbability
//     }% chanse of rain.`
//   );
// });

const geocodeURL =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYXZhZGFyYWQiLCJhIjoiY2p3aXZ3NG45MDBmaTN5cDM4YnJsaHB3aCJ9.qsk2y0ExOmhMFROzXJRDNA&limit=1';

request({ url: geocodeURL, json: true }, (err, response) => {
  const latitude = response.body.features[0].center[1];
  const longitude = response.body.features[0].center[0];
  console.log(latitude, longitude);
});
