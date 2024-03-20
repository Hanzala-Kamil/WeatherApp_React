import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Weather.css";
import Card from "./Card";

export default function Weather() {
  const [city, setCity] = useState("lahore");
  const [weatherData, setWeatherData] = useState({});

  const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
  const ApiKey = "5f8d758bbacdd93d02768483d3b5dfbf";

  async function fetchUrl() {
    let response = await fetch(`${ApiUrl}${city}&appid=${ApiKey}`);
    let data = await response.json();
    // console.log(data);
    let result = {
      cityNme : data.name,
      feelsLike: data.main.feels_like,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      temp: data.main.temp,
      temp_max: data.main.temp_max,
      temp_min: data.main.temp_min,
    };
    // console.log(result);
    setWeatherData(result);
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetchUrl();
    setCity("");
  }
  function handleInput(e) {
    if (e.target.value !== city){
        setCity(e.target.value);
    }
  }
  useEffect(() => {
    fetchUrl();
    setCity("")
  }, []);

  return (
    <div className="wContainer">
      <h1>Weather Forecast</h1>

      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Search City"
          variant="outlined"
          onChange={handleInput}
          value={city}
        />
        <br />
        <br />
        <Button variant="outlined" type="submit">
          Click
        </Button>
      </form>
      <br />
      <Card weatherData={weatherData} />
    </div>
  );
}