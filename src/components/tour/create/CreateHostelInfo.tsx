import { FormikProps } from "formik";
import { useTranslation } from "react-i18next";
import { HostelType } from "../../../store/types";
import { formatDateToISOString, getName } from "../../../utils";
import i18n from "../../../utils/i18n";
interface CreateHostelInfoProps {
  formik: FormikProps<any>;
  hostels: HostelType[];
}

const CreateHostelInfo: React.FC<CreateHostelInfoProps> = ({ formik, hostels }) => {
  const { t } = useTranslation();

  return (
    <div className="card mb-4">
      <div className="card-body">
        <div className="row">
          <div className="col-md-4 mb-3">
            <label className="form-label" htmlFor="tour-hostels">
              {t("hostels")}
            </label>
            <select
              className="form-select"
              id="tour-hostels"
              name="hostel_id"
              value={formik.values.hostel_id || 0}
              onChange={(event) => {
                const selectedValue = parseInt(event.target.value);
                formik.setFieldValue("hostel_id", selectedValue);
              }}
              onBlur={formik.handleBlur}
            >
              <option value={0}></option>
              {hostels &&
              hostels.map((x, idx) => (
                <option
                  key={"tour-create-hostels-index-" + idx}
                  value={x.id}
                >
                  {getName(x, i18n.language)}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label" htmlFor="tour-hostels-nutrition_type"
              >{t("nutrition-type")}</label>
            <div className="d-flex">
              <input
                type="text"
                className="form-control"
                name="nutrition_type"
                id="tour-hostels-nutrition_type"
                value={formik.values.nutrition_type}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label" htmlFor="tour-hostels-time_from">{t('time-from')}</label>
            <input
              type="datetime-local"
              className="form-control"
              name='from'
              id="tour-hostels-time_from"
              value={formik.values.from}
              onChange={(event) => {
                const formattedValue = formatDateToISOString(event.target.value);
                formik.setFieldValue('from', formattedValue);
              }}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label" htmlFor="tour-hostels-time_to">{t('time-to')}</label>
            <input
              type="datetime-local"
              className="form-control"
              name='to'
              id="tour-hostels-time_to"
              value={formik.values.to}
              onChange={(event) => {
                const formattedValue = formatDateToISOString(event.target.value);
                formik.setFieldValue('to', formattedValue);
              }}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label" htmlFor="tour-hostel-position">
              {t("position-in-the-list")}
            </label>
            <input
              type="number"
              id="tour-hostel-position"
              className="form-control"
              name="position"
              value={formik.values.position ? formik.values.position : ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label" htmlFor="tour-hostel-price">{t('price')}</label>
            <input
              type="number"
              className="form-control"
              name='price'
              id="tour-hostel-price"
              value={formik.values.price}
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

export default CreateHostelInfo;