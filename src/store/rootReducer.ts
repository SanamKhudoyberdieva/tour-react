import { combineReducers } from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice";
import adminSlice from "./slices/adminSlice";
import rolesSlice from "./slices/rolesSlice";
import branchSlice from "./slices/organizationSlice";
import airwaySlice from "./slices/airwaySlice";
import hostelSlice from "./slices/hostelSlice";
import citySlice from "./slices/citySlice";
import extraPackageSlice from "./slices/extraPackageSlice";
import roomSlice from "./slices/roomSlice";

const rootReducer = combineReducers({
  loginReducer: loginSlice,
  adminReducer: adminSlice,
  rolesReducer: rolesSlice,
  organizationsReducer: branchSlice,
  airwaysReducer: airwaySlice,
  hostelsReducer: hostelSlice,
  citiesReducer: citySlice,
  extraPackagesReducer: extraPackageSlice,
  roomsReducer: roomSlice
})

export default rootReducer;