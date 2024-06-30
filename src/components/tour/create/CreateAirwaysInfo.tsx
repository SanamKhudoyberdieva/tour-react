import { FormikProps } from "formik";
import i18n from "../../../utils/i18n";
import { formatDateToISOString, getName } from "../../../utils";
import { useTranslation } from "react-i18next";
import { AirwayType, CityType } from "../../../store/types";
interface CreateAirwaysInfoProps {
  formik: FormikProps<any>;
  airways: AirwayType[];
  cities: CityType[];
}

const CreateAirwaysInfo: React.FC<CreateAirwaysInfoProps> = ({ formik, airways, cities }) => {
  const { t } = useTranslation();

  return (
    <div className="card mb-4">
      <div className="card-body">
        <div className="row">
          <div className="col-md-4 mb-3">
            <label className="form-label" htmlFor="tour-airways">
              {t("airways")}
            </label>
            <select
              className="form-select"
              id="tour-airways"
              name="airway_id"
              value={formik.values.airway_id || 0}
              onChange={(event) => {
                const selectedValue = parseInt(event.target.value);
                formik.setFieldValue("airway_id", selectedValue);
              }}
              onBlur={formik.handleBlur}
            >
              <option value={0}></option>
              {airways &&
                airways.map((x, idx) => (
                  <option
                    key={"tour-airways-create-airway-index-" + idx}
                    value={x.id}
                  >
                    {getName(x, i18n.language)}
                  </option>
                ))}
            </select>
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label" htmlFor="tour-airways-city_from">
              {t("city-from")}
            </label>
            <select
              className="form-select"
              id="tour-airways-city_from"
              name={`airways.city_from`}
              value={formik.values.airways.city_from || 0}
              onChange={(event) => {
                const selectedValue = parseInt(event.target.value);
                formik.setFieldValue("airways.city_from", selectedValue);
              }}
              onBlur={formik.handleBlur}
            >
              <option value={0}></option>
              {cities &&
                cities.map((x, idx) => (
                  <option
                    key={"tour-airways-create-cities-from-index-" + idx}
                    value={x.id}
                  >
                    {getName(x, i18n.language)}
                  </option>
                ))}
            </select>
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label" htmlFor="tour-airways-city_to">
              {t("city-to")}
            </label>
            <select
              className="form-select"
              id="tour-airways-city_to"
              name={`airways.city_to`}
              value={formik.values.airways.city_to || 0}
              onChange={(event) => {
                const selectedValue = parseInt(event.target.value);
                formik.setFieldValue("airways.city_to", selectedValue);
              }}
              onBlur={formik.handleBlur}
            >
              <option value={0}></option>
              {cities &&
                cities.map((x, idx) => (
                  <option
                    key={"tour-airways-create-cities-to-index-" + idx}
                    value={x.id}
                  >
                    {getName(x, i18n.language)}
                  </option>
                ))}
            </select>
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label" htmlFor="tour-airways-time_from">
              {t("time-from")}
            </label>
            <input
              type="datetime-local"
              className="form-control"
              name="from"
              id="tour-airways-time_from"
              value={formik.values.from}
              onChange={(event) => {
                const formattedValue = formatDateToISOString(
                  event.target.value,
                );
                formik.setFieldValue("from", formattedValue);
              }}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label" htmlFor="tour-airways-time_to">
              {t("time-to")}
            </label>
            <input
              type="datetime-local"
              className="form-control"
              name="to"
              id="tour-airways-time_to"
              value={formik.values.to}
              onChange={(event) => {
                const formattedValue = formatDateToISOString(
                  event.target.value,
                );
                formik.setFieldValue("to", formattedValue);
              }}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label" htmlFor="tour-airways-position">
              {t("position-in-the-list")}
            </label>
            <input
              type="number"
              id="tour-airways-position"
              className="form-control"
              name="position"
              value={formik.values.position ? formik.values.position : ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <hr />
        </div>
        <div>
          <button className="btn btn-success">{t("add")}</button>
        </div>
      </div>
    </div>
  );
}

export default CreateAirwaysInfo;