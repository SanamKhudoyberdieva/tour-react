import { Link } from "react-router-dom";
import { TourType } from "../../../store/types";
import { formatDateToInputValue, getName } from "../../../utils";

const ApplicationTransportTable = ({data}: {data: TourType}) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="table-responsive mb-4">
          <h6>Транспорт</h6>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Reys</th>
                <th>date</th>
                <th>quantity</th>
              </tr>
            </thead>
            <tbody>
              {data.airways.map((x, index) => (
                <tr key={`application-create-airways-`+index}>
                  <td>
                    <Link to={"/airplane"}>{getName(x.airway)}</Link>
                  </td>
                  <td>{formatDateToInputValue(x.from)}</td>
                  <td>2</td>
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
