import { FormikProps } from "formik";
import i18n from "../../../utils/i18n";
import { getName } from "../../../utils";
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
                  key={"tour-create-airways-index-" + idx}
                  value={x.id}
                >
                  {getName(x, i18n.language)}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label" htmlFor="tour-city_from">
              {t("city-from")}
            </label>
            <select
              className="form-select"
              id="tour-city_from"
              name="city_from"
              value={formik.values.city_from || 0}
              onChange={(event) => {
                const selectedValue = parseInt(event.target.value);
                formik.setFieldValue("city_from", selectedValue);
              }}
              onBlur={formik.handleBlur}
            >
              <option value={0}></option>
              {cities &&
              cities.map((x, idx) => (
                <option
                  key={"tour-create-cities-from-index-" + idx}
                  value={x.id}
                >
                  {getName(x, i18n.language)}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label" htmlFor="tour-city_to">
              {t("city-to")}
            </label>
            <select
              className="form-select"
              id="tour-city_to"
              name="city_to"
              value={formik.values.city_to || 0}
              onChange={(event) => {
                const selectedValue = parseInt(event.target.value);
                formik.setFieldValue("city_to", selectedValue);
              }}
              onBlur={formik.handleBlur}
            >
              <option value={0}></option>
              {cities &&
              cities.map((x, idx) => (
                <option
                  key={"tour-create-cities-to-index-" + idx}
                  value={x.id}
                >
                  {getName(x, i18n.language)}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label">{t('time-from')}</label>
            <input
              type="datetime-local"
              className="form-control"
              name='from'
              value={formik.values.from}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label">{t('time-to')}</label>
            <input
              type="datetime-local"
              className="form-control"
              name='to'
              value={formik.values.to}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label" htmlFor="tour-airway-position">
              {t("position-in-the-list")}
            </label>
            <input
              type="number"
              id="tour-airway-position"
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
          <button className="btn btn-success">{t('add')}</button>
        </div>
      </div>
    </div>
  )
}

export default CreateAirwaysInfo;