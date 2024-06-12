import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RoleType } from "../types";

interface RolesState {
  roles: RoleType[];
}

const initialState: RolesState = {
    roles: []
};

const rolesSlice = createSlice({
  name: 'roles',
  initialState,
  reducers: {
    setRoles(state, action: PayloadAction<RoleType[]>) {
      state.roles = action.payload;
    },
  },
});

export const { setRoles } = rolesSlice.actions;
export default rolesSlice.reducer;