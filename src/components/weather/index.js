import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplayData from "./DisplayData";
import { Skeleton } from "antd";

// const weatherData = {
//   data: [
//     {
//       moonrise_ts: 1653065479,
//       wind_cdir: "SE",
//       rh: 75,
//       pres: 848.6,
//       high_temp: 28.2,
//       sunset_ts: 1653051879,
//       ozone: 290.6,
//       moon_phase: 0.785856,
//       wind_gust_spd: 3.1,
//       snow_depth: 0,
//       clouds: 69,
//       ts: 1653030060,
//       sunrise_ts: 1653002922,
//       app_min_temp: 16.3,
//       wind_spd: 2.4,
//       pop: 80,
//       wind_cdir_full: "southeast",
//       slp: 1005,
//       moon_phase_lunation: 0.65,
//       valid_date: "2022-05-20",
//       app_max_temp: 27.4,
//       vis: 19.907,
//       dewpt: 14,
//       snow: 0,
//       uv: 0,
//       weather: {
//         icon: "r02d",
//         code: 501,
//         description: "Moderate rain",
//       },
//       wind_dir: 132,
//       max_dhi: null,
//       clouds_hi: 15,
//       precip: 12.4375,
//       low_temp: 15.9,
//       max_temp: 28.2,
//       moonset_ts: 1653016675,
//       datetime: "2022-05-20",
//       temp: 19.1,
//       min_temp: 15.9,
//       clouds_mid: 69,
//       clouds_low: 28,
//     },
//     {
//       moonrise_ts: 1653155253,
//       wind_cdir: "SSE",
//       rh: 62,
//       pres: 846.6,
//       high_temp: 30.2,
//       sunset_ts: 1653138313,
//       ozone: 290.5,
//       moon_phase: 0.677647,
//       wind_gust_spd: 2.8,
//       snow_depth: 0,
//       clouds: 62,
//       ts: 1653073260,
//       sunrise_ts: 1653089295,
//       app_min_temp: 15.7,
//       wind_spd: 1.9,
//       pop: 90,
//       wind_cdir_full: "south-southeast",
//       slp: 1002,
//       moon_phase_lunation: 0.68,
//       valid_date: "2022-05-21",
//       app_max_temp: 28.6,
//       vis: 21.414,
//       dewpt: 12.7,
//       snow: 0,
//       uv: 10.2,
//       weather: {
//         icon: "t03d",
//         code: 202,
//         description: "Thunderstorm with heavy rain",
//       },
//       wind_dir: 147,
//       max_dhi: null,
//       clouds_hi: 28,
//       precip: 24.4375,
//       low_temp: 15.4,
//       max_temp: 30.2,
//       moonset_ts: 1653107192,
//       datetime: "2022-05-21",
//       temp: 21.2,
//       min_temp: 15.4,
//       clouds_mid: 60,
//       clouds_low: 15,
//     },
//     {
//       moonrise_ts: 1653158118,
//       wind_cdir: "S",
//       rh: 68,
//       pres: 845.6,
//       high_temp: 26.8,
//       sunset_ts: 1653224747,
//       ozone: 292.7,
//       moon_phase: 0.562111,
//       wind_gust_spd: 2.4,
//       snow_depth: 0,
//       clouds: 79,
//       ts: 1653159660,
//       sunrise_ts: 1653175670,
//       app_min_temp: 15.7,
//       wind_spd: 2,
//       pop: 85,
//       wind_cdir_full: "south",
//       slp: 1001.3,
//       moon_phase_lunation: 0.71,
//       valid_date: "2022-05-22",
//       app_max_temp: 26.2,
//       vis: 20.092,
//       dewpt: 13.4,
//       snow: 0,
//       uv: 7.2,
//       weather: {
//         icon: "r03d",
//         code: 502,
//         description: "Heavy rain",
//       },
//       wind_dir: 175,
//       max_dhi: null,
//       clouds_hi: 54,
//       precip: 19.9375,
//       low_temp: 15.3,
//       max_temp: 26.8,
//       moonset_ts: 1653197587,
//       datetime: "2022-05-22",
//       temp: 19.9,
//       min_temp: 15.3,
//       clouds_mid: 62,
//       clouds_low: 22,
//     },
//     {
//       moonrise_ts: 1653246956,
//       wind_cdir: "S",
//       rh: 69,
//       pres: 847.5,
//       high_temp: 24.6,
//       sunset_ts: 1653311180,
//       ozone: 290.3,
//       moon_phase: 0.446638,
//       wind_gust_spd: 1.6,
//       snow_depth: 0,
//       clouds: 57,
//       ts: 1653246060,
//       sunrise_ts: 1653262045,
//       app_min_temp: 16.2,
//       wind_spd: 1.4,
//       pop: 65,
//       wind_cdir_full: "south",
//       slp: 1003.5,
//       moon_phase_lunation: 0.75,
//       valid_date: "2022-05-23",
//       app_max_temp: 23.9,
//       vis: 24.013,
//       dewpt: 13.6,
//       snow: 0,
//       uv: 7.7,
//       weather: {
//         icon: "r02d",
//         code: 501,
//         description: "Moderate rain",
//       },
//       wind_dir: 175,
//       max_dhi: null,
//       clouds_hi: 24,
//       precip: 5.25,
//       low_temp: 16.4,
//       max_temp: 24.6,
//       moonset_ts: 1653287776,
//       datetime: "2022-05-23",
//       temp: 19.7,
//       min_temp: 15.8,
//       clouds_mid: 50,
//       clouds_low: 21,
//     },
//     {
//       moonrise_ts: 1653335484,
//       wind_cdir: "S",
//       rh: 65,
//       pres: 849.9,
//       high_temp: 24.7,
//       sunset_ts: 1653397613,
//       ozone: 286.4,
//       moon_phase: 0.337278,
//       wind_gust_spd: 1.5,
//       snow_depth: 0,
//       clouds: 47,
//       ts: 1653332460,
//       sunrise_ts: 1653348423,
//       app_min_temp: 16.4,
//       wind_spd: 1.3,
//       pop: 45,
//       wind_cdir_full: "south",
//       slp: 1006.1,
//       moon_phase_lunation: 0.78,
//       valid_date: "2022-05-24",
//       app_max_temp: 24.2,
//       vis: 22.978,
//       dewpt: 13.1,
//       snow: 0,
//       uv: 3.6,
//       weather: {
//         icon: "r01d",
//         code: 500,
//         description: "Light rain",
//       },
//       wind_dir: 187,
//       max_dhi: null,
//       clouds_hi: 40,
//       precip: 2.5625,
//       low_temp: 16.9,
//       max_temp: 24.7,
//       moonset_ts: 1653377762,
//       datetime: "2022-05-24",
//       temp: 19.9,
//       min_temp: 16.4,
//       clouds_mid: 34,
//       clouds_low: 2,
//     },
//     {
//       moonrise_ts: 1653423814,
//       wind_cdir: "S",
//       rh: 56,
//       pres: 849.8,
//       high_temp: 29,
//       sunset_ts: 1653484046,
//       ozone: 281.8,
//       moon_phase: 0.238687,
//       wind_gust_spd: 1.5,
//       snow_depth: 0,
//       clouds: 17,
//       ts: 1653418860,
//       sunrise_ts: 1653434801,
//       app_min_temp: 16.9,
//       wind_spd: 1.6,
//       pop: 0,
//       wind_cdir_full: "south",
//       slp: 1005.8,
//       moon_phase_lunation: 0.82,
//       valid_date: "2022-05-25",
//       app_max_temp: 28.3,
//       vis: 24.128,
//       dewpt: 12.3,
//       snow: 0,
//       uv: 11.4,
//       weather: {
//         icon: "c02d",
//         code: 801,
//         description: "Few clouds",
//       },
//       wind_dir: 186,
//       max_dhi: null,
//       clouds_hi: 12,
//       precip: 0,
//       low_temp: 18.9,
//       max_temp: 29,
//       moonset_ts: 1653467594,
//       datetime: "2022-05-25",
//       temp: 21.8,
//       min_temp: 16.9,
//       clouds_mid: 10,
//       clouds_low: 2,
//     },
//     {
//       moonrise_ts: 1653512043,
//       wind_cdir: "SSW",
//       rh: 49,
//       pres: 847.3,
//       high_temp: 30.6,
//       sunset_ts: 1653570478,
//       ozone: 279.9,
//       moon_phase: 0.154346,
//       wind_gust_spd: 1.7,
//       snow_depth: 0,
//       clouds: 42,
//       ts: 1653505260,
//       sunrise_ts: 1653521181,
//       app_min_temp: 19,
//       wind_spd: 1.6,
//       pop: 0,
//       wind_cdir_full: "south-southwest",
//       slp: 1001.8,
//       moon_phase_lunation: 0.85,
//       valid_date: "2022-05-26",
//       app_max_temp: 29.2,
//       vis: 24.128,
//       dewpt: 12.5,
//       snow: 0,
//       uv: 11.3,
//       weather: {
//         icon: "c03d",
//         code: 803,
//         description: "Broken clouds",
//       },
//       wind_dir: 196,
//       max_dhi: null,
//       clouds_hi: 22,
//       precip: 0,
//       low_temp: 20.5,
//       max_temp: 30.6,
//       moonset_ts: 1653557338,
//       datetime: "2022-05-26",
//       temp: 24.6,
//       min_temp: 18.9,
//       clouds_mid: 21,
//       clouds_low: 0,
//     },
//   ],
//   city_name: "Kathmandu",
//   lon: 85.31,
//   timezone: "Asia/Kathmandu",
//   lat: 27.71,
//   country_code: "NP",
//   state_code: "CR",
// };

const baseURL = `https://api.weatherbit.io/v2.0/forecast/daily?`;

const Weather = ({ searchValue, days }) => {
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchWeatherData = () => {
    setLoading(true);
    axios
      .get(
        `${baseURL}city=${searchValue}&days=${days}&key=c64e149728084b5dbddfc51e3b63c963`
      )
      .then((response) => {
        setWeatherData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchWeatherData();
  }, [searchValue, days]);
  return (
    <Skeleton active={true} loading={loading}>
      <DisplayData weatherData={weatherData} />
    </Skeleton>
  );
};

export default Weather;