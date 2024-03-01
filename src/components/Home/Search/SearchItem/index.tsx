import React from "react";

interface SearcProps {
  data: {
    coord: any;
    id: number;
    main: {
      temp: number;
    };
    weather: [
      {
        description: string;
        icon: string;
      }
    ];
    name: string;
    sys: {
      country: string;
    };
  };
  onClick: (a: number, b: number) => void;
}

const SearchItem = ({ data, onClick }: SearcProps) => {
  const handleClick = () => {
    onClick(data?.coord?.lat, data?.coord?.lon);
  };

  return (
    <div
      onClick={handleClick}
      className="group px-5 search-find__item flex justify-between cursor-pointer items-center hover:bg-blue-600 transition ease-in-out"
    >
      <div className="find__item-left font-bold group-hover:text-slate-300 flex items-center gap-2">
        {data?.name}, {data?.sys?.country === "UA" ? "RU" : data?.sys?.country}
        <img
          src={`https://openweathermap.org/images/flags/${(data?.sys
            ?.country === "UA"
            ? "RU"
            : data?.sys?.country
          ).toLowerCase()}.png`}
          alt=""
        />
      </div>
      <div className="find__item-right flex items-center">
        <div className="item-right__tex">{data?.weather[0]?.description}</div>
        <div className="item-right__img w-[50px]">
          <img
            className="w-[100%]"
            src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
