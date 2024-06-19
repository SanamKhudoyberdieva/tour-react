import { getRoleById } from "../../../api";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { RoleType } from "../../../store/types/role/role";
import RolesViewTable from "../../../components/role/RolesViewTable";

const View = () => {
  const params = useParams();
  const { t } = useTranslation();
  const [data, setData] = useState<RoleType>();

  const handleGet = async (id: number) => {
    try {
      const res = await getRoleById(id);
      setData(res.data);
    } catch (error) {
      console.log("error getRoleById: ", error);
    }
  };

  useEffect(() => {
    if (!params || !params.id) return;
    const id = params.id;
    const intId = parseInt(id, 10);
    if (isNaN(intId)) return;
    handleGet(intId);
  }, [params]);

  if (!data) return <></>;
  return (
    <div>
      <div className="d-flex mb-4 align-items-center justify-content-between">
        <h4 className="py-3 mb-0">
          <span className="text-muted fw-light">
            <Link to={"/"}>{t('home')}</Link> /
          </span>{" "}
          <span className="text-muted fw-light">
            <Link to={"/role"}>{t('roles')}</Link> /
          </span>{" "}
          {data.title}
        </h4>
        <Link to={"/role"} className="btn btn-info">
          {t('back')}
        </Link>
      </div>
      <div className="card mb-3">
        <div className="card-body">
          <RolesViewTable />
        </div>
      </div>
    </div>
  );
};

export default View;