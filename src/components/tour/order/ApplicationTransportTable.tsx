import { Link } from "react-router-dom";
import { TourType } from "../../../store/types";
import { formatDateToInputValue, getName } from "../../../utils";
import { useTranslation } from "react-i18next";

const ApplicationTransportTable = ({data}: {data: TourType}) => {
  const { t } = useTranslation();

  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="table-responsive mb-4">
          <h6>{t('transport')}</h6>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>{t('flight')}</th>
                <th>{t('duration')}</th>
                <th>{t('quantity')}</th>
              </tr>
            </thead>
            <tbody>
              {data.airways.map((x, index) => (
                <tr key={`application-create-airways-`+index}>
                  <td>
                    <Link to={"/airplane"}>{getName(x.airway)}</Link>
                  </td>
                  <td>{formatDateToInputValue(x.from)} - {formatDateToInputValue(x.to)}</td>
                  <td>2 STATIC</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <div>
            <div>
              Багаж: <span>20 КГ</span>
            </div>
            <div>
              Ручная кладь: <span>8 КГ</span>
            </div>
            <div>
              Bagaj: <span>20kg</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ApplicationTransportTable;
