import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CityType } from "../types";

interface CityState {
  cities: CityType[];
}

const initialState: CityState = {
  cities: []
};

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    setCities(state, action: PayloadAction<CityType[]>) {
      state.cities = action.payload;
    },
  },
});

export const { setCities } = citiesSlice.actions;
export default citiesSlice.reducer;