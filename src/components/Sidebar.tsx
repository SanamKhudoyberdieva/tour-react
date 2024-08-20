import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBox,
  faChartPie,
  faChevronLeft,
  faCircleCheck,
  faCity,
  faCodeBranch,
  faGear,
  faHotel,
  faNewspaper,
  faPlane,
  faRectangleList,
  faTicket,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

interface SidebarProps {
  setIsShowAside: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ setIsShowAside }) => {
  const location = useLocation();

  return (
    <aside className="layout-menu menu-vertical menu bg-menu-theme">
      <div className="app-brand demo justify-content-start">
        <Link to={"/"} className="app-brand-link">
          <span className="app-brand-text demo menu-text fw-bolder text-uppercase text-gray">
            DIMAX
          </span>
        </Link>
        <button
          onClick={() => setIsShowAside(false)}
          className="layout-menu-toggle menu-link text-large ms-auto d-flex d-xl-none"
        >
          <FontAwesomeIcon className="align-middle" icon={faChevronLeft} />
        </button>
      </div>

      <div className="menu-inner-shadow"></div>

      <ul className="menu-inner py-1">
        <li
          className={`menu-item ${
            location.pathname.includes("dashboard") && "active"
          }`}
        >
          <Link to={"/"} className="menu-link">
            <FontAwesomeIcon className="menu-icon tf-icons" icon={faChartPie} />
            <div>Dashboard</div>
          </Link>
        </li>
        <li
          className={`menu-item ${
            location.pathname.includes("tour") &&
            !location.pathname.includes("/tour/order") &&
            "active"
          }`}
        >
          <Link to={"/tour"} className="menu-link">
            <FontAwesomeIcon className="menu-icon tf-icons" icon={faTicket} />
            <div>Tur paket</div>
          </Link>
        </li>
        <li
          className={`menu-item ${
            location.pathname.includes("order") && "active"
          }`}
        >
          <Link to={"/order"} className="menu-link">
            <FontAwesomeIcon
              className="menu-icon tf-icons"
              icon={faRectangleList}
            />
            <div>Buyurtmalar</div>
          </Link>
        </li>
        <li
          className={`menu-item ${
            location.pathname.includes("airplane") && "active"
          }`}
        >
          <Link to={"/airplane"} className="menu-link">
            <FontAwesomeIcon className="menu-icon tf-icons" icon={faPlane} />
            <div>Havo yo'llari</div>
          </Link>
        </li>
        <li
          className={`menu-item ${
            location.pathname.includes("hostel") && "active"
          }`}
        >
          <Link to={"/hostel"} className="menu-link">
            <FontAwesomeIcon className="menu-icon tf-icons" icon={faHotel} />
            <div>Mehmonxonalar</div>
          </Link>
        </li>
        <li
          className={`menu-item ${
            location.pathname.includes("room") && "active"
          }`}
        >
          <Link to={"/room"} className="menu-link">
            <FontAwesomeIcon className="menu-icon tf-icons" icon={faBed} />
            <div>Xonalar</div>
          </Link>
        </li>
        <li
          className={`menu-item ${
            location.pathname.includes("admin") && "active"
          }`}
        >
          <Link to={"/admin"} className="menu-link">
            <FontAwesomeIcon className="menu-icon tf-icons" icon={faUserTie} />
            <div>Adminstrator</div>
          </Link>
        </li>
        <li
          className={`menu-item ${
            location.pathname.includes("role") && "active"
          }`}
        >
          <Link to={"/role"} className="menu-link">
            <FontAwesomeIcon
              className="menu-icon tf-icons"
              icon={faCircleCheck}
            />
            <div>Role</div>
          </Link>
        </li>
        <li
          className={`menu-item ${
            location.pathname.includes("news") && "active"
          }`}
        >
          <Link to={"/news"} className="menu-link">
            <FontAwesomeIcon
              className="menu-icon tf-icons"
              icon={faNewspaper}
            />
            <div>Yangiliklar</div>
          </Link>
        </li>
        <li
          className={`menu-item ${
            location.pathname.includes("organization") && "active"
          }`}
        >
          <Link to={"/organization"} className="menu-link">
            <FontAwesomeIcon
              className="menu-icon tf-icons"
              icon={faCodeBranch}
            />
            <div>Organizatsiya</div>
          </Link>
        </li>
        <li
          className={`menu-item ${
            location.pathname.includes("city") && "active"
          }`}
        >
          <Link to={"/city"} className="menu-link">
            <FontAwesomeIcon className="menu-icon tf-icons" icon={faCity} />
            <div>Davlatlar</div>
          </Link>
        </li>
        <li
          className={`menu-item ${
            location.pathname.includes("extra-packages") && "active"
          }`}
        >
          <Link to={"/extra-packages"} className="menu-link">
            <FontAwesomeIcon className="menu-icon tf-icons" icon={faBox} />
            <div>extra packages</div>
          </Link>
        </li>
        <li className="menu-item">
          <Link to={"/"} className="menu-link">
            <FontAwesomeIcon className="menu-icon tf-icons" icon={faGear} />
            <div>Sozlamalar</div>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
