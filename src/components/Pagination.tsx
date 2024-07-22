import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import ReactPaginate from "react-paginate";

const Pagination = ({
  recordsFiltered,
  recordsTotal,
  currPage,
  handleFilterChange,
}: {
  recordsFiltered: number;
  recordsTotal: number;
  currPage: number;
  handleFilterChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}) => {
  const { t } = useTranslation();

  if (recordsTotal <= recordsFiltered) return;

  if (recordsFiltered > recordsTotal) recordsFiltered = recordsTotal;

  return (
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
      <span className="mb-2 mb-md-0">
        {t("showing-entries")} {recordsFiltered} {t("of")} {recordsTotal}
      </span>
      <ReactPaginate
        pageRangeDisplayed={1}
        forcePage={currPage - 1}
        pageCount={Math.ceil(recordsTotal / 10)}
        marginPagesDisplayed={2}
        previousLabel={
          <button className="page-link">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        }
        nextLabel={
          <button className="page-link">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        }
        onPageChange={handleFilterChange}
        previousClassName="prev"
        nextClassName="next"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active"
        className="pagination m-0 align-items-center"
      />
    </div>
  );
};

export default Pagination;
