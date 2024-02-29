import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectWeather } from "../../redux/weather/selectors";
import { fetchWeathersAction } from "../../redux/weather/asyncActions";
import { fetchAirsAction } from "../../redux/airPopulation/asyncActions";
import { fetchForecast } from "../../redux/forecast/asyncActions";
// import { fetchHourForecast } from "../../redux/hourForecast/asyncActions

import CurrentWeather from "./Current_weather/indext";
import Highlights from "./Highlights";
import Forecast from "./Forecast";
// import HourlyWeather from "./Hourly_weather
import Menu from "./Menu";
import Header from "./Header";
import CurrentWeatherLoader from "./Current_weather/CurrentWeatherLoader";
// import CurrentWeatherLoader from "./Current_weather/CurrentWeatherLoader

const Home = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const dispatch = useDispatch();

  const { status, lat, lon }: any = useSelector(selectWeather);

  React.useEffect(() => {
    dispatch(fetchWeathersAction({ lat, lon }) as any);
    dispatch(fetchAirsAction({ lat, lon }) as any);
    dispatch(fetchForecast({ lat, lon }) as any);
  }, [lat, lon]);

  return (
    <>
      <Header setOpenMenu={setOpenMenu} />
      <div className="weather">
        <div className="container">
          <div className="weather-wrapper gap-4 flex flex-col justify-center lg:justify-between">
            <div className="weather-wrapper__top flex flex-col items-center gap-4 lg:flex-row md:items-baseline">
              {status === "pending" ? (
                <CurrentWeatherLoader />
              ) : (
                <CurrentWeather />
              )}
              <Highlights />
            </div>
            {/* <div className="weather-wrapper__bottom mb-10 flex justify-between"> */}
            {/* <Forecast /> */}
            {/* <HourlyWeather /> */}
            {/* </div> */}
          </div>
        </div>
      </div>
      {openMenu && <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />}
    </>
  );
};

export default Home;
