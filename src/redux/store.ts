import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import WeatherReducer from "./weather/weatherSlice";
import AirReducer from "./airPopulation/airSlice";
import ForecastReducer from "./forecast/forecastSlice";
import HourForecastReducer from "./hourForecast/hourForecastSlice";
import FavoriteReducer from "./favoriteList/favSlice";

export const store = configureStore({
  reducer: {
    weather: WeatherReducer,
    air: AirReducer,
    forecast: ForecastReducer,
    hourForecast: HourForecastReducer,
    fav: FavoriteReducer,
  },
});

// Глобальный тип всех Reducer
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
