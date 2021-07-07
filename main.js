$(document).ready(function () {
  const key = '11e66ac94ae54709b600efb933dd2c05';
  const cityName = '五台山';

  const cityUrl = `https://geoapi.qweather.com/v2/city/lookup?location=${cityName}&key=${key}`;
  $.getJSON(cityUrl, function (data) {
    const location = data.location[0].id;
    const weatherUrl = `https://devapi.qweather.com/v7/weather/3d?location=${location}&key=${key}`;
    $.getJSON(weatherUrl, function (data) {
      console.log(data);
      $('#update-time').text(data.updateTime.slice(0, 10) + " " + data.updateTime.slice(11, -6));
    });
  });
});