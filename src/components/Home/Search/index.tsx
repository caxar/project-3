import React from "react";
import SearchItem from "./SearchItem";
import { nanoid } from "nanoid";

const Search = () => {
  const [query, setQuery] = React.useState("");
  const [cities, setCities] = React.useState([]);
  const [weatherData, setWeatherData] = React.useState(null);

  const fetchCities = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/find?q=${query}&type=like&appid=8d2fcb9f4a085aba30788b5fb43bea6f`
    );
    const data = await response.json();
    setCities(data?.list);
  };

  const fetchWeather = async (cityId: any) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=8d2fcb9f4a085aba30788b5fb43bea6f`
    );
    const data = await response.json();
    setWeatherData(data);
  };

  const handleCityClick = (cityId: any) => {
    fetchWeather(cityId);
  };

  console.log(weatherData);

  React.useEffect(() => {
    if (query) {
      fetchCities();
    }
  }, [query]);
  return (
    <div className="search relative">
      <div className="search-block relative bg-sidebar_color w-[550px] rounded-full flex items-center">
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
      <ul className="search-find bg-sidebar_color w-[90%] translate-x-7 absolute flex flex-col gap-3">
        {cities?.map((item) => (
          // <li
          //   className="search-find__item"
          //   key={nanoid()}
          //   onClick={() => handleCityClick(item?.id)}
          // >
          //   {item?.name}
          //   {console.log(item)}
          // </li>
          <SearchItem
            key={nanoid()}
            onClick={() => handleCityClick(item?.id)}
            data={item}
          />
        ))}
      </ul>
    </div>
  );
};

export default Search;
