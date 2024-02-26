import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCurrentLocation } from "../../../redux/weather/weatherSlice";
import { setCityAirLocation } from "../../../redux/airPopulation/airSlice";
import { setCityHourLocation } from "../../../redux/hourForecast/hourForecastSlice";
import { setCityForecastLocation } from "../../../redux/forecast/forecastSlice";

const Location = () => {
  const [location, setLocation] = React.useState(null);

  const dispatch = useDispatch();

  // React.useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       setLocation({
  //         lat: position.coords.latitude,
  //         lon: position.coords.longitude,
  //       });
  //       dispatch(setCurrentLocation(position.coords));
  //     });
  //   } else {
  //     console.log("Ошибка геолокации.");
  //   }
  // }, []);

  const getUserLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
        dispatch(setCurrentLocation(position.coords));
        dispatch(setCityAirLocation(position.coords));
        dispatch(setCityHourLocation(position.coords));
        dispatch(setCityForecastLocation(position.coords));
      });
    } else {
      console.log("Ошибка геолокации.");
    }
  };

  return (
    <div className="location" onClick={getUserLocation}>
      <div
        className="location-wrapper flex items-center gap-2 cursor-pointer bg-card_color font-medium text-bg_color
        py-[10px] px-[13px] rounded-full"
      >
        <div className="location-wrapper__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
        </div>
        <div className="location-wrapper__text">Местоположение</div>
      </div>
    </div>
  );
};

export default Location;
