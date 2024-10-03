import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteApplication, getApplications } from "../../api";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { ApplicantionPaginationType } from "../../store/types/tour/order/applicationPaginationList";
import { formateDate, getName } from "../../utils";
import i18n from "../../utils/i18n";
import Pagination from "../../components/Pagination";

export interface FiltersStateType {
  page: number;
  page_size: number;
}

const Index = () => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const queryPageSize = parseInt(searchParams.get("pageSize") || "15");
  const queryPage = parseInt(searchParams.get("page") || "1");
  const [pageSize, setPageSize] = useState(queryPageSize);
  const [currPage, setCurrPage] = useState(queryPage);
  const [data, setData] = useState<ApplicantionPaginationType | null>(null);

  const handleGet = async ({ page, page_size }: FiltersStateType) => {
    try {
      const res = await getApplications(
        {
          tour_id: "",
          page_size,
          page,
          tour_room_id: "",
          user_id: "",
        }
      );
      setData(res.data);
    } catch (error) {
      console.log("error getApplications: ", error);
    }
  };

  const handlePageClick = (event: { selected: number }) => {
    setCurrPage(event.selected + 1);
  };

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm(t('are-you-sure-you-want-to-delete'));
    if (!confirmed) return;
    
    try {
      await deleteApplication(id);
      handleGet({ page: currPage, page_size: pageSize });
    } catch (error) {
      console.log("error deleteApplication: ", error);
    }
  };

  useEffect(() => {
    setSearchParams({
      page: `${currPage}`,
      pageSize: `${pageSize}`,
    });
  }, [currPage, pageSize]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleGet({ page: currPage, page_size: pageSize });
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [ currPage, pageSize]);

  if (!data) return;

  console.log("data", data)

  return (
    <div>
      <div
        className="d-flex mb-4 align-items-center justify-content-between"
      >
        <h4 className="py-3 mb-0">
        <span className="text-muted fw-light">
          <Link to={'/'}>{t('home')}</Link> / {' '}
        </span>
        {t('orders')}
      </h4>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="d-flex flex-column-reverse flex-md-row align-items-center justify-content-between mb-3">
            <div className="d-flex align-items-center">
              <label className="form-label text-nowrap mb-0 me-2">
                {t("page-size")}
              </label>
              <select
                id="page-size-label"
                className="form-select"
                value={pageSize}
                onChange={(e) => setPageSize(parseInt(e.target.value))}
              >
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
                <option value="40">40</option>
                <option value="50">50</option>
                <option value="60">60</option>
                <option value="70">70</option>
                <option value="80">80</option>
                <option value="90">90</option>
                <option value="100">100</option>
              </select>
            </div>
          </div>
          <div className="table-responsive mb-3">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                <th>#</th>
                <th>{t('tour-package')}</th>
                <th>{t('created')}</th>
                <th>{t('price')}</th>
                <th>{t('status')}</th>
                <th>{t('active')}</th>
                <th>{t('created-at')}</th>
                <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody>
              {data?.applications?.map((x, idx) => (
                <tr key={"order-list-item-id" + 1}>
                <td>{idx + 1}</td>
                <td><Link to={`/order/view/${x.id}`}>{getName(x.tour, i18n.language)}</Link></td>
                <td>
                  {x.created?.full_name}
                </td>
                <td>{x.total}</td>
                <td>Kutilmoqda</td>
                <td>
                  <input
                    type="checkbox"
                    name="is_deleted"
                    disabled
                    checked={!x.is_deleted}
                  ></input>
                </td>
                <td>{formateDate(x.created_at)}</td>
                <td>
                  <Link className="btn p-1" to={'/order/edit'}>
                    <FontAwesomeIcon icon={faPen}/>
                  </Link>
                  <button className="btn p-1" onClick={() => handleDelete(x.id)}>
                    <FontAwesomeIcon icon={faTrash}/>
                  </button>
                </td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
          <Pagination
            currPage={data.page}
            recordsFiltered={data.applications.length}
            recordsTotal={data.count}
            handlePageChange={handlePageClick}
          />
        </div>
      </div>
    </div>
  )
}

export default Index;