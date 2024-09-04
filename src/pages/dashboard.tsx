import { Carousel } from "react-bootstrap";
import Banner from "../../public/img/monte.png";
import Banner2 from "../../public/img/monte.png";
import { useEffect, useState } from "react";
import { TourRoomType } from "../store/types/tour/tourRoom";
import { deleteTour, getTours } from "../api";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { formatDateToInputValue, getName } from "../utils";
import i18n from "../utils/i18n";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faPen,
  faPlaneArrival,
  faPlaneDeparture,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const { t } = useTranslation();
  const [data, setData] = useState<TourRoomType | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleShow = () => setShowModal(true);

  const handleGet = async () => {
    try {
      const res = await getTours();
      setData(res.data);
    } catch (error) {
      console.log("error getTours: ", error);
    }
  };

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm(t("are-you-sure-you-want-to-delete"));
    if (!confirmed) return;

    try {
      await deleteTour(id);
      handleGet();
    } catch (error) {
      console.log("error deleteTour: ", error);
    }
  };

  useEffect(() => {
    handleGet();
  }, []);

  console.log("data", data);

  if (!data) return;

  return (
    <div>
      <h4 className="py-3 mb-4">Панель управления</h4>
      <div className="card mb-4">
        <div className="header text-center p-3">
          <h4 className="title">Добро пожаловать, администратор</h4>
        </div>
        <div className="content"></div>
      </div>
      <Carousel>
        <div className="carousel-inner">
          <Carousel.Item>
            <img className="d-block w-100" src={Banner} alt="Banner" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Banner2} alt="Banner" />
          </Carousel.Item>
          <div>
            <img className="d-block w-100" src={Banner} alt="Banner" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExample"
          role="button"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExample"
          role="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </a>
      </Carousel>

      {data && (
        <div className="card">
          <div className="card-body">
            <div className="table-responsive mb-4">
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Tur</th>
                    <th>Vaqtlar</th>
                    <th>&nbsp;</th>
                    <th>Kecha</th>
                    <th>Ovqat</th>
                    <th>Xonalar</th>
                    <th>Narxi</th>
                    <th>Biletlar</th>
                    <th>Ketish joyi</th>
                    <th>&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    data.tours &&
                    data.tours.map((x, idx) => (
                      <tr
                        className="table-danger"
                        key={"tour-table-tour-list-" + idx}
                      >
                        <td>{idx + 1}</td>
                        <td>
                          <Link to={`/tour/view/${x.id}`}>
                            {getName(x, i18n.language)}
                          </Link>
                        </td>
                        <td>
                          <div>
                            {formatDateToInputValue(x.from || "")}
                            <FontAwesomeIcon icon={faPlaneDeparture} />
                          </div>
                          <div>
                            {formatDateToInputValue(x.to || "")}
                            <FontAwesomeIcon icon={faPlaneArrival} />
                          </div>
                        </td>
                        <td>
                          <button className="btn p-1" onClick={handleShow}>
                            <FontAwesomeIcon icon={faFile} />
                          </button>
                        </td>
                        <td>{x.night_count}</td>
                        <td>{x.nutrition_type}</td>
                        <td>{x.room}</td>
                        <td>{x.price}</td>
                        <td>
                          {x.ordered_place} / {x.place_count}
                        </td>
                        <td>Toshkent</td>
                        <td>
                          <Link className="btn p-1" to={"/"}>
                            <FontAwesomeIcon icon={faPen} />
                          </Link>
                          <button
                            className="btn p-1"
                            onClick={() => handleDelete(x.id)}
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
