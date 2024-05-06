'use strict';

const buttonSend = document.querySelector("button");

function doSomething(latitude, longitude) {
    console.log(latitude, longitude);
  };

buttonSend.addEventListener('click',()=>{
    console.log('click');

    if ('geolocation' in navigator) {
        console.log('funciona');
        navigator.geolocation.getCurrentPosition((position) => {
            doSomething(position.coords.latitude, position.coords.longitude);
          });
        
    } else {
        console.error('error');
    }
});

fetch('https://api.open-meteo.com/v1/forecast?latitude=43.4799&longitude=-8.2182&hourly=precipitation,rain&forecast_days=1&forecast_hours=8') 
    .then(function (response){
        return response.json();
    })
    .then(function(data){
        if (data.hourly.precipitation === true || data.hourly.rain === true) {
            console.log('lloverá');
            
        } else {
            console.log('no lloverá');
            
        };
    });
    




