import React from "react";

const styles = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	flexGrow: 1,
  backgroundColor: "white",
  margin: "30px",
  width: "200px",
	height: "400px",
	borderRadius: '10px',
};

const WeatherView = props => {
  const date = new Date();

  return (
    <div style={styles}>
      <h1>{props.cityName}</h1>
      <h2>{date.toDateString()}</h2>
      <h3>Temperature: {props.weather.main.temp} °K</h3>
      <h3>Description: {props.weather.weather[0].description}</h3>
      <h3>
        Max: {props.weather.main.temp_max} °K - Min:{" "}
        {props.weather.main.temp_min} °K
      </h3>
    </div>
  );
};

export default WeatherView;
