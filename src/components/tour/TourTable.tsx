import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faPen,
  faPlaneArrival,
  faPlaneDeparture,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { deleteTour } from "../../api";
import { formatDateToInputValue, getName } from "../../utils";
import i18n from "../../utils/i18n";
import { useTranslation } from "react-i18next";
import TourNavigationModal from "../modals/TourNavigationModal";
import { useState } from "react";
import { TourRoomType } from "../../store/types/tour/tourRoom";

const TourTable = ({ data }: { data: TourRoomType }) => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleShow = () => setShowModal(true);
  console.log("object data", data);

  return (
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
            {/* <th>&nbsp;</th> */}
          </tr>
        </thead>
        <tbody>
          {data.tours.map((x, idx) => (
            <tr className="table-danger">
              <td>{idx + 1}</td>
              <td>
                <Link to={`/tour/order/${x.tour.id}`}>
                  {getName(x.tour, i18n.language)}
                </Link>
              </td>
              <td>
                <div>
                  {formatDateToInputValue(x.tour.from)}{" "}
                  <FontAwesomeIcon icon={faPlaneDeparture} />
                </div>
                <div>
                  {formatDateToInputValue(x.tour.to)}{" "}
                  <FontAwesomeIcon icon={faPlaneArrival} />
                </div>
              </td>
              <td>
                <button className="btn p-1" onClick={handleShow}>
                  <FontAwesomeIcon icon={faFile} />
                </button>
              </td>
              <td>{x.tour.night_count}</td>
              <td>{x.tour.nutrition_type}</td>
              <td>{x.room}</td>
              <td>{x.price}</td>
              <td>
                {x.ordered_place} / {x.place_count}
              </td>
              <td>Toshkent</td>
              {/* <td>
                <Link className="btn p-1" to={"/"}>
                  <FontAwesomeIcon icon={faPen} />
                </Link>
                <button className="btn p-1" onClick={() => handleDelete(x.id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td> */}
              {x.tour.navigate && (
                <TourNavigationModal
                  showModal={showModal}
                  setShowModal={setShowModal}
                  navigations={x.tour.navigate}
                />
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TourTable;
