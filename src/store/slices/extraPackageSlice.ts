import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ExtraPackageType } from "../types";

interface ExtraPackagesState {
  extraPackages: ExtraPackageType[];
}

const initialState: ExtraPackagesState = {
  extraPackages: []
};

const extraPackagesSlice = createSlice({
  name: 'extraPackages',
  initialState,
  reducers: {
    setExtraPackages(state, action: PayloadAction<ExtraPackageType[]>) {
      state.extraPackages = action.payload;
    },
  },
});

export const { setExtraPackages } = extraPackagesSlice.actions;
export default extraPackagesSlice.reducer;