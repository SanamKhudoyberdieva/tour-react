import { getAdmins } from "../../api";
import { Link } from "react-router-dom";
import { formateDate } from "../../utils";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AdminListType } from "../../store/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const AdminTable = () => {
  const { t } = useTranslation();
  const [data, setData] = useState<AdminListType | null>(null);

  const handleGet = async () => {
    try {
      const res = await getAdmins();
      setData(res.data);
    } catch (error) {
      console.log("error getAdmins: ", error);
    }
  };

  useEffect(() => {
    handleGet();
  }, []);

  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>{t('fullname')}</th>
            <th>{t('phone-number')}</th>
            <th>{t('organization')}</th>
            <th>{t('order-number')}</th>
            <th>{t('last-visit')}</th>
            <th>{t('status')}</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
        {data?.admins &&
          data.admins.length > 0 &&
          data.admins.map((x, idx: number) => (
          <tr key={"admins-table-admin-id-" + x.id}>
            <td>{idx + 1}</td>
            <td>
              <Link to={`/admin/view/${x.id}`}>{x.full_name}</Link>
            </td>
            <td>{x.phone}</td>
            <td>{x.organization?.name}</td>
            <td>{x.application_count}</td>
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