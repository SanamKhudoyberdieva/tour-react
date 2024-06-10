import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const Index = () => {
  return (
    <>
      <div
        className="d-flex mb-4 align-items-center justify-content-between"
      >
        <h4 className="py-3 mb-0">
          <span className="text-muted fw-light">
            <Link to={'/'}>Asosiy</Link> / 
          </span>
          Adminstratorlar
        </h4>
        <Link className="btn btn-success" to={'/admin/create'}
          >Admin qo'shish</Link>
      </div>
      <div className="card">
        <div className="card-body">
          <div
            className="d-flex flex-column-reverse flex-md-row align-items-center justify-content-between mb-3"
          ></div>
          <div className="table-responsive mb-4">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>FISH</th>
                  <th>Telefon raqam</th>
                  <th>Filyal</th>
                  <th>Email</th>
                  <th>Buyurtmalar soni</th>
                  <th>Holat</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <Link to={'/admin/view/2'}
                      >Toxirjonova Dildora Sardorovna</Link>
                  </td>
                  <td>+998 99 617 45 65</td>
                  <td>Markaziy filyal</td>
                  <td>toxirjonova45@gmail.com</td>
                  <td>67</td>
                  <td>
                    <input
                      type="checkbox"
                      name="parent_id"
                    />
                  </td>
                  <td>
                    <Link
                      className="btn p-1"
                      to={'/admin/edit/2'}
                    >
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
    </>
  )
}

export default Index;