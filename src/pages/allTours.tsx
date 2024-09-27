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
import TourNavigationModal from "../components/modals/TourNavigationModal";

const AllTour = () => {
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

  console.log('data.tours', data?.tours)

  if (!data) return;

  return (
    <div>
      <div className="d-flex mb-4 align-items-center justify-content-between">
        <h4 className="py-3 mb-0">
          <span className="text-muted fw-light">
            <Link to={"/"}>{t('home')}</Link> /{" "}
          </span>
          {t('tour-packages')}
        </h4>
        <Link className="btn btn-success" to={"/tour/create"}>
          {t('create')}
        </Link>
      </div>

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
                        <td>{getName(x.room_prices.room, i18n.language)}</td>
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
                        {x.navigate && (
                          <TourNavigationModal
                            showModal={showModal}
                            setShowModal={setShowModal}
                            navigation={x.navigate}
                          />
                        )}
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

export default AllTour;
