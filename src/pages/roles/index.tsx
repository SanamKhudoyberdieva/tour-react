import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import RolesTable from "../../components/role/RolesTable";

const Index = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="d-flex mb-4 align-items-center justify-content-between">
        <h4 className="py-3 mb-0">
          <span className="text-muted fw-light">
            <Link to={"/"}>{t('home')}</Link> / {' '}
          </span>{" "}
          {t('roles')}
        </h4>
        <Link to={"/role/create"} className="btn btn-success">
          {t('add-role')}
        </Link>
      </div>
      <div className="card">
        <div className="card-body">
          <RolesTable />
        </div>
      </div>
    </div>
  );
};

export default Index;