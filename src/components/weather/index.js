import React, { useEffect, useState } from "react";
import DisplayData from "./DisplayData";
import { Skeleton } from "antd";
import { getGeoLocation, getWeatherInfo } from "./Api";

const Weather = ({ searchValue, checked }) => {
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(false);
  const [coordinates, setCoordinates] = useState({
    lat: "27.708317",
    lon: "85.3205817",
  });
  const [address, setAddress] = useState({});

  useEffect(() => {
    getGeoLocation(searchValue)
      .then((res) => {
        setCoordinates({ lat: res.lat, lon: res.lon });
        setAddress(res.address);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [searchValue]);

  useEffect(() => {
    getWeatherInfo(
      coordinates?.lat,
      coordinates?.lon,
      Intl.DateTimeFormat().resolvedOptions().timeZone
    )
      .then((res) => {
        setLoading(true);
        setWeatherData(res);
      })
      .then(() => {
        setLoading(false);
      });
  }, [coordinates.lat, coordinates.lon]);
  return (
    <Skeleton active={true} loading={loading}>
      <DisplayData
        weatherData={weatherData}
        address={address}
        checked={checked}
      />
    </Skeleton>
  );
};

export default Weather;
