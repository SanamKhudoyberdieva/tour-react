import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Pagination from "../../components/Pagination";
import NewsTable from "../../components/news/NewsTable";

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
          {t('news')}
        </h4>
        <Link className="btn btn-success" to={'/news/create'}
          >{t('add-news')}</Link>
      </div>
      <div className="card">
        <div className="card-body">
          <NewsTable />
        </div>
      </div>
    </>
  )
}

export default Index;