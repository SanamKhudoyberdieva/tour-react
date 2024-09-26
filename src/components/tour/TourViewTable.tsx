import i18n from "../../utils/i18n";
import { TourType } from "../../store/types";
import { useTranslation } from "react-i18next";
import { formateDate, getDescription, getName } from "../../utils";

const TourViewTable = ({ data }: { data: TourType }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="card mb-3">
        <div className="card-body">
          <table className="table table-striped table-bordered detail-view">
            <tbody>
              <tr>
                <th>{t("id")}</th>
                <td>{data.id}</td>
              </tr>
              <tr>
                <th>Nomi</th>
                <td>{data.name_uz}</td>
              </tr>
              <tr>
                <th>Имя</th>
                <td>{data.name_ru}</td>
              </tr>
              <tr>
                <th>Tasnifi</th>
                <td>{data.description_uz}</td>
              </tr>
              <tr>
                <th>Описание</th>
                <td>{data.description_ru}</td>
              </tr>
              <tr>
                <th>{t("night")}</th>
                <td>{data.night_count}</td>
              </tr>
              <tr>
                <th>{t("created-at")}</th>
                <td>{formateDate(data.created_at)}</td>
              </tr>
              <tr>
                <th>{t("food")}</th>
                <td>{data.nutrition_type}</td>
              </tr>
              <tr>
                <th>{t("visa-price")}</th>
                <td>{data.visa_price} {t('sum')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    
      <h5>{t("airways")}</h5>
      <div className="card mb-3">
        <div className="card-body">
          <table className="table table-striped table-bordered detail-view">
            <tbody>
              {data.airways.map((y, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{y.city_from.name_uz} - {y.city_to.name_uz}</td>
                  <td>{formateDate(y.from)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <h5>{t("hostels")}</h5>
      <div className="card mb-3">
        <div className="card-body">
          <table className="table table-striped table-bordered detail-view">
            <tbody>
              {data.hotels.map((x, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{getName(x.hotel, i18n.language)}</td>
                  <td>{formateDate(x.from)} - {formateDate(x.to)}</td>
                  <td>{x.price} {t('sum')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <h5>{t("extra-packages")}</h5>
      <div className="card mb-3">
        <div className="card-body">
          <table className="table table-striped table-bordered detail-view">
            <tbody>
              {data.extra_packages.map((e, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{getName(e.extra_package, i18n.language)}</td>
                  <td>{e.price} {t('sum')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <h5>{t("navigation")}</h5>
      <div className="card mb-3">
        <div className="card-body">
          <table className="table table-striped table-bordered detail-view">
            <tbody>
              {data?.navigate?.map((n, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{getName(n, i18n.language)}</td>
                  <td>{getDescription(n, i18n.language)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <h5>{t("rooms")}</h5>
      <div className="card">
        <div className="card-body">
          <table className="table table-striped table-bordered detail-view">
            <tbody>
              {data.room_prices.map((r, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{getName(r.room, i18n.language)}</td>
                  <td>{r.price} {t('sum')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default TourViewTable;