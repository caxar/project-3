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

const Home = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const [loader, setShowLoader] = React.useState(true);

  const dispatch = useDispatch();

  const { status, lat, lon }: any = useSelector(selectWeather);

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
      }, 1000);
    }
  }, [status]);

  const forecastChange = localStorage.getItem("forecastData");

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
