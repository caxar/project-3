import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchHourForecast = createAsyncThunk(
  "hourForecast/fetchourForecast",
  async ({ lat, lon }: { lat: number; lon: number }) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&lang=ru&units=metric`
      );
      if (response.data) {
        return response.data;
      } else {
        throw new Error("Пусто");
      }
    } catch (error) {
      console.error("Hour data:", error);
      throw error;
    }
  }
);
