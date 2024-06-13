import { Link } from "react-router-dom";
import { formateDate } from "../../utils";
import { AdminType } from "../../store/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const AdminTable = ({ data,}: { data: AdminType[]; handleGet: () => Promise<void>; }) => {

  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>FISH</th>
            <th>Telefon raqam</th>
            <th>Filyal</th>
            <th>Buyurtmalar soni</th>
            <th>Oxirgi tashrif</th>
            <th>Holat</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
        {data &&
          data.length > 0 &&
          data.map((x, idx: number) => (
          <tr key={"admins-table-admin-id-" + x.id}>
            <td>{idx + 1}</td>
            <td>
              <Link to={`/admin/view/${x.id}`}>{x.full_name}</Link>
            </td>
            <td>{x.phone}</td>
            <td>{x.organization}</td>
            <td>67</td>
            <td>{formateDate(x.last_visit)}</td>
            <td>
              <input
                type="checkbox"
                name="is_active"
                disabled
                checked={!!x.is_active}
              ></input>
            </td>
            <td>
              <Link
                className="btn p-1"
                to={`/admin/edit/${x.id}`}
              >
                <FontAwesomeIcon icon={faPen}/>
              </Link>
              <button className="btn p-1">
                <FontAwesomeIcon icon={faTrash}/>
              </button>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminTable;