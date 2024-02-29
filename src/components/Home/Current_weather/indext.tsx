import React from "react";
import { formatDate } from "../../../utils/formatDate";
import { selectWeather } from "../../../redux/weather/selectors";
import { useDispatch, useSelector } from "react-redux";
import { addFav } from "../../../redux/favoriteList/favSlice";
import { FavItem } from "../../../redux/favoriteList/types";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Curent.css";

interface WeatherProps {
  coord: {
    lon: number;
    lat: number;
  };
  dt: number;
  id: number;
  name: "string";
  sys: {
    country: "string";
  };
  main: {
    temp: number;
  };
  weather: [
    {
      description: "string";
      icon: "string";
    }
  ];
}

const CurrentWeather: React.FC = () => {
  const dispatch = useDispatch();

  const notify = () => toast.success("Успешно добавленно");

  const { entities } = useSelector(selectWeather);

  const [addFavInfo, setAddFavInfo] = React.useState<boolean>(false);

  // деструктурируем данные
  const { id, weather, main, name, sys, dt, coord }: any = entities;

  const addFaforite = () => {
    // ограничения на добавления с помощью типизации favItem
    const item: FavItem = {
      id: id,
      title: name,
      lat: coord?.lat,
      lon: coord?.lon,
    };
    dispatch(addFav(item));
    showFavAdd();
  };

  // Функция запускается при добавлении favorite
  const showFavAdd = () => {
    // setAddFavInfo(true);
    // setTimeout(() => setAddFavInfo(false), 3000);
    notify();
  };

  // проверка что бы не было ошибки при обращении к [0]
  if (!weather) return <></>;

  return (
    <div className="current-weather bg-sidebar_color w-[100%] h-[100%] py-5 px-5 rounded-2xl lg:w-[23%]">
      <div
        onClick={() => addFaforite()}
        className="group current-weather__add flex justify-center items-center gap-2 cursor-pointer font-medium
        bg-card_color text-bg_color
        py-[5px] px-[10px] rounded-full hover:bg-grab_color transition ease-in-out"
      >
        <div className="hidden xl:block ">В избранное</div>
        <svg
          className=""
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="current-weather__temp flex flex-col items-center">
        <div className="heading text-[40px] font-bold">
          {main?.temp?.toFixed(0)}
          <span className="text-[20px]">°C</span>
        </div>
        <div className="condition font-bold text-[18px]">
          {weather[0]?.description}
        </div>
      </div>
      <div className="current-weather__img flex justify-center my-3">
        <img
          className="w-[130px]"
          src={`https://openweathermap.org/img/wn/${weather[0]?.icon}@2x.png`}
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
        {/* ПН 19, Март  формат вывода*/}
        <span className="font-bold">{formatDate(dt)}</span>
      </div>
      <div className="current-weather__city flex items-center gap-2 mb-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
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

        <div className="weather-city__title font-bold">
          {name}, {sys?.country === "UA" ? "RU" : sys?.country}
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {/* {addFavInfo && (
        <div className={`fixed-fav__add ${addFavInfo ? "fixed" : ""}`}>
          <p>Добавлен Город:</p>
          <span>{name}</span>
        </div>
      )} */}
    </div>
  );
};

export default CurrentWeather;
