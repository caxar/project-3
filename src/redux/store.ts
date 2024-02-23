import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import WeatherReducer from "./weather/weatherSlice";

export const store = configureStore({
  reducer: {
    weather: WeatherReducer,
  },
});

// Глобальный тип всех Reducer
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
