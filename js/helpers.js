export const getWeatherIcon = (cod, hourData) => {
    const iconObject = codeWeather.find((weather) => weather.cod === cod);
    if (hourData < 21) {
      return iconObject.day.image;
    } else {
      return iconObject.night.image;
    }
  };
  
  const codeWeather = [
    {
      cod: 0,
      day: {
        description: "Sunny",
        image: "http://openweathermap.org/img/wn/01d@2x.png",
      },
      night: {
        description: "Clear",
        image: "http://openweathermap.org/img/wn/01n@2x.png",
      },
    },
    {
      cod: 1,
      day: {
        description: "Mainly Sunny",
        image: "http://openweathermap.org/img/wn/01d@2x.png",
      },
      night: {
        description: "Mainly Clear",
        image: "http://openweathermap.org/img/wn/01n@2x.png",
      },
    },
    {
      cod: 2,
      day: {
        description: "Partly Cloudy",
        image: "http://openweathermap.org/img/wn/02d@2x.png",
      },
      night: {
        description: "Partly Cloudy",
        image: "http://openweathermap.org/img/wn/02n@2x.png",
      },
    },
    {
      cod: 3,
      day: {
        description: "Cloudy",
        image: "http://openweathermap.org/img/wn/03d@2x.png",
      },
      night: {
        description: "Cloudy",
        image: "http://openweathermap.org/img/wn/03n@2x.png",
      },
    },
    {
      cod: 45,
      day: {
        description: "Foggy",
        image: "http://openweathermap.org/img/wn/50d@2x.png",
      },
      night: {
        description: "Foggy",
        image: "http://openweathermap.org/img/wn/50n@2x.png",
      },
    },
    {
      cod: 48,
      day: {
        description: "Rime Fog",
        image: "http://openweathermap.org/img/wn/50d@2x.png",
      },
      night: {
        description: "Rime Fog",
        image: "http://openweathermap.org/img/wn/50n@2x.png",
      },
    },
    {
      cod: 51,
      day: {
        description: "Light Drizzle",
        image: "http://openweathermap.org/img/wn/09d@2x.png",
      },
      night: {
        description: "Light Drizzle",
        image: "http://openweathermap.org/img/wn/09n@2x.png",
      },
    },
    {
      cod: 53,
      day: {
        description: "Drizzle",
        image: "http://openweathermap.org/img/wn/09d@2x.png",
      },
      night: {
        description: "Drizzle",
        image: "http://openweathermap.org/img/wn/09n@2x.png",
      },
    },
    {
      cod: 55,
      day: {
        description: "Heavy Drizzle",
        image: "http://openweathermap.org/img/wn/09d@2x.png",
      },
      night: {
        description: "Heavy Drizzle",
        image: "http://openweathermap.org/img/wn/09n@2x.png",
      },
    },
    {
      cod: 56,
      day: {
        description: "Light Freezing Drizzle",
        image: "http://openweathermap.org/img/wn/09d@2x.png",
      },
      night: {
        description: "Light Freezing Drizzle",
        image: "http://openweathermap.org/img/wn/09n@2x.png",
      },
    },
    {
      cod: 57,
      day: {
        description: "Freezing Drizzle",
        image: "http://openweathermap.org/img/wn/09d@2x.png",
      },
      night: {
        description: "Freezing Drizzle",
        image: "http://openweathermap.org/img/wn/09n@2x.png",
      },
    },
    {
      cod: 61,
      day: {
        description: "Light Rain",
        image: "http://openweathermap.org/img/wn/10d@2x.png",
      },
      night: {
        description: "Light Rain",
        image: "http://openweathermap.org/img/wn/10n@2x.png",
      },
    },
    {
      cod: 63,
      day: {
        description: "Rain",
        image: "http://openweathermap.org/img/wn/10d@2x.png",
      },
      night: {
        description: "Rain",
        image: "http://openweathermap.org/img/wn/10n@2x.png",
      },
    },
    {
      cod: 65,
      day: {
        description: "Heavy Rain",
        image: "http://openweathermap.org/img/wn/10d@2x.png",
      },
      night: {
        description: "Heavy Rain",
        image: "http://openweathermap.org/img/wn/10n@2x.png",
      },
    },
    {
      cod: 66,
      day: {
        description: "Light Freezing Rain",
        image: "http://openweathermap.org/img/wn/10d@2x.png",
      },
      night: {
        description: "Light Freezing Rain",
        image: "http://openweathermap.org/img/wn/10n@2x.png",
      },
    },
    {
      cod: 67,
      day: {
        description: "Freezing Rain",
        image: "http://openweathermap.org/img/wn/10d@2x.png",
      },
      night: {
        description: "Freezing Rain",
        image: "http://openweathermap.org/img/wn/10n@2x.png",
      },
    },
    {
      cod: 71,
      day: {
        description: "Light Snow",
        image: "http://openweathermap.org/img/wn/13d@2x.png",
      },
      night: {
        description: "Light Snow",
        image: "http://openweathermap.org/img/wn/13n@2x.png",
      },
    },
    {
      cod: 73,
      day: {
        description: "Snow",
        image: "http://openweathermap.org/img/wn/13d@2x.png",
      },
      night: {
        description: "Snow",
        image: "http://openweathermap.org/img/wn/13n@2x.png",
      },
    },
    {
      cod: 75,
      day: {
        description: "Heavy Snow",
        image: "http://openweathermap.org/img/wn/13d@2x.png",
      },
      night: {
        description: "Heavy Snow",
        image: "http://openweathermap.org/img/wn/13n@2x.png",
      },
    },
    {
      cod: 77,
      day: {
        description: "Snow Grains",
        image: "http://openweathermap.org/img/wn/13d@2x.png",
      },
      night: {
        description: "Snow Grains",
        image: "http://openweathermap.org/img/wn/13n@2x.png",
      },
    },
    {
      cod: 80,
      day: {
        description: "Light Showers",
        image: "http://openweathermap.org/img/wn/09d@2x.png",
      },
      night: {
        description: "Light Showers",
        image: "http://openweathermap.org/img/wn/09n@2x.png",
      },
    },
    {
      cod: 81,
      day: {
        description: "Showers",
        image: "http://openweathermap.org/img/wn/09d@2x.png",
      },
      night: {
        description: "Showers",
        image: "http://openweathermap.org/img/wn/09n@2x.png",
      },
    },
    {
      cod: 82,
      day: {
        description: "Heavy Showers",
        image: "http://openweathermap.org/img/wn/09d@2x.png",
      },
      night: {
        description: "Heavy Showers",
        image: "http://openweathermap.org/img/wn/09n@2x.png",
      },
    },
    {
      cod: 85,
      day: {
        description: "Light Snow Showers",
        image: "http://openweathermap.org/img/wn/13d@2x.png",
      },
      night: {
        description: "Light Snow Showers",
        image: "http://openweathermap.org/img/wn/13n@2x.png",
      },
    },
    {
      cod: 86,
      day: {
        description: "Snow Showers",
        image: "http://openweathermap.org/img/wn/13d@2x.png",
      },
      night: {
        description: "Snow Showers",
        image: "http://openweathermap.org/img/wn/13n@2x.png",
      },
    },
    {
      cod: 95,
      day: {
        description: "Thunderstorm",
        image: "http://openweathermap.org/img/wn/11d@2x.png",
      },
      night: {
        description: "Thunderstorm",
        image: "http://openweathermap.org/img/wn/11n@2x.png",
      },
    },
    {
      cod: 96,
      day: {
        description: "Light Thunderstorms With Hail",
        image: "http://openweathermap.org/img/wn/11d@2x.png",
      },
      night: {
        description: "Light Thunderstorms With Hail",
        image: "http://openweathermap.org/img/wn/11n@2x.png",
      },
    },
    {
      cod: 99,
      day: {
        description: "Thunderstorm With Hail",
        image: "http://openweathermap.org/img/wn/11d@2x.png",
      },
      night: {
        description: "Thunderstorm With Hail",
        image: "http://openweathermap.org/img/wn/11n@2x.png",
      },
    },
  ];