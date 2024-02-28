import { createSlice } from "@reduxjs/toolkit";
import { Status } from "./types";
import { fetchAirsAction } from "../airPopulation/asyncActions";

const initialState = {
  entitiesAir: [],
  cityAir: "Sevastopol",
  lat: 44.5, // default позиция
  lon: 33.5333, // default позиция
  statusAir: Status.Pending, // pending | succeeded | failed
};

export const airSlice = createSlice({
  name: "air",
  initialState,
  reducers: {
    setCityAirLocation: (state, action) => {
      state.lat = action.payload.latitude;
      state.lon = action.payload.longitude;
    },
    setCitySearch: (state, action) => {
      state.lat = action.payload.lat;
      state.lon = action.payload.lon;
      // console.log(action);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchAirsAction.pending, (state) => {
      state.statusAir = Status.Pending;
    });
    builder.addCase(fetchAirsAction.fulfilled, (state, action) => {
      state.entitiesAir = action.payload;
      state.statusAir = Status.Succeeded;
    });
    builder.addCase(fetchAirsAction.rejected, (state) => {
      state.statusAir = Status.Failed;
      state.entitiesAir = [];
    });
  },
});

export const { setCityAirLocation, setCitySearch } = airSlice.actions;

export default airSlice.reducer;
