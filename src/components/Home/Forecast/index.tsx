import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectForecast } from "../../../redux/forecast/selectors";
import { nanoid } from "nanoid";
import { formatDate } from "../../../utils/formatDate";

const Forecast = () => {
  const [letTest, setLetTest] = React.useState([]);
  const dispatch = useDispatch();

  const entitiesForecast = useSelector(selectForecast);

  if (!entitiesForecast) return <></>;

  // const data = entitiesForecast?.entitiesForecast?.list;

  return (
    <div className="forecast bg-sidebar_color w-[23%] h-[100%] py-5 px-5 rounded-2xl">
      <div className="forecast-title mb-3 text-[18px] font-bold">
        Прогноз на 5 дней
      </div>
      <div className="forecast-wrapper flex flex-col">
        {/* {data?.map((item: any) => (
          <div
            key={nanoid()}
            className="forecast-wrapper__item flex items-center justify-between"
          >
            <div className="forecast-item__day">{formatDate(item?.dt)}</div>
            <div className="forecast-item__block flex items-center w-[110px] ">
              <div className="item-block__img">
                <img
                  className="w-[100%]"
                  src={`https://openweathermap.org/img/wn/${item?.weather[0]?.icon}@2x.png`}
                  alt=""
                />
              </div>
              <div className="item-block__text text-[30px] font-bold">
                {item?.main?.temp.toFixed(0)}
                <span className="text-[20px]">°C</span>
              </div>
            </div>
          </div>
        ))} */}
        {/* <div className="forecast-wrapper__item flex items-center justify-between">
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
        </div> */}
      </div>
    </div>
  );
};

export default Forecast;
