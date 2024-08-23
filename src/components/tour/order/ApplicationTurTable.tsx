import { TourType } from "../../../store/types"
import { formatDateToInputValue, getDescription, getName } from "../../../utils"

const ApplicationTurTable = ({data}: {data: TourType}) => {
  return (
    <div className="card mb-3">
        <div className="card-body">
          <div className="table-responsive mb-4">
            <h6>Тур</h6>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Описание тура</th>
                  <th>СПО</th>
                  <th>Страна</th>
                  <th>Продолжительность</th>
                  <th>ночей</th>
                  <th>Примечание</th>
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
                  <td>CROWN HOTEL NHA TRANG - Special offer</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  )
}

export default ApplicationTurTable