import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import LanguageDropdown from "./LanguageDropdown";
import noPhotoImage from "../../public/img/no-photo.webp";

const Navbar = () => {
  return (
    <nav
      className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
    >
      <div
        className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none"
      >
        <button className="btn nav-item nav-link px-0 me-xl-4">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bars"
            className="svg-inline--fa fa-bars"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
            ></path>
          </svg>
        </button>
      </div>
      <div
        className="navbar-nav-right d-flex align-items-center"
      >
        <ul className="navbar-nav flex-row align-items-center ms-auto">
          <li className="nav-item me-4">
            <LanguageDropdown />
          </li>
          <li className="nav-item navbar-dropdown dropdown-user dropdown">
            <Dropdown >
            <Dropdown.Toggle
                variant="none"
                className="dt-dropdown-user"
              >
                <div className="avatar avatar-online">
                  <img
                    src={noPhotoImage}
                    alt="no-photo"
                    className="w-px-40 h-auto rounded-circle"
                  />
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <div className="dropdown-item">
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3 dt-dropdown-user">
                      <div className="avatar avatar-online">
                        <Link to="">
                          <img
                            src={noPhotoImage}
                            alt=""
                            className="w-px-40 h-auto rounded-circle"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <span className="fw-semibold d-block">
                      <Link to="">Admin name</Link>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="dropdown-divider"></div>
                <Link to="" className="dropdown-item" >
                  <i className="bx bx-power-off me-2"></i>
                  <span className="align-middle">Log out</span>
                </Link>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;