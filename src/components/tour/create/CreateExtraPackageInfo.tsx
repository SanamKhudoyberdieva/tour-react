import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchExtraPackage from './SearchExtraPackage';

const CreateExtraPackageInfo = () => {

  return (
    <div className="card mb-4">
      <div className="card-body">
        <div className="table-responsive mb-4">
        <SearchExtraPackage  />
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Дополнительные услуги</th>
                {/* <th>от</th> */}
                {/* <th>до</th> */}
                {/* <th>количество</th> */}
                <th>цена</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Страхование</td>
                {/* <td>04.06.2024</td> */}
                {/* <td>04.06.2024</td> */}
                {/* <td>2</td> */}
                <td>$50</td>
                <td>
                  <button className="btn btn-icon btn-success">
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                  <button className="btn btn-icon btn-danger">
                    <FontAwesomeIcon icon={faTrash} />
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

export default CreateExtraPackageInfo;