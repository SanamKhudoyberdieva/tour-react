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
import { useTranslation } from "react-i18next";

interface SidebarProps {
  setIsShowAside: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ setIsShowAside }) => {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <aside className="layout-menu menu-vertical menu bg-menu-theme">
      <div className="app-brand demo justify-content-start">
        <Link to={"/"} className="app-brand-link">
          <span className="app-brand-text demo menu-text fw-bolder text-uppercase text-gray">
            POYTAXT
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
            <div>{t("dashboard")}</div>
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
            <div>{t("tour-package")}</div>
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
            <div>{t('orders')}</div>
          </Link>
        </li>
        <li
          className={`menu-item ${
            location.pathname.includes("airplane") && "active"
          }`}
        >
          <Link to={"/airplane"} className="menu-link">
            <FontAwesomeIcon className="menu-icon tf-icons" icon={faPlane} />
            <div>{t('airways')}</div>
          </Link>
        </li>
        <li
          className={`menu-item ${
            location.pathname.includes("hostel") && "active"
          }`}
        >
          <Link to={"/hostel"} className="menu-link">
            <FontAwesomeIcon className="menu-icon tf-icons" icon={faHotel} />
            <div>{t('hostels')}</div>
          </Link>
        </li>
        <li
          className={`menu-item ${
            location.pathname.includes("room") && "active"
          }`}
        >
          <Link to={"/room"} className="menu-link">
            <FontAwesomeIcon className="menu-icon tf-icons" icon={faBed} />
            <div>{t('rooms')}</div>
          </Link>
        </li>
        <li
          className={`menu-item ${
            location.pathname.includes("admin") && "active"
          }`}
        >
          <Link to={"/admin"} className="menu-link">
            <FontAwesomeIcon className="menu-icon tf-icons" icon={faUserTie} />
            <div>{t('admins')}</div>
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
            <div>{t('role')}</div>
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
            <div>{t('news')}</div>
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
            <div>{t('organizations')}</div>
          </Link>
        </li>
        <li
          className={`menu-item ${
            location.pathname.includes("city") && "active"
          }`}
        >
          <Link to={"/city"} className="menu-link">
            <FontAwesomeIcon className="menu-icon tf-icons" icon={faCity} />
            <div>{t('cities')}</div>
          </Link>
        </li>
        <li
          className={`menu-item ${
            location.pathname.includes("extra-packages") && "active"
          }`}
        >
          <Link to={"/extra-packages"} className="menu-link">
            <FontAwesomeIcon className="menu-icon tf-icons" icon={faBox} />
            <div>{t('extra-packages')}</div>
          </Link>
        </li>
        {/* <li className="menu-item">
          <Link to={"/"} className="menu-link">
            <FontAwesomeIcon className="menu-icon tf-icons" icon={faGear} />
            <div>{t('settings')}</div>
          </Link>
        </li> */}
      </ul>
    </aside>
  );
};

export default Sidebar;
