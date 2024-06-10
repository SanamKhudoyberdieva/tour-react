import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const Index = () => {
  return (
    <div>
      <div
        className="d-flex mb-4 align-items-center justify-content-between">
        <h4 className="py-3 mb-0">
          <span className="text-muted fw-light">
            <Link to={'/'}>Asosiy</Link> /
          </span>
          Filyallar
        </h4>
        <Link className="btn btn-success" to={'/branch/create'}
          >Filyal qo'shish</Link>
      </div>
      <div className="card">
        <div className="card-body">
          <div
            className="d-flex flex-column-reverse flex-md-row align-items-center justify-content-between mb-3">
            <div className="d-flex align-items-center">
              <label
                className="form-label text-nowrap mb-0 me-2">Размер стр:</label>
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
                  <th>Nomi</th>
                  <th>Direktor</th>
                  <th>Shahar</th>
                  <th>Buyurtmalar soni</th>
                  <th>&nbsp;</th>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      value="" />
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td><Link to={'/branch/view/2'}>Novza filyal</Link></td>
                  <td>
                    Maxmudov Nodir
                  </td>
                  <td>
                    Toshkent
                  </td>
                  <td>
                    67
                  </td>
                  <td>
                    <Link className="btn p-1" to={'/branch/edit/2'}>
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