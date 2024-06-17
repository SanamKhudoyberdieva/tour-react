import { combineReducers } from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice";
import adminSlice from "./slices/adminSlice";
import rolesSlice from "./slices/rolesSlice";
import branchSlice from "./slices/organizationSlice";

const rootReducer = combineReducers({
  loginReducer: loginSlice,
  adminReducer: adminSlice,
  rolesReducer: rolesSlice,
  organizationsReducer: branchSlice
})

export default rootReducer;