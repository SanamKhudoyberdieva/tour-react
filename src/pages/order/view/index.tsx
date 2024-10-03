import i18n from "../../../utils/i18n";
import { useEffect, useState } from "react";
import { getApplication } from "../../../api";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { formateDate, getName } from "../../../utils";
import { ApplicantionType } from "../../../store/types/tour/order/application";

const Index = () => {
  const params = useParams();
  const { t } = useTranslation();
  const [data, setData] = useState<ApplicantionType>();

  const handleGet = async (id: number) => {
    try {
      const res = await getApplication(id);
      setData(res.data);
    } catch (error) {
      console.log("error getApplication: ", error);
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

  console.log("data", data)

  return (
    <div>
      <div
        className="d-flex mb-4 align-items-center justify-content-between"
      >
        <h4 className="py-3 mb-0">
          <span className="text-muted fw-light"
            ><Link to={'/'}>{t('home')}</Link> / </span>
          <span className="text-muted fw-light"
            ><Link to={'/order'}>{t('orders')}</Link> / </span>
          {getName(data.tour, i18n.language)}
        </h4>
        <Link className="btn btn-info" to={'/order'}>{t('back')}</Link>
      </div>
      <div className="card mb-3">
        <div className="card-body">
          <div className="row">
            <div>
              <table
                className="table table-striped table-bordered detail-view mb-4"
              >
                <tbody>
                  <tr>
                    <th>{t('id')}</th>
                    <td>{data.id}</td>
                  </tr>
                  <tr>
                    <th>{t('name')}</th>
                    <td>
                      <Link to={`/tour/view/${data.tour?.id}`}>
                        {getName(data.tour, i18n.language)}
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <th>{t('status')}</th>
                    <td>{data.status}</td>
                  </tr>
                  <tr>
                    <th>{t('price')}</th>
                    <td>{data.total}</td>
                  </tr>
                  <tr>
                    <th>{t('created')}</th>
                    <td>
                      <Link to={`/admin/view/${data.created?.id}`}>{data.created?.full_name}</Link>
                    </td>
                  </tr>
                  <tr>
                    <th>{t('created-at')}</th>
                    <td>{formateDate(data.created_at)}</td>
                  </tr>
                  <tr>
                    <th>{t('updated')}</th>
                    <td>
                      <Link to={`/admin/view/${data.updated?.id}`}>{data.updated?.full_name}</Link>
                    </td>
                  </tr>
                  <tr>
                    <th>{t('updated-at')}</th>
                    <td>{formateDate(data.updated_at)}</td>
                  </tr>
                  <tr>
                    <th>{t('comment')}</th>
                    <td>
                      {data.comment}
                    </td>
                  </tr>
                  <tr>
                    <th>{t("active")}</th>
                    <td>{data.is_deleted ? t("no") : t("yes")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
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
                  <th>{t("birthday")}</th>
                  <th>{t("passport")}</th>
                  <th>{t("visa")}</th>
                </tr>
              </thead>
              <tbody>
                {data?.applicants &&
                  data.applicants.length > 0 &&
                  data.applicants.map((x, idx: number) => (
                    <tr key={"application-table-applicants-id-" + x.id}>
                      <td>{idx + 1}</td>
                      <td>{x.full_name}</td>
                      <td>{x.phone}</td>
                      <td>{formateDate(x.birthday)}</td>
                      <td>
                        <Link to={`https://backend.poytaxt-team.uz/public/applicants/${x.passport}`} download>{t('passport')}</Link>
                      </td>
                      <td>
                        <Link to={`https://backend.poytaxt-team.uz/public/applicants/${x.visa_file}`} download>{t('visa')}</Link>
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