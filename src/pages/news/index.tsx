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
          <div
            className="d-flex flex-column-reverse flex-md-row align-items-center justify-content-between mb-3"
          >
            <div className="d-flex align-items-center">
              <label
                className="form-label text-nowrap mb-0 me-2"
                >Размер стр:</label>
              <select id="page-size-label" className="form-select">
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
            </div>
          </div>
          <NewsTable />
          <Pagination />
        </div>
      </div>
    </>
  )
}

export default Index;