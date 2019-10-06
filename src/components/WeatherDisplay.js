import React, { useEffect, useState } from "react";
import WeatherView from "./WeatherView";
import WeatherSearchCard from "./WeatherSearch";

const url = "https://api.openweathermap.org/data/2.5/weather?";
const APP_IDKEY = "988cf3c73e77c44bc06bf7c758b758d0";

const styleDiv = {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'center',
	margin: '100px',
	height: '500px'
}

const WeatherDisplay = () => {
  const [weather, setWeather] = useState({ main: {}, weather: [0] });
  const [cityName, setCityName] = useState("London");
  const [countryCode, setCountryCode] = useState("uk");

  useEffect(() => {
    getCurrentWeather(cityName, countryCode);
  }, []);

  const getCurrentWeather = async (cityName, countryCode) => {
    const response = await fetch(
      url + "q=" + cityName + "," + countryCode + "&APPID=" + APP_IDKEY
    );
    const data = response.status === 200 ? await response.json() : weather;
    // console.log(data)
    setWeather(data);
  };

  const changeCity = eventCity => {
    const newCity = eventCity.target.value;
    setCityName(newCity);
  };

  const changeCountry = eventCountry => {
    const newCountry = eventCountry.target.value;
    setCountryCode(newCountry);
  };

  const callAPI = () => {
    getCurrentWeather(cityName, countryCode);
  };

  return (
    <div style={styleDiv}>
      <WeatherSearchCard
        changeCity={changeCity}
        changeCountry={changeCountry}
        callAPI={callAPI}
      />
      <WeatherView
        cityName={cityName}
        countryCode={countryCode}
        weather={weather}
      />
    </div>
  );
};

export default WeatherDisplay;
