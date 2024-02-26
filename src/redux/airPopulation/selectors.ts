import { RootState } from "../store";

//Селектор
// Что бы типизировать глобальный state импортировал Глобальный тип всех Reducer /RootState
export const selectAir = (state: RootState) => state.air;
