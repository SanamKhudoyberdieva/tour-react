import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const RolesTable = () => {
  const { t } = useTranslation();
  const { roles } = useSelector((state: RootState) => state.rolesReducer);

  return (
    <Table striped hover responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>{t("name")}</th>
          <th>{t("key")}</th>
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
              <Link to={`/role/edit/${x.id}`} className="btn p-1">
                <FontAwesomeIcon icon={faPen} />
              </Link>
              <button className="btn p-1">
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default RolesTable;