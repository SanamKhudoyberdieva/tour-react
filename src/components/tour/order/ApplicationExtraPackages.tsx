import { faPen, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ApplicationExtraPackages = () => {
  return (
    <div>
      <h6>ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ</h6>
      <div className="card mb-4">
        <div className="card-body">
          <div className="table-responsive mb-4">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>дополнительные услуги</th>
                  <th>от</th>
                  <th>до</th>
                  <th>количество</th>
                  <th>Цена</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>виза</td>
                  <td>04.06.2024</td>
                  <td>04.06.2024</td>
                  <td>1</td>
                  <td>$200</td>
                  <td>
                    <button className="btn btn-icon btn-success">
                      <FontAwesomeIcon icon={faPen} />
                    </button>
                    <button className="btn btn-icon btn-danger">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <input className="form-control" type="text" />
                  </td>
                  <td>
                    <input className="form-control" type="text" />
                  </td>
                  <td>
                    <input className="form-control" type="text" />
                  </td>
                  <td>
                    <input className="form-control" type="text" />
                  </td>
                  <td>
                    <input className="form-control" type="text" />
                  </td>
                  <td>
                    <button type="submit" className="btn btn-icon btn-success">
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationExtraPackages;
