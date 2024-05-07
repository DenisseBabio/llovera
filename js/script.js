'use strict';

const buttonSend = document.querySelector('button');

buttonSend.addEventListener('click', () => {
  console.log('click');

  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      // Realizamos una petición a la API
      const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=rain&forecast_hours=8`);
      const body = await response.json();
      console.log(body);

      // Función para determinar si lloverá en las próximas 8 horas
      function getRain(hourlyData) {
        const currentHour = new Date().getHours();
        for (let i = 0; i < hourlyData.length; i++) {
          const forecastTime = new Date(hourlyData[i].time * 1000);
          const forecastHour = forecastTime.getHours();
          if (forecastHour >= currentHour && forecastHour < currentHour + 8 && hourlyData[i].rain > 0) {
            return true;
          }
        }
        return false;
      }

      // Llamada a la función getRain y manejo de la respuesta
      const rain = getRain(body.hourly.time); // Asegúrate que body.hourly.time es el array correcto
      if (rain) {
        console.log('Lloverá');
      } else {
        console.log('No lloverá');
      }

    }, (error) => {
      console.error('Error al obtener la geolocalización:', error);
    });
  } else {
    console.error('Geolocalización no disponible');
  }
});