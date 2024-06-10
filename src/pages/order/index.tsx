import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const Index = () => {
  return (
    <div>
      <div
        className="d-flex mb-4 align-items-center justify-content-between"
      >
        <h4 className="py-3 mb-0">
        <span className="text-muted fw-light">
          <Link to={'/'}>Asosiy</Link> /
        </span>
        Buyurtmalar
      </h4>
      </div>
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
              </select>
            </div>
          </div>
          <div className="table-responsive mb-4">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                <th>#</th>
                <th>Soni</th>
                <th>Asosiy Buyurtmachi</th>
                <th>Telefon Raqam</th>
                <th>Jinsi</th>
                <th>To'lov holati</th>
                <th>TO'lovgacha muddat</th>
                <th>&nbsp;</th>
                </tr>
                <tr>
                <td></td>
                <td></td>
                <td>
                    <input
                    type="text"
                    className="form-control"
                    value=""
                    />
                </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                <td>1</td>
                <td>3 kishi</td>
                <td>
                  <Link to={'/'}>Esonov Omon</Link>
                </td>
                <td>+998 99 613 22 33</td>
                <td>Erkak</td>
                <td>Kutilmoqda</td>
                <td>23 soat</td>
                <td>
                  <Link className="btn p-1" to={'/order/edit'}>
                    <FontAwesomeIcon icon={faPen}/>
                  </Link>
                  <button className="btn p-1">
                    <FontAwesomeIcon icon={faTrash}/>
                  </button>
                </td>
                </tr>
              </tbody>
            </table>
          </div>
          <Pagination/>
        </div>
      </div>
    </div>
  )
}

export default Index;