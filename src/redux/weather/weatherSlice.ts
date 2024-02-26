import { createSlice } from "@reduxjs/toolkit";
import { Status, weatherSliceState } from "./types";
import { fetchWeathersAction } from "./asyncActions";

const initialState = {
  entities: [],
  search: "",
  city: "Sevastopol", // default город
  lat: 44.5, // default позиция
  lon: 33.5333, // default позиция
  status: Status.Pending, // pending | succeeded | failed
} as unknown as weatherSliceState;

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setCurrentLocation: (state, action) => {
      state.lat = action.payload.latitude;
      state.lon = action.payload.longitude;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchWeathersAction.pending, (state) => {
      state.status = Status.Pending;
    });
    builder.addCase(fetchWeathersAction.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.status = Status.Succeeded;
    });
    builder.addCase(fetchWeathersAction.rejected, (state) => {
      state.status = Status.Failed;
      state.entities = [];
    });
  },
});

export const { setCurrentLocation } = weatherSlice.actions;

export default weatherSlice.reducer;
