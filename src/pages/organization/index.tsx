import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import OrganizationTable from "../../components/organization/OrganizationTable";

const Index = () => {
  const { t } = useTranslation();

  return (
    <>
      <div
        className="d-flex mb-4 align-items-center justify-content-between">
        <h4 className="py-3 mb-0">
          <span className="text-muted fw-light">
            <Link to={'/'}>{t('home')}</Link> / {' '}
          </span>
          {t('organizations')}
        </h4>
        <Link className="btn btn-success" to={'/organization/create'}
          >{t('add-organization')}</Link>
      </div>
      <div className="card">
        <div className="card-body">
          <OrganizationTable/>
        </div>
      </div>
    </>
  )
}

export default Index;