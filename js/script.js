'use strict';

const buttonSend = document.querySelector('button');

buttonSend.addEventListener('click', () => {
  console.log('click');

  if ('geolocation' in navigator) {
    //Obtenemos la geolocalización
    navigator.geolocation.getCurrentPosition(async (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      //Realizamos una petición a la API
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=precipitation,rain&forecast_days=1&forecast_hours=8`
      );

      const body = await response.json();
      console.log(body);
      if (body.hourly.precipitation === true || body.hourly.rain === true) {
        console.log('lloverá');
      } else {
        console.log('no lloverá');
      }
    });
  } else {
    console.error('error');
  }
});
