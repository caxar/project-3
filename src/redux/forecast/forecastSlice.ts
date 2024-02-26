import { createSlice } from "@reduxjs/toolkit";
import { Status } from "./types";
import { fetchForecast } from "./asyncActions";

const initialState = {
  entitiesForecast: [],
  cityForecast: "Sevastopol",
  lat: 44.5, // default позиция
  lon: 33.5333, // default позиция
  statusForecast: Status.Pending, // pending | succeeded | failed
};

export const forecastSlice = createSlice({
  name: "forecast",
  initialState,
  reducers: {
    setCityForecastLocation: (state, action) => {
      state.lat = action.payload.latitude;
      state.lon = action.payload.longitude;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchForecast.pending, (state) => {
      state.statusForecast = Status.Pending;
    });
    builder.addCase(fetchForecast.fulfilled, (state, action) => {
      state.entitiesForecast = action.payload;
      state.statusForecast = Status.Succeeded;
    });
    builder.addCase(fetchForecast.rejected, (state) => {
      state.statusForecast = Status.Failed;
      state.entitiesForecast = [];
    });
  },
});

export const { setCityForecastLocation } = forecastSlice.actions;

export default forecastSlice.reducer;
