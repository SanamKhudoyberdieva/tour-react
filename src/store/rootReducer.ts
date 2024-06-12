import { combineReducers } from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice";
import rolesSlice from "./slices/rolesSlice";
import adminSlice from "./slices/adminSlice";

const rootReducer = combineReducers({
  loginReducer: loginSlice,
  rolesReducer: rolesSlice,
  adminReducer: adminSlice,
})

export default rootReducer;