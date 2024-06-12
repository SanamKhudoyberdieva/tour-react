import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AdminMeType } from "../types/admin/me";

const initialState: AdminMeType = {
  created_at: "",
  deleted_at: null,
  id: 0,
  is_active: false,
  last_visit: "",
  role: null,
  role_id: null,
  updated_at: null,
  username: "",
  full_name: "",
  phone: "",
  is_deleted: null,
  moduleItemKeys: [],
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setAdmin(state, action: PayloadAction<AdminMeType>) {
      state.created_at = action.payload.created_at;
      state.deleted_at = action.payload.deleted_at;
      state.id = action.payload.id;
      state.is_active = action.payload.is_active;
      state.last_visit = action.payload.last_visit;
      state.role = action.payload.role;
      state.role_id = action.payload.role_id;
      state.updated_at = action.payload.updated_at;
      state.username = action.payload.username;
      state.full_name = action.payload.full_name;
      state.phone = action.payload.phone;
      state.is_deleted = action.payload.is_deleted;
      state.moduleItemKeys = action.payload.moduleItemKeys;
    },
  },
});

export const { setAdmin } = adminSlice.actions;
export default adminSlice.reducer;
