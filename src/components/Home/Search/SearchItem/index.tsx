import React from "react";

interface SearcProps {
  data: {
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
}

const SearchItem = ({ data }: SearcProps) => {
  return (
    <div className="group px-5 search-find__item flex justify-between cursor-pointer items-center hover:bg-blue-600 transition ease-in-out">
      <div className="find__item-left font-bold group-hover:text-slate-300">
        {data?.name}, {data?.sys?.country === "UA" ? "RU" : data?.sys?.country}
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
