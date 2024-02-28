import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import getFavItem from "../../utils/getFavItem";
import { FavItem, FavSliceState } from "./types";

const initialState = {
  items: getFavItem(),
} as FavSliceState;

export const favSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    // При добавлении объекта пицца проверяем если были клик на один и тотже и у них
    // совпадают id тогда в переменную count добавляем 1 + 1 + 1....
    // иначе другой продукт тогда в count +1
    addFav: (state, action: PayloadAction<FavItem>) => {
      const findItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
    },
    removeFav: (state, action: PayloadAction<string | number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearFavItems: (state) => {
      state.items = [];
    },
  },
});

export const { addFav, removeFav, clearFavItems } = favSlice.actions;

export default favSlice.reducer;
