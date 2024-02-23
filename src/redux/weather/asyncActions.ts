import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchWeatherCity } from "./types";
import axios from "axios";

export const fetchWeathersAction = createAsyncThunk(
  "weather/fetchWeather",
  async (city: fetchWeatherCity) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8d2fcb9f4a085aba30788b5fb43bea6f&lang=ru&units=metric`
    );
    return response.data;
  }
);
