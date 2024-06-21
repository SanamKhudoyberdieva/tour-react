import { faPen, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CreatePackageContentInfo = () => {
  
  return (
    <div className="card mb-4">
      <div className="card-body">
        <div className="table-responsive mb-4">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Состав пакета</th>
                <th>от</th>
                <th>до</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Трансфер: Airport-Hotel-Airport(NHA TRANG)</td>
                <td>04.06.2024</td>
                <td>04.06.2024</td>
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
                  <input
                    className="form-control"
                    type="text"
                    value="" />
                </td>
                <td>
                  <input
                    className="form-control"
                    type="text"
                    value="" />
                </td>
                <td>
                  <input
                    className="form-control"
                    type="text"
                    value="" />
                </td>
                <td>
                  <button
                    type="submit"
                    className="btn btn-icon btn-success">
                      <FontAwesomeIcon icon={faPlus} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default CreatePackageContentInfo;