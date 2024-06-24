import { FormikProps } from "formik";
import { useTranslation } from "react-i18next";
import { HostelType } from "../../../store/types";
import { getName } from "../../../utils";
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
            <label className="form-label" 
              >{t("nutrition-type")}</label>
            <div className="d-flex">
              <input
                type="text"
                className="form-control"
                name="nutrition_type"
                value={formik.values.nutrition_type}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
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
          <div className="col-md-4 mb-3">
            <label className="form-label">{t('price')}</label>
            <input
              type="number"
              className="form-control"
              name='price'
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {/* <div className="col-md-3 col-6 mb-3">
            <label className="form-label">2Adl Количество</label>
            <input
              type="number"
              className="form-control"
            />
            <label className="form-label">2Adl цена</label>
            <input
              type="number"
              className="form-control"
            />
          </div>
          <div className="col-md-3 col-6 mb-3">
            <label className="form-label">3Adl Количество</label>
            <input
              type="number"
              className="form-control"
            />
            <label className="form-label">3Adl цена</label>
            <input
              type="number"
              className="form-control"
            />
          </div>
          <div className="col-md-3 col-6 mb-3">
            <label className="form-label">4Adl (Мужчины) Количество</label>
            <input
              type="number"
              className="form-control"
            />
            <label className="form-label">4Adl (Мужчины) цена</label>
            <input
              type="number"
              className="form-control"
            />
          </div>
          <div className="col-md-3 col-6 mb-3">
            <label className="form-label">4Adl (женщины) Количество</label>
            <input
              type="number"
              className="form-control"
            />
            <label className="form-label">4Adl (женщины) цена</label>
            <input
              type="number"
              className="form-control"
            />
          </div> */}
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