import { BranchType } from "../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BranchesState {
  branches: BranchType[];
}

const initialState: BranchesState = {
  branches: []
};

const branchesSlice = createSlice({
  name: 'branches',
  initialState,
  reducers: {
    setBranches(state, action: PayloadAction<BranchType[]>) {
      state.branches = action.payload;
    },
  },
});

export const { setBranches } = branchesSlice.actions;
export default branchesSlice.reducer;