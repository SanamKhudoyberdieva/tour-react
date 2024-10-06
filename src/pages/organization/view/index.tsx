import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { deleteAdmin, getAdmins, getOrganization } from "../../../api";
import { Link, useParams } from "react-router-dom";
import { AdminListType, OrganizationType } from "../../../store/types";
import OrganizationViewTable from "../../../components/organization/OrganizationViewTable";
import { formateDate } from "../../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const Index = () => {
  const params = useParams();
  const { t } = useTranslation();
  const [data, setData] = useState<OrganizationType>();
  const [admins, setAdmins] = useState<AdminListType | null>(null);

  const handleGet = async (id: number) => {
    try {
      const res = await getOrganization(id);
      setData(res.data);
    } catch (error) {
      console.log("error getOrganization: ", error);
    }
  };

  const handleGetAdmin = async (id: string = "") => {
    try {
      const res = await getAdmins({ organization_id: id });
      setAdmins(res.data);
    } catch (error) {
      console.log("error getAdmins: ", error);
    }
  };

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm(t("are-you-sure-you-want-to-delete"));
    if (!confirmed) return;
    const organization_id = params.id;
    try {
      await deleteAdmin(id);
      handleGetAdmin(organization_id);
    } catch (error) {
      console.log("error deleteAdmin: ", error);
    }
  };

  useEffect(() => {
    if (!params || !params.id) return;
    const id = params.id;
    const intId = parseInt(id, 10);
    if (isNaN(intId)) return;
    handleGet(intId);
    handleGetAdmin(intId.toString());
  }, [params]);

  if (!data) return <></>;

  return (
    <>
      <div className="d-flex mb-4 align-items-center justify-content-between">
        <h4 className="py-3 mb-0">
          <span className="text-muted fw-light">
            <Link to={"/"}>{t("home")}</Link> /{" "}
          </span>
          <span className="text-muted fw-light">
            <Link to={"/organization"}>{t("organizations")}</Link> /{" "}
          </span>
          {data.name}
        </h4>
        <Link className="btn btn-info" to={"/organization"}>
          {t("back")}
        </Link>
      </div>
      <div className="card mb-3">
        <div className="card-body">
          <OrganizationViewTable data={data} />
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>{t("fullname")}</th>
                  <th>{t("phone-number")}</th>
                  <th>{t("organization")}</th>
                  <th>{t("orders-number")}</th>
                  <th>{t("last-visit")}</th>
                  <th>{t("active")}</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                {admins?.admins &&
                  admins.admins.length > 0 &&
                  admins.admins.map((x, idx: number) => (
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
                        <Link className="btn p-1" to={`/admin/edit/${x.id}`}>
                          <FontAwesomeIcon icon={faPen} />
                        </Link>
                        <button className="btn p-1">
                          <FontAwesomeIcon
                            icon={faTrash}
                            onClick={() => handleDelete(x.id)}
                          />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
