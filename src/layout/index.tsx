import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <div
    //  className="aside-mob-show"
    >
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Sidebar  />
          {/* <!-- Layout container --> */}
          <div className="layout-page">
            <Navbar  />
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