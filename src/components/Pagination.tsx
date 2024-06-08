import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Pagination = () => {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
      <span className="mb-2 mb-md-0">
      Показаны записи 10 из 12
      </span>
      <ReactPaginate
        pageRangeDisplayed={1}
        pageCount={10}
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
        previousClassName="prev"
        nextClassName="next"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active"
        className="pagination m-0 align-items-center"
      />
    </div>
  )
}

export default Pagination;