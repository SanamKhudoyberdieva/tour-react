import { useTranslation } from "react-i18next";
import { TourType } from "../../../store/types"
import { formatDateToInputValue, getDescription, getName } from "../../../utils"

const ApplicationTurTable = ({data}: {data: TourType}) => {
  const { t } = useTranslation();

  return (
    <div className="card mb-3">
        <div className="card-body">
          <div className="table-responsive mb-4">
            <h6>{t('tour-package')}</h6>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>{t('description')}</th>
                  <th>{t('airways')}</th>
                  <th>{t('city')}</th>
                  <th>{t('duration')}</th>
                  <th>{t('night')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{getDescription(data)}</td>
                  <td>{data.airways.map((airway, index) => (
                      <div key={index}>{getName(airway.airway)}</div>
                    ))}</td>
                  <td>
                    {data.airways.map((airway, index) => (
                      <div key={index}>{getName(airway.city_to)}</div>
                    ))}
                  </td>
                  <td>{formatDateToInputValue(data.from)}—{formatDateToInputValue(data.to)}</td>
                  <td>{data.night_count}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  )
}

export default ApplicationTurTable