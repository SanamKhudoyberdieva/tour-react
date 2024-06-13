import { combineReducers } from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice";
import adminSlice from "./slices/adminSlice";
import rolesSlice from "./slices/rolesSlice";
import branchSlice from "./slices/branchSlice";

const rootReducer = combineReducers({
  loginReducer: loginSlice,
  adminReducer: adminSlice,
  rolesReducer: rolesSlice,
  branchesReducer: branchSlice
})

export default rootReducer;