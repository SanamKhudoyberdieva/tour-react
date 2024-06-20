import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../store/slices/loginSlice";
import { getAdmin, getRoles } from "../api";
import { setAdmin } from "../store/slices/adminSlice";
import { AxiosErrorType } from "../api/api";
import { setRoles } from "../store/slices/rolesSlice";

const Layout = () => {
  const [isShowAside, setIsShowAside] = useState(false);
  const dispatch = useDispatch();

  const hendleLogOut = () => {
    dispatch(logOut());
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

  useEffect(() => {
    handleGetRoles();
    handleGetMe();
  }, []);

  return (
    <div
    //  className="aside-mob-show"
    >
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Sidebar  />
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
        ></div>
      </div>
    </div>
  )
}

export default Layout;