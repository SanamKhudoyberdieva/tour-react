import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RoleType } from "../types/role/role";

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
    removeRole: (state, action: PayloadAction<number>) => {
      state.roles = state.roles.filter(role => role.id !== action.payload);
    },
  },
});

export const { setRoles, removeRole } = rolesSlice.actions;
export default rolesSlice.reducer;