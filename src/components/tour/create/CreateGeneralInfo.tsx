import { useTranslation } from "react-i18next";
import { CityType, TourCreateType } from "../../../store/types";
import { FormikProps } from "formik";
import { formatDateToInputValue, getName } from "../../../utils";
import i18n from "../../../utils/i18n";
interface CreateAirwaysInfoProps {
  formik: FormikProps<TourCreateType>;
  cities: CityType[];
}

const CreateGeneralInfo: React.FC<CreateAirwaysInfoProps> = ({
  formik,
  cities,
}) => {
  const { t } = useTranslation();

  return (
    <div className="card mb-4">
      <div className="card-body">
        <div className="row">
          <div className="col-md-3 mb-3">
            <label className="form-label" htmlFor="tour-name_ru">
              Название тура
            </label>
            <input
              type="text"
              className="form-control"
              name="name_ru"
              id="tour-name_ru"
              value={formik.values.name_ru}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="col-md-3 mb-3">
            <label className="form-label" htmlFor="tour-name_uz">
              Tur nomi
            </label>
            <input
              type="text"
              className="form-control"
              name="name_uz"
              id="tour-name_uz"
              value={formik.values.name_uz}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="col-md-3 mb-3">
            <label className="form-label" htmlFor="tour-tarif_type">
              {t("type")}
            </label>
            <div className="d-flex">
              <input
                type="text"
                className="form-control"
                name="tarif_type"
                id="tour-tarif_type"
                value={formik.values.tarif_type}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <label className="form-label" htmlFor="tour-night_count">
              {t('night')}
            </label>
            <input
              type="number"
              className="form-control"
              name="night_count"
              id="tour-night_count"
              value={formik.values.night_count}
              onChange={(event) => {
                const selectedValue = parseInt(event.target.value, 10);
                formik.setFieldValue(`night_count`, selectedValue);
              }}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="col-md-3 mb-3">
            <label className="form-label" htmlFor="tour-city_from">
              {t("departure-from")}
            </label>
            <select
              className="form-select"
              id="tour-city_from"
              name="city_from_id"
              value={formik.values.city_from_id || 0}
              onChange={(event) => {
                const selectedValue = parseInt(event.target.value);
                formik.setFieldValue("city_from_id", selectedValue);
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
          {/* <div className="col-md-3 mb-3">
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
          </div> */}
          <div className="col-md-4 mb-3">
            <label className="form-label" htmlFor="tour-from">
              {t("time-from")}
            </label>
            <input
              type="datetime-local"
              className="form-control"
              name="from"
              id="tour-from"
              value={
                formik.values.from
                  ? formatDateToInputValue(formik.values.from)
                  : ""
              }
              onChange={(event) => {
                formik.setFieldValue("from", event.target.value);
              }}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label" htmlFor="tour-to">
              {t("time-to")}
            </label>
            <input
              type="datetime-local"
              className="form-control"
              name="to"
              id="tour-to"
              value={
                formik.values.to ? formatDateToInputValue(formik.values.to) : ""
              }
              onChange={(event) => {
                formik.setFieldValue("to", event.target.value);
              }}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="col-md-3 mb-3">
            <label className="form-label" htmlFor="tour-baby_price">
              {t("baby-price")}
            </label>
            <input
              type="number"
              className="form-control"
              name="baby_price"
              id="tour-baby_price"
              value={formik.values.baby_price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="col-md-3 mb-3">
            <label className="form-label" htmlFor="tour-child_price">
              {t("child-price")}
            </label>
            <input
              type="number"
              className="form-control"
              name="child_price"
              id="tour-child_price"
              value={formik.values.child_price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="col-md-3 mb-3">
            <label className="form-label" htmlFor="tour-visa_price">
              {t("visa-price")}
            </label>
            <input
              type="number"
              className="form-control"
              name="visa_price"
              id="tour-visa_price"
              value={formik.values.visa_price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="col-md-3 mb-3">
            <label className="form-label" htmlFor="tour-nutrition_type">
              {t("food")}
            </label>
            <div className="d-flex">
              <input
                type="text"
                className="form-control"
                name="nutrition_type"
                id="tour-nutrition_type"
                value={formik.values.nutrition_type}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <label className="form-label" htmlFor="tour-position_in_the_list">
              {t("position-in-the-list")}
            </label>
            <input
              type="number"
              id="tour-position_in_the_list"
              className="form-control"
              name="position"
              value={formik.values.position ? formik.values.position : ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateGeneralInfo;