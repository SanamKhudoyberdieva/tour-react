import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AirwayType } from "../types";

interface AirwaysState {
  airways: AirwayType[];
}

const initialState: AirwaysState = {
  airways: []
};

const airwaysSlice = createSlice({
  name: 'airways',
  initialState,
  reducers: {
    setAirways(state, action: PayloadAction<AirwayType[]>) {
      state.airways = action.payload;
    },
  },
});

export const { setAirways } = airwaysSlice.actions;
export default airwaysSlice.reducer;