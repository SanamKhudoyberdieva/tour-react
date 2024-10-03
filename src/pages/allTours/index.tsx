import { useEffect, useState } from "react";
import { deleteTour, getTours } from "../../api";
import { useTranslation } from "react-i18next";
import { Link, useSearchParams } from "react-router-dom";
import { formatDateToInputValue, getName } from "../../utils";
import i18n from "../../utils/i18n";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faPen,
  faPlaneArrival,
  faPlaneDeparture,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import TourNavigationModal from "../../components/modals/TourNavigationModal";
import { TourPaginationType } from "../../store/types/tour/all";
import { NavigationType } from "../../store/types/tour/navigation";
import Pagination from "../../components/Pagination";

export interface FiltersStateType {
  page: number;
  page_size: number;
}

const AllTour = () => {
  const { t } = useTranslation();
  const [data, setData] = useState<TourPaginationType | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [navigate, setNavigate] = useState<NavigationType[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryPageSize = parseInt(searchParams.get("pageSize") || "15");
  const queryPage = parseInt(searchParams.get("page") || "1");
  const [pageSize, setPageSize] = useState(queryPageSize);
  const [currPage, setCurrPage] = useState(queryPage);
  const handleShow = (x: NavigationType[]) => {
    setNavigate(x);
    setShowModal(true);
  };

  const handleGet = async ({ page, page_size }: FiltersStateType) => {
    try {
      const res = await getTours(
        {
          from: "",
          page_size,
          page,
          night_count: "",
          starts: "",
          to: "",
          with_delete: "",
        }
      );
      setData(res.data);
    } catch (error) {
      console.log("error getTours: ", error);
    }
  };

  const handlePageClick = (event: { selected: number }) => {
    setCurrPage(event.selected + 1);
  };

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm(t("are-you-sure-you-want-to-delete"));
    if (!confirmed) return;

    try {
      await deleteTour(id);
      handleGet({ page: currPage, page_size: pageSize });
    } catch (error) {
      console.log("error deleteTour: ", error);
    }
  };

  useEffect(() => {
    setSearchParams({
      page: `${currPage}`,
      pageSize: `${pageSize}`,
    });
  }, [currPage, pageSize]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleGet({ page: currPage, page_size: pageSize });
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [ currPage, pageSize]);

  if (!data) return;

  return (
    <div>
      <div className="d-flex mb-4 align-items-center justify-content-between">
        <h4 className="py-3 mb-0">
          <span className="text-muted fw-light">
            <Link to={"/"}>{t("home")}</Link> /{" "}
          </span>
          {t("tour-packages")}
        </h4>
        <Link className="btn btn-success" to={"/tour/create"}>
          {t("create")}
        </Link>
      </div>

      {data && (
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-column-reverse flex-md-row align-items-center justify-content-between mb-3">
              <div className="d-flex align-items-center">
                <label className="form-label text-nowrap mb-0 me-2">
                  {t("page-size")}
                </label>
                <select
                  id="page-size-label"
                  className="form-select"
                  value={pageSize}
                  onChange={(e) => setPageSize(parseInt(e.target.value))}
                >
                  <option value="15">15</option>
                  <option value="20">20</option>
                  <option value="25">25</option>
                  <option value="40">40</option>
                  <option value="50">50</option>
                  <option value="60">60</option>
                  <option value="70">70</option>
                  <option value="80">80</option>
                  <option value="90">90</option>
                  <option value="100">100</option>
                </select>
              </div>
            </div>
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
                          <button
                            className="btn p-1"
                            onClick={() => handleShow(x.navigate)}
                          >
                            <FontAwesomeIcon icon={faFile} />
                          </button>
                        </td>
                        <td>{x.night_count}</td>
                        <td>{x.nutrition_type}</td>
                        {/* <td>{getName(x.room_prices.room, i18n.language)}</td> */}
                        {/* <td>{x.price}</td> */}
                        <td>{/* {x.ordered_place} / {x.place_count} */}</td>
                        <td>Toshkent</td>
                        <td>
                          <Link className="btn p-1" to={`/packages/edit/${x.id}`}>
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
            <Pagination
              currPage={data.page}
              recordsFiltered={data.tours.length}
              recordsTotal={data.count}
              handlePageChange={handlePageClick}
            />
          </div>
          <TourNavigationModal
            showModal={showModal}
            setShowModal={setShowModal}
            navigation={navigate}
          />
        </div>
      )}
    </div>
  );
};

export default AllTour;