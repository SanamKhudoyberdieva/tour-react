import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination";
import TourTable from "../../components/tour/TourTable";
import FilterOne from "../../components/tour/Filter/First";
import FilterTwo from "../../components/tour/Filter/Second";
import FilterThree from "../../components/tour/Filter/Third";

const Index = () => {
  return (
    <>
      <div
        className="d-flex mb-4 align-items-center justify-content-between"
      >
        <h4 className="py-3 mb-0">
          <span className="text-muted fw-light">
            <Link to={'/'}>Asosiy</Link> / {' '}
          </span>
          Tur Paketlar
        </h4>
        <Link className="btn btn-success" to={'/tour/create'}
          >Yaratish
        </Link>
      </div>

      <FilterOne/>
      <FilterTwo/>
      <FilterThree />
      <div className="card">
        <div className="card-body">
          <div
            className="d-flex flex-column-reverse flex-md-row align-items-center justify-content-between mb-3"
          >
            <div className="d-flex align-items-center">
              <label
                className="form-label text-nowrap mb-0 me-2"
                >Размер стр:</label>
                <select id="page-size-label" className="form-select">
                <option value="10">10</option>
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
          <TourTable />
          <Pagination />
        </div>
      </div>
    </>
  )
}

export default Index;