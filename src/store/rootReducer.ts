import { combineReducers } from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice";
import adminSlice from "./slices/adminSlice";

const rootReducer = combineReducers({
  loginReducer: loginSlice,
  adminReducer: adminSlice,
})

export default rootReducer;