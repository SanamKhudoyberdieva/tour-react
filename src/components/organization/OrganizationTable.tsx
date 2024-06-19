import { useEffect } from "react";
import { Link } from "react-router-dom";
import { RootState } from "../../store";
import { formateDate } from "../../utils";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteOrganization, getOrganizations } from "../../api";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { setOrganizations } from "../../store/slices/organizationSlice";

const OrganizationTable = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { organizations } = useSelector((state: RootState) => state.organizationsReducer);

  const handleGetAll = async () => {
    try {
      const res = await getOrganizations();
      console.log("API Response:", res.data);
      dispatch(setOrganizations(res.data));
    } catch (error) {
      console.log("error getOrganizations: ", error);
    }
  };

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm(t('are-you-sure-you-want-to-delete'));
    if (!confirmed) return;
    
    try {
      await deleteOrganization(id);
      handleGetAll();
    } catch (error) {
      console.log("error deleteOrganization: ", error);
    }
  };

  useEffect(() => {
    console.log("Organizations State:", organizations);
    handleGetAll();
  }, []);

  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>{t('name')}</th>
            <th>{t('director')}</th>
            <th>{t('city')}</th>
            <th>{t('application-count')}</th>
            <th>{t('worker-count')}</th>
            <th>{t('created-at')}</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
        {organizations &&
        organizations.map((x, idx) => (
          <tr key={"organizations-list-id-" + x.id}>
            <td>{idx + 1}</td>
            <td><Link to={`/organization/view/${x.id}`}>{x.name}</Link></td>
            <td>{x.director}</td>
            <td>
              {x.city}
            </td>
            <td>
              {x.application_count}
            </td>
            <td>
              {x.worker_count}
            </td>
            <td>
              {formateDate(x.created_at)}
            </td>
            <td>
              <Link className="btn p-1" to={`/organization/edit/${x.id}`}>
                <FontAwesomeIcon icon={faPen}/>
              </Link>
              <button className="btn p-1">
                <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(x.id)}/>
              </button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default OrganizationTable;