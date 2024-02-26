import { createSlice } from "@reduxjs/toolkit";
import { Status } from "./types";
import { fetchHourForecast } from "./asyncActions";

const initialState = {
  entitiesHour: [],
  cityForecast: "Sevastopol",
  lat: 44.5, // default позиция
  lon: 33.5333, // default позиция
  statusHourForecast: Status.Pending, // pending | succeeded | failed
};

export const hourForecastSlice = createSlice({
  name: "hourForecast",
  initialState,
  reducers: {
    setCityHourLocation: (state, action) => {
      state.lat = action.payload.latitude;
      state.lon = action.payload.longitude;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchHourForecast.pending, (state) => {
      state.statusHourForecast = Status.Pending;
    });
    builder.addCase(fetchHourForecast.fulfilled, (state, action) => {
      state.entitiesHour = action.payload;
      state.statusHourForecast = Status.Succeeded;
    });
    builder.addCase(fetchHourForecast.rejected, (state) => {
      state.statusHourForecast = Status.Failed;
      state.entitiesHour = [];
    });
  },
});

export const { setCityHourLocation } = hourForecastSlice.actions;

export default hourForecastSlice.reducer;
