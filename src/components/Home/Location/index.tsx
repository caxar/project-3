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
      console.log("Ошибка геолокации");
    }
  };

  //   group
  // group-hover:text-text_heading transition ease-in-out
  // group-hover:fill-white

  return (
    <div className="location" onClick={getUserLocation}>
      <div
        className="group location-wrapper flex items-center gap-2 cursor-pointer bg-card_color font-medium text-bg_color
        py-[10px] px-[13px] rounded-full hover:bg-grab_color transition ease-in-out"
      >
        <div className="location-wrapper__icon">
          <svg
            className=""
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25Z"
              fill="#000000"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V3.28169C16.9842 3.64113 20.3589 7.01581 20.7183 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H20.7183C20.3589 16.9842 16.9842 20.3589 12.75 20.7183V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V20.7183C7.01581 20.3589 3.64113 16.9842 3.28169 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H3.28169C3.64113 7.01581 7.01581 3.64113 11.25 3.28169V2C11.25 1.58579 11.5858 1.25 12 1.25ZM4.75 12C4.75 16.0041 7.99594 19.25 12 19.25C16.0041 19.25 19.25 16.0041 19.25 12C19.25 7.99594 16.0041 4.75 12 4.75C7.99594 4.75 4.75 7.99594 4.75 12Z"
              fill="#000000"
            />
          </svg>
        </div>
        <div className="location-wrapper__text hidden md:block">
          Местоположение
        </div>
      </div>
    </div>
  );
};

export default Location;
