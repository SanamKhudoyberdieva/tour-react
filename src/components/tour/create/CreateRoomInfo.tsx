import { FormikProps } from "formik";
import { useTranslation } from "react-i18next";
import { RoomType } from "../../../store/types";
import { getName } from "../../../utils";
import i18n from "../../../utils/i18n";
interface CreateRoomInfoProps {
  formik: FormikProps<any>;
  rooms: RoomType[];
}

const CreateRoomInfo: React.FC<CreateRoomInfoProps> = ({ formik, rooms }) => {
  const { t } = useTranslation();

  return (
    <div className="card mb-4">
      <div className="card-body">
        <div className="row">
          <div className="col-md-4 mb-3">
            <label className="form-label" htmlFor="tour-rooms">
              {t("rooms")}
            </label>
            <select
              className="form-select"
              id="tour-rooms"
              name="room_id"
              value={formik.values.room_id || 0}
              onChange={(event) => {
                const selectedValue = parseInt(event.target.value);
                formik.setFieldValue("room_id", selectedValue);
              }}
              onBlur={formik.handleBlur}
            >
              <option value={0}></option>
              {rooms &&
              rooms.map((x, idx) => (
                <option
                  key={"tour-create-rooms-index-" + idx}
                  value={x.id}
                >
                  {getName(x, i18n.language)}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label" htmlFor="tour-room-price">
              {t("price")}
            </label>
            <input
              type="number"
              id="tour-room-price"
              className="form-control"
              name="price"
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label">{t('count')}</label>
            <input
              type="number"
              className="form-control"
              name='count'
              value={formik.values.count}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label" htmlFor="tour-room-gender">{t('gender')}</label>
            <select
              className="form-select"
              id="tour-room-gender"
              name="gender"
              value={formik.values.gender}
              onChange={(event) => {
                const selectedValue = parseInt(event.target.value);
                formik.setFieldValue("gender", selectedValue);
              }}
              onBlur={formik.handleBlur}
            >
              <option value=''>{t('choose-gender')}</option>
                <option value={0}>{t('man')}</option>
                <option value={1}>{t('woman')}</option>
            </select>
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

export default CreateRoomInfo;