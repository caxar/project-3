import { createSlice } from "@reduxjs/toolkit";
import { Status, weatherSliceState } from "./types";
import { fetchWeathersAction } from "./asyncActions";

const initialState = {
  entities: [],
  search: "",
  city: "Sevastopol",
  status: Status.Pending, // pending | succeeded | failed
} as weatherSliceState;

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setCity: (state, action) => {
      state.search = action.payload;
    },
    changeSearch: (state, action) => {
      state.search = action.payload;
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

export const { setCity, changeSearch } = weatherSlice.actions;

export default weatherSlice.reducer;
