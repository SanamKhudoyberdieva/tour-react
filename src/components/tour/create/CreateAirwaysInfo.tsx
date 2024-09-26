import React from "react";
import { FormikProps, FieldArray } from "formik";
import i18n from "../../../utils/i18n";
import { formatDateToInputValue, getName } from "../../../utils";
import { useTranslation } from "react-i18next";
import { AirwayType, CityType, TourCreateType } from "../../../store/types";

interface CreateAirwaysInfoProps {
  formik: FormikProps<TourCreateType>;
  airways: AirwayType[];
  cities: CityType[];
}

const CreateAirwaysInfo: React.FC<CreateAirwaysInfoProps> = ({
  formik,
  airways,
  cities,
}) => {
  const { t } = useTranslation();

  return (
    <div className="card mb-4">
      <div className="card-body">
        <FieldArray name="airways">
          {({ push, remove }) => (
            <>
              {formik.values.airways.map((airway, index) => (
                <div className="row" key={index}>
                  <div className="col-md-4 mb-3">
                    <label className="form-label" htmlFor={`tour-airways-${index}`}>
                      {t("airways")}
                    </label>
                    <select
                      className="form-select"
                      id={`tour-airways-${index}`}
                      name={`airways[${index}].airway_id`}
                      value={airway.airway_id || 0}
                      onChange={(event) => {
                        const selectedValue = parseInt(event.target.value, 10);
                        formik.setFieldValue(`airways[${index}].airway_id`, selectedValue);
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
                    <label className="form-label" htmlFor={`tour-airways-city_from-${index}`}>
                      {t("departure-from")}
                    </label>
                    <select
                      className="form-select"
                      id={`tour-airways-city_from_id-${index}`}
                      name={`airways[${index}].city_from_id`}
                      value={airway.city_from_id || 0}
                      onChange={(event) => {
                        const selectedValue = parseInt(event.target.value, 10);
                        formik.setFieldValue(`airways[${index}].city_from_id`, selectedValue);
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
                    <label className="form-label" htmlFor={`tour-airways-city_to-${index}`}>
                      {t("city-to")}
                    </label>
                    <select
                      className="form-select"
                      id={`tour-airways-city_to_id-${index}`}
                      name={`airways[${index}].city_to_id`}
                      value={airway.city_to_id || 0}
                      onChange={(event) => {
                        const selectedValue = parseInt(event.target.value, 10);
                        formik.setFieldValue(`airways[${index}].city_to_id`, selectedValue);
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
                    <label className="form-label" htmlFor={`tour-airways-time_from-${index}`}>
                      {t("time-from")}
                    </label>
                    <input
                      type="datetime-local"
                      className="form-control"
                      name={`airways[${index}].from`}
                      id={`tour-airways-time_from-${index}`}
                      value={
                        airway.from
                          ? formatDateToInputValue(airway.from)
                          : ""
                      }
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label" htmlFor={`tour-airways-time_to-${index}`}>
                      {t("time-to")}
                    </label>
                    <input
                      type="datetime-local"
                      className="form-control"
                      name={`airways[${index}].to`}
                      id={`tour-airways-time_to-${index}`}
                      value={
                        airway.to
                          ? formatDateToInputValue(airway.to)
                          : ""
                      }
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label" htmlFor={`tour-airways-position-${index}`}>
                      {t("position-in-the-list")}
                    </label>
                    <input
                      type="number"
                      id={`tour-airways-position-${index}`}
                      className="form-control"
                      name={`airways[${index}].position`}
                      value={airway.position || ""}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <button type="button" className="btn btn-danger" onClick={() => remove(index)}>
                      {t("remove")}
                    </button>
                  </div>
                  <hr />
                </div>
              ))}
              <div>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => push({
                    airway_id: 0,
                    city_from_id: 0,
                    city_to_id: 0,
                    from: "",
                    position: 0,
                    to: "",
                  })}
                >
                  {t("add")}
                </button>
              </div>
            </>
          )}
        </FieldArray>
      </div>
    </div>
  );
};

export default CreateAirwaysInfo;
