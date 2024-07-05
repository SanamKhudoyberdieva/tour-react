import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { deleteTour } from "../../api";
import { TourPaginationType } from "../../store/types/tour/all";
import { getName } from "../../utils";
import i18n from "../../utils/i18n";
import { useTranslation } from "react-i18next";
import TourNavigationModal from "../modals/TourNavigationModal";
import { useState } from "react";

const TourTable = ({ data }: { data: TourPaginationType }) => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleShow = () => setShowModal(true);
  const handleDelete = async (id: number) => {
    const confirmed = window.confirm(t("are-you-sure-you-want-to-delete"));
    if (!confirmed) return;

    try {
      await deleteTour(id);
    } catch (error) {
      console.log("error deleteTour: ", error);
    }
  };

  console.log("data", data);
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
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {data.tours.map((x, idx) => (
            <tr className="table-danger">
              <td>{idx + 1}</td>
              <td>
                <Link to={`/tour/order/${2}`}>{getName(x, i18n.language)}</Link>
              </td>
              <td>{x.from}</td>
              <td>
                <button className="btn p-1" onClick={handleShow}>
                  <FontAwesomeIcon icon={faFile} />
                </button>
              </td>
              <td>14</td>
              <td>BB</td>
              <td>2Adl</td>
              <td>15 750 000</td>
              <td>12 / 45</td>
              <td>Toshkent</td>
              <td>
                <Link className="btn p-1" to={"/"}>
                  <FontAwesomeIcon icon={faPen} />
                </Link>
                <button className="btn p-1" onClick={() => handleDelete(x.id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
              <TourNavigationModal
                showModal={showModal}
                setShowModal={setShowModal}
                navigations={x.navigation}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TourTable;
