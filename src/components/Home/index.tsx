import React from "react";
import CurrentWeather from "./Current_weather/indext";
import Highlights from "./Highlights";

const Home = () => {
  return (
    <div className="weather">
      <div className="container">
        <div className="weather-wrapper">
          <div className="weather-wrapper__top flex justify-between">
            <CurrentWeather />
            <Highlights />
          </div>
          <div className="weather-wrapper__bottom"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
