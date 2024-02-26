import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchWeatherCity } from "./types";
import axios from "axios";

export const fetchWeathersAction = createAsyncThunk(
  "weather/fetchWeather",
  async ({ lat, lon }: fetchWeatherCity) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8d2fcb9f4a085aba30788b5fb43bea6f&lang=ru&units=metric`
    );
    return response.data;
  }
);
