import { Link } from "react-router-dom";

const ApplicationHotelTable = () => {
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
              <tr>
                <td>
                  <Link to={"/"}>CROWN HOTEL NHA TRANG 3*</Link>
                </td>
                <td>Нячанг</td>
                <td>Superior City View With Balcony</td>
                <td>2Adl</td>
                <td>BB</td>
                <td>05.06.2024—12.06.2024</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApplicationHotelTable;
