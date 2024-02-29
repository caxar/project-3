import React from "react";
import SearchItem from "./SearchItem";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";

import { fetchWeathersAction } from "../../../redux/weather/asyncActions";

const Search = () => {
  const dispatch = useDispatch();

  // Данные из input
  const [query, setQuery] = React.useState("");
  // Комопнент щагрузки города
  const [cities, setCities] = React.useState([]);

  // Показывать или скрывать предложенные города
  const [showCities, setShowCities] = React.useState(true);

  // Загрузка города при поиске
  const fetchCities = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/find?q=${query}&type=like&appid=8d2fcb9f4a085aba30788b5fb43bea6f`
    );
    const data = await response.json();
    setCities(data?.list);
    setShowCities(true);
  };

  // Передеача координат для оббновление комопнента загрузки данных
  const fetchWeather = async (lat: any, lon: any) => {
    dispatch(fetchWeathersAction({ lat, lon }) as any);
  };

  // при клике запуск функции передачи данных
  const handleCityClick = (lat: any, lon: any) => {
    fetchWeather(lat, lon);
    setShowCities(false);
    setQuery("");
  };

  // При изменении search через input запуск загрузки городов
  React.useEffect(() => {
    if (query) {
      fetchCities();
    }
  }, [query]);

  return (
    <div className="search relative">
      <div className="search-block relative bg-sidebar_color w-[100%] rounded-full flex items-center md:w-[550px]">
        <div className="search-block__icon ml-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <input
          className="bg-transparent w-full h-full py-[10px] pl-[10px] pr-[20px]"
          type="text"
          placeholder="Поиск по городу"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {showCities ? (
        <ul className="search-find bg-sidebar_color w-[90%] translate-x-3 translate-y-[-2px]  absolute flex flex-col gap-3 md:translate-x-7">
          {cities?.map((item) => (
            <SearchItem key={nanoid()} data={item} onClick={handleCityClick} />
          ))}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Search;
