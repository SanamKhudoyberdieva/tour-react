import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AdminType } from "../types";
import { AdminMeType } from "../types/admin/me";
export interface AuthState {
  accessToken: string;
  refreshToken: string;
}

interface AdminsType {
  admins: AdminType[] | [];
}

interface LoginState extends AuthState, AdminType, AdminsType {}

const initialState: LoginState = {
  id: 0,
  username: "",
  created_at: "",
  updated_at: "",
  last_visit: "",
  accessToken: "",
  refreshToken: "",
  deleted_at: "",
  is_active: false,
  admins: [],
  role: null,
  role_id: null,
  full_name: "",
  phone: "",
  is_deleted: null,
  organization: null,
  organization_id: null
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setAuthAdmin(state, action: PayloadAction<AuthState>) {
      localStorage.setItem("accessToken", `${action.payload.accessToken}`);
      localStorage.setItem("refreshToken", `${action.payload.refreshToken}`);
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    setMe(state, action: PayloadAction<AdminMeType>) {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.last_visit = action.payload.last_visit;
      state.updated_at = action.payload.updated_at;
      state.created_at = action.payload.created_at;
      state.is_active = action.payload.is_active;
      state.role = action.payload.role;
      state.role_id = action.payload.role_id;
      state.full_name = action.payload.full_name;
      state.phone = action.payload.phone;
      state.is_deleted = action.payload.is_deleted;
    },
    logOut() {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    },
    setAdmins(state, action: PayloadAction<AdminType[]>) {
      state.admins = action.payload;
    },
  },
});

export const { setAuthAdmin, setMe, logOut, setAdmins } = loginSlice.actions;
export default loginSlice.reducer;
