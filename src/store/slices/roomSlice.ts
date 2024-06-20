import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RoomType } from "../types";

interface RoomsState {
  rooms: RoomType[];
}

const initialState: RoomsState = {
  rooms: []
};

const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    setRooms(state, action: PayloadAction<RoomType[]>) {
      state.rooms = action.payload;
    },
  },
});

export const { setRooms } = roomsSlice.actions;
export default roomsSlice.reducer;