import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../store/slices/loginSlice";
import { getAdmin, getAirways, getCities, getExtraPackages, getHotels, getOrganizations, getRoles, getRooms } from "../api";
import { setAdmin } from "../store/slices/adminSlice";
import { AxiosErrorType } from "../api/api";
import { setRoles } from "../store/slices/rolesSlice";
import { setAirways } from "../store/slices/airwaySlice";
import { setCities } from "../store/slices/citySlice";
import { setHostels } from "../store/slices/hostelSlice";
import { setExtraPackages } from "../store/slices/extraPackageSlice";
import { setOrganizations } from "../store/slices/organizationSlice";
import { setRooms } from "../store/slices/roomSlice";

const Layout = () => {
  const [isShowAside, setIsShowAside] = useState(false);
  const dispatch = useDispatch();

  const hendleLogOut = () => {
    dispatch(logOut());
  };

  const handleGetAirways = async () => {
    try {
      const res = await getAirways();
      dispatch(setAirways(res.data));
    } catch (error) {
      console.log("error getAirways: ", error);
    }
  };

  const handleGetCities = async () => {
    try {
      const res = await getCities();
      dispatch(setCities(res.data));
    } catch (error) {
      console.log("error getCities: ", error);
    }
  };

  const handleGetHostels = async () => {
    try {
      const res = await getHotels();
      dispatch(setHostels(res.data));
    } catch (error) {
      console.log("error getHotels: ", error);
    }
  };

  const handleGetRoles = async () => {
    try {
      const res = await getRoles();
      dispatch(setRoles(res.data));
    } catch (error) {
      console.log("error getRoles: ", error);
      if ((error as AxiosErrorType).isAxiosError) {
        const axiosError = error as AxiosErrorType;
        if (axiosError.response?.status == 401) hendleLogOut();
      } else {
        console.log("An unknown error occurred");
      }
    }
  };

  const handleGetOrganization = async () => {
    try {
      const res = await getOrganizations();
      dispatch(setOrganizations(res.data));
    } catch (error) {
      console.log("error getOrganizations: ", error);
    }
  };

  const handleGetRoom = async () => {
    try {
      const res = await getRooms();
      dispatch(setRooms(res.data));
    } catch (error) {
      console.log("error getRooms: ", error);
    }
  };

  const handleGetMe = async () => {
    try {
      const res = await getAdmin();
      dispatch(setAdmin(res.data));
    } catch (error) {
      console.log("error setAdmin: ", error);
      if ((error as AxiosErrorType).isAxiosError) {
        const axiosError = error as AxiosErrorType;
        if (axiosError.response?.status == 401) hendleLogOut();
      } else {
        console.log("An unknown error occurred");
      }
    }
  };

  const handleGetExtraPackages = async () => {
    try {
      const res = await getExtraPackages();
      dispatch(setExtraPackages(res.data));
    } catch (error) {
      console.log("error getExtraPackages: ", error);
    }
  };

  useEffect(() => {
    handleGetRoles();
    handleGetMe();
    handleGetAirways();
    handleGetCities();
    handleGetHostels();
    handleGetExtraPackages();
    handleGetOrganization();
    handleGetRoom();
  }, []);

  return (
    <div className={isShowAside ? "aside-mob-show" : ""}>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Sidebar setIsShowAside={setIsShowAside} />
          {/* <!-- Layout container --> */}
          <div className="layout-page">
            <Navbar setIsShowAside={setIsShowAside} />
            {/* <!-- Content wrapper --> */}
            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                <Outlet />
              </div>
              <div className="content-backdrop fade"></div>
            </div>
            {/* <!-- Content wrapper --> */}
          </div>
          {/* <!-- / Layout page --> */}
        </div>

        {/* <!-- Overlay --> */}
        <div
          className="layout-overlay layout-menu-toggle"
          onClick={() => setIsShowAside(false)}
        ></div>
      </div>
    </div>
  )
}

export default Layout;