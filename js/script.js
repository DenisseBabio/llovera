"use strict";

// Importamos funcion desde helpers
import { getWeatherIcon } from "/js/helpers.js";

// Indicamos cuando se debe añadir cada dato
document.addEventListener('DOMContentLoaded', function() {
  const buttonSend = document.querySelector("button");
  const rain = document.querySelector("#rain");
  const noRain = document.querySelector("#noRain");
  const errorSection = document.querySelector("#error"); 
  const actually = document.querySelector("#actually");
  const nextHours = document.querySelector("#nextHours");

  //Limpiamos pantalla
  function clean() {
      rain.classList.add("hidden");
      noRain.classList.add("hidden");
      errorSection.classList.add("hidden"); 
      actually.classList.add("hidden");
      nextHours.classList.add("hidden");
      document.querySelectorAll(".nextHoursContainer").forEach((el) => {
          el.remove();
      });
  }
  clean(); 

    //Controlamos botón
    buttonSend.addEventListener("click", () => {
        console.log("click");

        //Comprobamos ubicacion
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                //Incluimos ubicacion en la API
                const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=rain,temperature_2m,weather_code&forecast_hours=8`);

                //Convertimos a JSON
                const body = await response.json();
                console.log(body);

                //Ajustamos las horas
                function getHours() {
                    const now = new Date();
                    const currentHour = now.getHours();

                    for (let i = 0; i < 8; i++) {
                        const hour = (currentHour + i) % 24;
                        const nextHour = new Date(now);
                        nextHour.setHours(hour, 0, 0, 0);
                        body.hourly.time[i] = nextHour.toISOString(); 
                    }
                }

                //Comprobamos si lloverá o no 
                function getRain() {
                    let willRain = body.hourly.rain.some(rainAmount => rainAmount > 0.01);
                    if (willRain) {
                      document.getElementById('rain').style.display = 'block';
                      document.getElementById('noRain').style.display = 'none';
                    } else {
                      document.getElementById('rain').style.display = 'none';
                      document.getElementById('noRain').style.display = 'block';
                    }
                    console.log("Rain check: ", willRain ? "Will rain" : "No rain");
                }

                //Mostramos los datos del clima
                function showHourlyData() {
                    for (let index = 0; index < body.hourly.time.length; index++) {
                        const container = document.createElement("div");
                        container.classList.add("nextHoursContainer");
                        const section = document.createElement("section");
                        const next = document.createElement("h3");
                        const degree = document.createElement("p");
                        const img = document.createElement("img");

                        const hourData = new Date(body.hourly.time[index]).getHours() + ":00";
                        next.textContent = hourData;
                        img.src = getWeatherIcon(body.hourly.weather_code[index], new Date(body.hourly.time[index]).getHours());
                        degree.textContent = `${body.hourly.temperature_2m[index]}ºC`;

                        section.appendChild(next);
                        section.appendChild(img);
                        section.appendChild(degree);
                        container.appendChild(section);
                        nextHours.appendChild(container);
                    }
                }

                //Llamamos a las funciones
                getHours();
                showHourlyData();
                getRain();

            //Indicamos errores
            }, error => {
                console.error("Geolocation error:", error);
                error.classList.remove("hidden");
            });
        } else {
            console.error("Geolocation is not supported by this browser.");
            error.classList.remove("hidden");
        }
    });
});
