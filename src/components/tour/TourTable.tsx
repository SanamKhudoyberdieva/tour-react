import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const TourTable = () => {
  return (
    <div className="table-responsive mb-4">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Tur</th>
            <th>Vaqtlar</th>
            <th>&nbsp;</th>
            <th>Kecha</th>
            <th>Ovqat</th>
            <th>Xonalar</th>
            <th>Narxi</th>
            <th>Biletlar</th>
            <th>Ketish joyi</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <Link to={'/'}>Tur nomi</Link>
            </td>
            <td>
                6.06.2024, 09:10 - 20.06.2024, 09:10
            </td>
            <td>
              <button className="btn p-1">
                <FontAwesomeIcon icon={faFile} />
              </button>
            </td>
            <td>14</td>
            <td>BB</td>
            <td>2Adl</td>
            <td>15 750 000</td>
            <td>12 / 45</td>
            <td>Toshkent</td>
            <td>
              <Link className="btn p-1" to={'/'}>
                <FontAwesomeIcon icon={faPen} />
              </Link>
              <button className="btn p-1">
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </td>
          </tr>
          <tr className="table-warning">
            <td>1</td>
            <td>
              <Link to={'/'}>Tur nomi</Link>
            </td>
            <td>
                6.06.2024, 09:10 - 20.06.2024, 09:10
            </td>
            <td>
              <button className="btn p-1">
                <FontAwesomeIcon icon={faFile} />
              </button>
            </td>
            <td>14</td>
            <td>BB</td>
            <td>2Adl</td>
            <td>15 750 000</td>
            <td>12 / 45</td>
            <td>Toshkent</td>
            <td>
              <Link className="btn p-1" to={'/'}>
                <FontAwesomeIcon icon={faPen} />
              </Link>
              <button className="btn p-1">
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </td>
          </tr>
          <tr className="table-danger">
            <td>1</td>
            <td>
              <Link to={'/'}>Tur nomi</Link>
            </td>
            <td>
                6.06.2024, 09:10 - 20.06.2024, 09:10
            </td>
            <td>
              <button className="btn p-1">
                <FontAwesomeIcon icon={faFile} />
              </button>
            </td>
            <td>14</td>
            <td>BB</td>
            <td>2Adl</td>
            <td>15 750 000</td>
            <td>12 / 45</td>
            <td>Toshkent</td>
            <td>
              <Link className="btn p-1" to={'/'}>
                <FontAwesomeIcon icon={faPen} />
              </Link>
              <button className="btn p-1">
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TourTable;