import { Link } from "react-router-dom";
import { TourType } from "../../../store/types";
import { formatDateToInputValue, getDescription, getName } from "../../../utils";

const ApplicationHotelTable = ({data}: {data: TourType}) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="table-responsive mb-4">
          <h6>Проживание</h6>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Гостиница</th>
                <th>Город</th>
                <th>Номер</th>
                <th>Размещение</th>
                <th>Питание</th>
                <th>Период проживания</th>
              </tr>
            </thead>
            <tbody>
              {data.hotels.map((x, index) => (
                <tr key={`application-create-hotel-`+index}>
                  <td>
                    <Link to={"/hostel"}>{getName(x.hotel)}</Link>
                  </td>
                  <td>{getName(x.hotel?.city)}</td>
                  <td>{getDescription(x.hotel)}</td>
                  <td>2Adl</td>
                  <td>BB</td>
                  <td>{formatDateToInputValue(x.from)}—{formatDateToInputValue(x.to)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApplicationHotelTable;
