import { OrganizationType } from "../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OrganizationsState {
  organizations: OrganizationType[];
}

const initialState: OrganizationsState = {
  organizations: []
};

const organizationsSlice = createSlice({
  name: 'organizations',
  initialState,
  reducers: {
    setOrganizations(state, action: PayloadAction<OrganizationType[]>) {
      state.organizations = action.payload;
    },
  },
});

export const { setOrganizations } = organizationsSlice.actions;
export default organizationsSlice.reducer;