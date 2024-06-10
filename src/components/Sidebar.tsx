import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faChartPie, faChevronLeft, faCircleCheck, faCodeBranch, faGear, faHotel, faNewspaper, faPlane, faRectangleList, faTicket, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";


const Sidebar = () => {
  const location = useLocation();

  return (
    <aside
      className="layout-menu menu-vertical menu bg-menu-theme"
    >
      <div className="app-brand demo justify-content-start">
        <Link to={'/'} className="app-brand-link">
          <span
            className="app-brand-text demo menu-text fw-bolder text-uppercase text-gray"
          >
            DIMAX
          </span>
        </Link>
        <button
          className="layout-menu-toggle menu-link text-large ms-auto d-flex d-xl-none"
        >
            <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      </div>

      <div className="menu-inner-shadow"></div>

      <ul className="menu-inner py-1">
        <li
        className={`menu-item ${
          location.pathname.includes("dashboard") && "active"
        }`} 
        >
          <Link to={'/'} className="menu-link">
            <FontAwesomeIcon className="menu-icon tf-icons" icon={faChartPie} />
            <div>Dashboard</div>
          </Link>
        </li>
        <li
        className={`menu-item ${
          location.pathname.includes("tour") && "active"
        }`}  
        >
          <Link to={'/tour'} className="menu-link">
            <FontAwesomeIcon className="menu-icon tf-icons" icon={faTicket} />
            <div>Tur paket</div>
          </Link>
        </li>
        <li className={`menu-item ${
          location.pathname.includes("order") && "active"
        }`}
        >
          <Link to={'/order'} className="menu-link">
            <FontAwesomeIcon className="menu-icon tf-icons" icon={faRectangleList} />
            <div>Buyurtmalar</div>
          </Link>
        </li>
        <li
          className={`menu-item ${
            location.pathname.includes("airplane") && "active"
          }`} 
          >
          <Link to={'/airplane'} className="menu-link">
            <FontAwesomeIcon className="menu-icon tf-icons" icon={faPlane} />
            <div>Havo yo'llari</div>
          </Link>
        </li>
        <li className={`menu-item ${
            location.pathname.includes("hostel") && "active"
          }`}
        >
          <Link to={'/hostel'} className="menu-link">
            <FontAwesomeIcon className="menu-icon tf-icons" icon={faHotel} />
            <div>Mehmonxonalar</div>
          </Link>
        </li>
        <li className={`menu-item ${
            location.pathname.includes("room") && "active"
          }`}
        >
          <Link to={'/room'} className="menu-link">
            <FontAwesomeIcon className="menu-icon tf-icons" icon={faBed} />
            <div>Xonalar</div>
          </Link>
        </li>
        <li className={`menu-item ${
            location.pathname.includes("admin") && "active"
          }`}
        >
          <Link to={'/admin'} className="menu-link">
            <FontAwesomeIcon className="menu-icon tf-icons" icon={faUserTie} />
            <div>Adminstrator</div>
          </Link>
        </li>
        <li className={`menu-item ${
            location.pathname.includes("role") && "active"
          }`}
        >
          <Link to={'/role'} className="menu-link">
            <FontAwesomeIcon className="menu-icon tf-icons" icon={faCircleCheck} />
            <div>Role</div>
          </Link>
        </li>
        <li className="menu-item">
          <a href="./news.html" className="menu-link">
            <FontAwesomeIcon className="menu-icon tf-icons" icon={faNewspaper} />
            <div>Yangiliklar</div>
          </a>
        </li>
        <li className={`menu-item ${
            location.pathname.includes("branch") && "active"
          }`}>
          <Link to={'/branch'} className="menu-link">
            <FontAwesomeIcon className="menu-icon tf-icons" icon={faCodeBranch} />
            <div>Filyallar</div>
          </Link>
        </li>
        <li className="menu-item">
          <a href="./settings.html" className="menu-link">
            <FontAwesomeIcon className="menu-icon tf-icons" icon={faGear} />
            <div>Sozlamalar</div>
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar;