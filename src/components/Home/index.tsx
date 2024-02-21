import React from "react";
import CurrentWeather from "./Current_weather/indext";
import Highlights from "./Highlights";
import Forecast from "./Forecast";
import HourlyWeather from "./Hourly_weather";

const Home = () => {
  return (
    <div className="weather">
      <div className="container">
        <div className="weather-wrapper flex flex-col gap-4">
          <div className="weather-wrapper__top flex justify-between">
            <CurrentWeather />
            <Highlights />
          </div>
          <div className="weather-wrapper__bottom mb-10 flex justify-between">
            <Forecast />
            <HourlyWeather />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
