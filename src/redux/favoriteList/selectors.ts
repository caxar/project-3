import { RootState } from "../store";

//Селектор
// Что бы типизировать глобальный state импортировал Глобальный тип всех Reducer /RootState
export const selectFav = (state: RootState) => state.fav;
