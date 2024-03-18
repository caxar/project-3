import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectWeather } from "../../redux/weather/selectors";
import { fetchWeathersAction } from "../../redux/weather/asyncActions";
import { fetchAirsAction } from "../../redux/airPopulation/asyncActions";
import { fetchForecast } from "../../redux/forecast/asyncActions";
import { fetchHourForecast } from "../../redux/hourForecast/asyncActions";

import CurrentWeather from "./Current_weather";
import Highlights from "./Highlights";
import Forecast from "./Forecast";
// import HourlyWeather from "./Hourly_weather
import Menu from "./Menu";
import Header from "./Header";

import { Triangle } from "react-loader-spinner";
import HourlyWeather from "./Hourly_weather";
import { setCurrentLocation } from "../../redux/weather/weatherSlice";

const Home = () => {
  // Открыть меню
  const [openMenu, setOpenMenu] = React.useState<boolean>(false);
  // задержка статуса загрузки
  const [loader, setShowLoader] = React.useState<boolean>(true);
  // если получаем данные lat и lon
  const [lattitude, setLattitude] = React.useState<number>();
  const [long, setLong] = React.useState<number>();

  // изменения состояния приложения
  const dispatch = useDispatch();

  const { status, lat, lon }: any = useSelector(selectWeather);

  // полуаем данные прогноза погоды на неделю
  const forecastChange = localStorage.getItem("forecastData");

  // получения координат с favItem первого элемента
  // const loadPointFavItem = () => {
  //   const favItemData = localStorage.getItem("favItem");
  //   const DataParse = JSON.parse(favItemData);
  //   const returnDataParse = DataParse.filter((item: any, index: number) =>
  //     index === 0 ? item : ""
  //   );

  //   DataParse?.map(
  //     (item: {
  //       lat: React.SetStateAction<undefined>;
  //       lon: React.SetStateAction<undefined>;
  //     }) => {
  //       setLattitude(item.lat);
  //       setLong(item.lon);
  //       dispatch(setCurrentLocation(item.lat, item.lon));
  //     }
  //   );
  // };

  // Загрузка данных при изменения координат
  React.useEffect(() => {
    dispatch(fetchWeathersAction({ lat, lon }) as any);
    dispatch(fetchAirsAction({ lat, lon }) as any);
    dispatch(fetchForecast({ lat, lon }) as any);
    dispatch(fetchHourForecast({ lat, lon }) as any);
  }, [lat, lon]);

  React.useEffect(() => {
    if (status === "pending") {
      setShowLoader(true);
      // Задержка status "Pending, succedded"
      setTimeout(() => {
        setShowLoader(false);
      }, 1500);
    }
  }, [status]);

  return (
    <>
      <Header setOpenMenu={setOpenMenu} />
      <div className="weather ">
        <div className="container">
          <div className="weather-wrapper gap-4 flex flex-col justify-center lg:justify-between">
            {loader ? (
              <div className="Loader flex justify-center items-center bg-black bg-opacity-50 fixed top-0 left-0 w-screen h-screen">
                <Triangle
                  visible={true}
                  height="80"
                  width="80"
                  color="#bbd7ec"
                  ariaLabel="triangle-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </div>
            ) : (
              <>
                <div className="weather-wrapper__top flex flex-col items-center gap-4 lg:flex-row md:items-stretch">
                  <CurrentWeather />
                  <Highlights />
                </div>
                <div className="weather-wrapper__bottom mb-10 flex justify-center">
                  {/* <Forecast /> */}
                  {forecastChange === "true" ? <HourlyWeather /> : ""}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {openMenu && <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />}
    </>
  );
};

export default Home;
