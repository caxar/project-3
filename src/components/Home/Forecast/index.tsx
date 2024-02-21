import React from "react";

const Forecast = () => {
  return (
    <div className="forecast bg-sidebar_color w-[23%] h-[350px] py-5 px-5 rounded-2xl">
      <div className="forecast-title mb-3 text-[18px] font-bold">
        Прогноз на 5 дней
      </div>
      <div className="forecast-wrapper flex flex-col">
        <div className="forecast-wrapper__item flex items-center justify-between">
          <div className="forecast-item__day">Ср, Февраль 21</div>
          <div className="forecast-item__block flex items-center w-[110px] ">
            <div className="item-block__img">
              <img
                className="w-[100%]"
                src="https://openweathermap.org/img/wn/09n@2x.png"
                alt=""
              />
            </div>
            <div className="item-block__text text-[30px] font-bold">
              5<span className="text-[20px]">°C</span>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="forecast-wrapper__item flex items-center justify-between">
          <div className="forecast-item__day">Ср, Февраль 21</div>
          <div className="forecast-item__block flex items-center w-[110px]">
            <div className="item-block__img">
              <img
                className="w-[100%]"
                src="https://openweathermap.org/img/wn/09n@2x.png"
                alt=""
              />
            </div>
            <div className="item-block__text text-[30px] font-bold">
              5<span className="text-[20px]">°C</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
