import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchWeatherCity } from "./types";
import axios from "axios";

export const fetchWeathersAction = createAsyncThunk(
  "weather/fetchWeather",
  async ({ lat, lon }: fetchWeatherCity) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&lang=ru&units=metric`
    );
    return response.data;
  }
);
