import { deleteRole } from "../../api";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RootState } from "../../store";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { removeRole } from "../../store/slices/rolesSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const RolesTable = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { roles } = useSelector((state: RootState) => state.rolesReducer);

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm(t("are-you-sure-you-want-to-delete"));
    if (!confirmed) return;

    try {
      await deleteRole(id);
      dispatch(removeRole(id));
    } catch (error) {
      console.log("error deleteRole: ", error);
    }
  };

  return (
    <Table striped hover responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>{t("name")}</th>
          <th>{t("key")}</th>
          <th>{t("active")}</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {roles.map((x, idx) => (
          <tr key={"roles-list-item-id-"+x.id}>
            <td>{idx + 1}</td>
            <td>
              <Link to={`/role/view/${x.id}`}>{x.title}</Link>
            </td>
            <td>{x.key}</td>
            <td>
              <input
                type="checkbox"
                name="is_active"
                disabled
                checked={!!x.is_active}
              ></input>
            </td>
            <td>
              <Link to={`/role/edit/${x.id}`} className="btn p-1">
                <FontAwesomeIcon icon={faPen} />
              </Link>
              <button className="btn p-1">
                <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(x.id)} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default RolesTable;