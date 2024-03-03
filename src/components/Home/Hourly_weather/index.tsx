import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { useDispatch, useSelector } from "react-redux";
import { selectHourForecast } from "../../../redux/hourForecast/selectors";
import { formatTemp } from "../../../utils/formatTemp";
import { formatDate } from "../../../utils/formatDate";
import { formatTime } from "../../../utils/FormatTime";
import { nanoid } from "nanoid";

const HourlyWeather = () => {
  const data = useSelector(selectHourForecast);

  const dataItem = data?.entitiesHour?.list;

  return (
    <div className="hourly-weather w-[75%] py-5 ">
      <div className="hourly-weather__title text-[22px] font-bold mb-3">
        Прогноз на неделю
      </div>

      <div className="hourly-weather__wrapper ">
        {/* <div
            className="weather-wrapper__item bg-sidebar_color rounded-2xl py-2 px-3 w-[100px]
         flex flex-col items-center"
          >
            <div className="weather-item__time font-bold text-[20px]">
              20:00
            </div>
            <div className="weather-item__img">
              <img src="	https://openweathermap.org/img/wn/11d@2x.png" alt="" />
            </div>
            <div className="weather-item__temp text-[20px] font-bold">
              5<span className="text-[16px]">°C</span>
            </div>
          </div> */}

        <Swiper
          modules={[Navigation]}
          slidesPerView={6}
          spaceBetween={30}
          onSlideChange={() => console.log("slide change")}
        >
          {dataItem?.map((forecast: any) => (
            <SwiperSlide key={nanoid()}>
              <div
                className="weather-wrapper__item bg-sidebar_color rounded-2xl py-2 px-3 w-[140px]
               flex flex-col items-center"
              >
                <div className="weather-item__date font-medium">
                  {formatDate(forecast?.dt)}
                </div>
                <div className="weather-item__time font-bold">
                  {formatTime(forecast?.dt_txt)}
                </div>
                <div className="weather-item__img">
                  <img
                    src={`https://openweathermap.org/img/wn/${forecast?.weather[0]?.icon}@2x.png`}
                    alt=""
                  />
                </div>
                <div className="weather-item__temp text-[20px] font-bold">
                  {formatTemp(forecast?.main?.temp)}
                  <span className="text-[16px]">°C</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {}
      </div>
    </div>
  );
};

export default HourlyWeather;
