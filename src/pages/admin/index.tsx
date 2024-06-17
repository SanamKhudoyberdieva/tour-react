import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AdminTable from "../../components/admin/AdminTable";

const Index = () => {
  const { t } = useTranslation();

  return (
    <>
      <div
        className="d-flex mb-4 align-items-center justify-content-between"
      >
        <h4 className="py-3 mb-0">
          <span className="text-muted fw-light">
            <Link to={'/'}>{t('home')}</Link> / {' '}
          </span>
          {t('admins')}
        </h4>
        <Link className="btn btn-success" to={'/admin/create'}
          >{t('add-admin')}</Link>
      </div>
      <div className="card">
        <div className="card-body">
          <div
            className="d-flex flex-column-reverse flex-md-row align-items-center justify-content-between mb-3"
          ></div>
          <AdminTable />
        </div>
      </div>
    </>
  )
}

export default Index;