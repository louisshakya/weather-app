import axios from "axios";

const url = `https://nominatim.openstreetmap.org/?addressdetails=1&format=json&limit=1&q=`;

const weatherURL = `https://api.open-meteo.com/v1/forecast?hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime`;

export const getGeoLocation = async (city) => {
  try {
    const res = await axios.get(url + city);
    return {
      lat: res.data[0].lat,
      lon: res.data[0].lon,
      address: res.data[0].address,
    };
  } catch (e) {
    console.log(e);
  }
};

export const getWeatherInfo = async (lat, lon, timezone) => {
  try {
    return await axios
      .get(weatherURL, {
        params: {
          latitude: lat,
          longitude: lon,
          timezone,
        },
      })
      .then(({ data }) => {
        return {
          current: parseCurrentWeather(data),
          daily: parseDailyWeather(data),
          hourly: parseHourlyWeather(data),
        };
      });
  } catch (e) {
    console.log(e);
  }
};

const parseCurrentWeather = ({ current_weather, daily }) => {
  const {
    temperature: currentTemp,
    windspeed: windSpeed,
    weathercode: iconCode,
  } = current_weather;

  const {
    temperature_2m_max: [maxTemp],
    temperature_2m_min: [minTemp],
    apparent_temperature_max: [maxFeelsLike],
    apparent_temperature_min: [minFeelsLike],
    precipitation_sum: [precip],
  } = daily;
  return {
    currentTemp,
    highTemp: maxTemp,
    lowTemp: minTemp,
    highFeelsLike: maxFeelsLike,
    loweFeelsLike: minFeelsLike,
    windSpeed,
    precip,
    iconCode,
  };
};

const parseDailyWeather = ({ daily }) => {
  return daily.time.map((time, index) => {
    return {
      timestamp: time * 1000,
      iconCode: daily.weathercode[index],
      maxtemp: daily.temperature_2m_max[index],
    };
  });
};

const parseHourlyWeather = ({ hourly, current_weather }) => {
  return hourly.time
    .map((time, index) => {
      return {
        timestamp: time * 1000,
        iconCode: hourly.weathercode[index],
        temp: hourly.temperature_2m[index],
        feelsLike: hourly.apparent_temperature[index],
        windSpeed: hourly.windspeed_10m[index],
        precip: hourly.precipitation[index],
      };
    })
    .filter(({ timestamp }) => timestamp >= current_weather.time * 1000);
};
