import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BranchTable from "../../components/branch/BranchTable";

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
          Filyallar
        </h4>
        <Link className="btn btn-success" to={'/branch/create'}
          >Filyal qo'shish</Link>
      </div>
      <div className="card">
        <div className="card-body">
          <BranchTable/>
        </div>
      </div>
    </>
  )
}

export default Index;