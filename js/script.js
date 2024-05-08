'use strict';

const buttonSend = document.querySelector('button');

buttonSend.addEventListener('click', () => {
  console.log('click');

  if ('geolocation' in navigator) {
    // Obtenemos la geolocalización

    navigator.geolocation.getCurrentPosition(async (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      // Realizamos una petición a la API
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=rain&forecast_hours=8&hourly=temperature_2m&forecast_hours=8&hourly=weather_code&forecast_hours=8&timeformat`
      );

      const body = await response.json();
      console.log(body);

      function getHours() {
        const now = new Date();
        const currentHour = now.getHours();

        // Creamos un array con el resultado de las horas.
        const hoursArray = [];

        // Hacemos un bucle que nos muestre las siguientes 8 horas.
        for (let i = 0; i < 8; i++) {
          const hour = (currentHour + i) % 24;

          // Creamos un objeto que reinicie las horas cuando llegue a las 00:00
          const nextHour = new Date(now);
          nextHour.setHours(hour, 0, 0, 0);

          // Pusheamos el reinicio en el array
          hoursArray.push(nextHour);
        }

        // Asignamos los resultados al array fetcheado
        body.hourly.time = hoursArray;
      }

      function getRain() {
        body.hourly.rain.map((rain) => {
          if (rain > 0.01) {
            console.log('Va a llover en las próximas 8 horas.');
            return true;
          } else {
            console.log('No va a llover en las próximas 8 horas.');
            return false;
          }
        });
      }

      getRain();
      console.log(body.hourly.rain);
      getHours();
      console.log(body.hourly.time);
    });
  } else {
    console.error('error');
  }
});

