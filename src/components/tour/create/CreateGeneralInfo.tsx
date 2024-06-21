import { useTranslation } from 'react-i18next';
import { CityType } from '../../../store/types';
import { FormikProps } from 'formik';
import { getName } from '../../../utils';
import i18n from '../../../utils/i18n';
interface CreateAirwaysInfoProps {
  formik: FormikProps<any>;
  cities: CityType[];
}

const CreateGeneralInfo: React.FC<CreateAirwaysInfoProps> = ({ formik, cities }) => {
  const { t } = useTranslation();

  return (
    <div className="card mb-4">
      <div className="card-body">
        <div className="row">
          <div className="col-md-3 mb-3">
            <label className="form-label" >Название тура</label>
            <input
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-md-3 mb-3">
            <label className="form-label" >Tur nomi</label>
            <input
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-md-3 mb-3">
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
          <div className="col-md-3 mb-3">
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
          <div className="col-md-3 mb-3">
            <label className="form-label" 
              >ночей</label>
            <input
              type="number"
              className="form-control"
            />
          </div>
          <div className="col-md-3 mb-3">
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
          <div className="col-md-3 mb-3">
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
        </div>
      </div>
    </div>
  )
}

export default CreateGeneralInfo
