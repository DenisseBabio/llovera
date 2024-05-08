"use strict";

import { getWeatherIcon } from "/js/helpers.js";

const buttonSend = document.querySelector("button");

//Seleccionamos los elementos del DOM
const rain = document.querySelector("#rain");
const noRain = document.querySelector("#noRain");
const error = document.querySelector("#error");
const actually = document.querySelector("#actually");
const nextHours = document.querySelector("#nextHours");

//Hacemos console.log para confirmar que funciona el botón
buttonSend.addEventListener("click", () => {
  console.log("click");

  if (navigator.geolocation) {
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

      //Comprobamos si va a llover en las próximas 8 horas y pasamos resultado.

      function getRain() {
        console.log(body.hourly.rain);
        const rain = body.hourly.rain;

        rain.map((item) => {
          if (item > 0.01) {
            console.log("Va a llover en las próximas 8 horas.");
            return true;
          } else {
            console.log("No va a llover en las próximas 8 horas.");
            return false;
          }
        });
      }
      
      //Hacemos que se muestren los datos en pantalla.
      function showHourlyData() {
        console.log(body);
        for (let index = 0; index < 8; index++) {
          const container = document.createElement("div");
          container.classList.add("nextHoursContainer");
          const section = document.createElement("section");
          const next = document.createElement("h3");
          const degree = document.createElement("p");
          const img = document.createElement("img");
          const hourData = body.hourly.time[index].split("T")[1];
          next.textContent = `${hourData} h.`;

          img.src = getWeatherIcon(body.hourly.weather_code[index]);

          degree.textContent = `${body.hourly.temperature_2m[index]}ºC`;

          section.appendChild(next);
          section.appendChild(img);
          section.appendChild(degree);
          container.appendChild(section);
          nextHours.appendChild(container);
        }
      }
      showHourlyData();

      getRain();
      console.log(body.hourly.rain);
      getHours();
      console.log(body.hourly.time);
    });
  } else {

    // Mensaje de error si la ubicación no funciona
    console.error("error");
  }
});