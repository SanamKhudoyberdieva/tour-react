import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { TourType } from "../../../store/types";
import { formatDateToInputValue, getDescription, getName } from "../../../utils";

const ApplicationHotelTable = ({data}: {data: TourType}) => {
  const { t } = useTranslation();

  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="table-responsive mb-4">
          <h6>{t('accommodation')}</h6>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>{t('hostels')}</th>
                <th>{t('city')}</th>
                <th>{t('description')}</th>
                <th>{t('food')}</th>
                <th>{t('duration')}</th>
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
                  <td>FOOD STATIC</td>
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
