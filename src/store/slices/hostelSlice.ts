import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HostelType } from "../types/hostel/hostel";

interface HostelState {
  hostels: HostelType[];
}

const initialState: HostelState = {
  hostels: []
};

const hostelsSlice = createSlice({
  name: 'hostels',
  initialState,
  reducers: {
    setHostels(state, action: PayloadAction<HostelType[]>) {
      state.hostels = action.payload;
    },
  },
});

export const { setHostels } = hostelsSlice.actions;
export default hostelsSlice.reducer;