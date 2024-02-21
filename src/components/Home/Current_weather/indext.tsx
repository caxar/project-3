import React from "react";

const CurrentWeather = () => {
  return (
    <div className="current-weather bg-sidebar_color w-[23%] h-[350px] py-5 px-5 rounded-2xl">
      <div className="current-weather__temp flex flex-col items-center">
        <div className="heading text-[40px] font-bold">
          6<span className="text-[20px]">°C</span>
        </div>
        <div className="condition font-bold text-[18px]">
          Overcast clouds. Light air
        </div>
      </div>
      <div className="current-weather__img flex justify-center my-3">
        <img
          className="w-[130px]"
          src="https://openweathermap.org/img/wn/04n@2x.png"
          alt=""
        />
      </div>
      <div className="current-weather__date flex items-center gap-2 mb-3">
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
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
          />
        </svg>
        <span className="font-bold">ПН 19, Март</span>
      </div>
      <div className="current-weather__city flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>

        <div className="weather-city__title font-bold">Севастополь, RU</div>
      </div>
    </div>
  );
};

export default CurrentWeather;
