import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getApplications } from "../../api";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { ApplicantionPaginationType } from "../../store/types/tour/order/applicationPaginationList";
import { getName } from "../../utils";
import i18n from "../../utils/i18n";

const Index = () => {
  const { t } = useTranslation();
  const [data, setData] = useState<ApplicantionPaginationType | null>(null);

  const handleGet = async () => {
    try {
      const res = await getApplications();
      setData(res.data);
    } catch (error) {
      console.log("error getApplications: ", error);
    }
  };

  useEffect(() => {
    handleGet();
  }, []);

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
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                <th>#</th>
                <th>{t('tour-package')}</th>
                <th>{t('created')}</th>
                <th>{t('price')}</th>
                <th>{t('status')}</th>
                <th>To'lovgacha muddat</th>
                <th>&nbsp;</th>
                </tr>
                <tr>
                <td></td>
                <td>
                    <input
                    type="text"
                    className="form-control"
                    value=""
                    />
                </td>
                <td></td>
                <td></td>
                <td>
                  <select 
                    className="form-select"
                  >
                    <option value="0"></option>
                    <option value="1">To'langan</option>
                    <option value="2">Kutilmoqda</option>
                    <option value="2">Yopilgan</option>
                  </select>
                </td>
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
                <td>111</td>
                <td>Kutilmoqda</td>
                <td>23 soat</td>
                <td>
                  <Link className="btn p-1" to={'/order/edit'}>
                    <FontAwesomeIcon icon={faPen}/>
                  </Link>
                  <button className="btn p-1">
                    <FontAwesomeIcon icon={faTrash}/>
                  </button>
                </td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index;