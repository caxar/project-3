import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { config } from "../../utils/config";

export const fetchAirsAction = createAsyncThunk(
  "air/fetchAir",
  async ({ lat, lon }: { lat: number; lon: number }) => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=8d2fcb9f4a085aba30788b5fb43bea6f`
      );
      if (response.data) {
        return response.data;
      } else {
        throw new Error("Пусто");
      }
    } catch (error) {
      console.error("Air population дата:", error);
      throw error;
    }
  }
);
