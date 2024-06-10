import { Link } from "react-router-dom";
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
          Rollar
        </h4>
        <Link className="btn btn-success" to={'/role/create'}
          >Rol qo'shish</Link>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nomi</th>
                  <th>Kalit</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td><Link to={'/role/view/2'}>Asosiy meneger</Link></td>
                  <td>asosiy-meneger</td>
                  <td>
                    <button className="btn btn-icon">
                      <FontAwesomeIcon icon={faPen}/>
                    </button>
                    <button className="btn btn-icon">
                      <FontAwesomeIcon icon={faTrash}/>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index;