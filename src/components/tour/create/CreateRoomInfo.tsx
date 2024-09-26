import React from "react";
import { FormikProps, FieldArray } from "formik";
import { useTranslation } from "react-i18next";
import { RoomType, TourCreateType } from "../../../store/types";
import { getName } from "../../../utils";
import i18n from "../../../utils/i18n";

interface CreateRoomInfoProps {
  formik: FormikProps<TourCreateType>;
  rooms: RoomType[];
}

const CreateRoomInfo: React.FC<CreateRoomInfoProps> = ({ formik, rooms }) => {
  const { t } = useTranslation();

  return (
    <div className="card mb-4">
      <div className="card-body">
        <FieldArray name="rooms">
          {({ push, remove }) => (
            <>
              {formik.values.rooms.map((room, index) => (
                <div className="row" key={index}>
                  <div className="col-md-4 mb-3">
                    <label
                      className="form-label"
                      htmlFor={`tour-rooms-${index}`}
                    >
                      {t("rooms")}
                    </label>
                    <select
                      className="form-select"
                      id={`tour-rooms-${index}`}
                      name={`rooms[${index}].room_id`}
                      value={room.room_id || 0}
                      onChange={(event) => {
                        const selectedValue = parseInt(event.target.value, 10);
                        formik.setFieldValue(
                          `rooms[${index}].room_id`,
                          selectedValue
                        );
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
                    <label
                      className="form-label"
                      htmlFor={`tour-room-price-${index}`}
                    >
                      {t("price")}
                    </label>
                    <input
                      type="number"
                      id={`tour-room-price-${index}`}
                      className="form-control"
                      name={`rooms[${index}].price`}
                      value={room.price}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">{t("count")}</label>
                    <input
                      type="number"
                      className="form-control"
                      name={`rooms[${index}].count`}
                      value={room.count}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label
                      className="form-label"
                      htmlFor={`tour-room-gender-${index}`}
                    >
                      {t("mr-mrs")}
                    </label>
                    <select
                      className="form-select"
                      id={`tour-room-gender-${index}`}
                      name={`rooms[${index}].gender`}
                      value={room.gender}
                      onChange={(event) => {
                        const selectedValue = parseInt(event.target.value, 10);
                        formik.setFieldValue(
                          `rooms[${index}].gender`,
                          selectedValue
                        );
                      }}
                      onBlur={formik.handleBlur}
                    >
                      <option value=""></option>
                      <option value={1}>{t("man")}</option>
                      <option value={2}>{t("woman")}</option>
                    </select>
                  </div>
                  <div className="col-md-12 mb-3 d-flex align-items-end">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => remove(index)}
                    >
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
                  onClick={() =>
                    push({
                      room_id: 0,
                      price: 0,
                      count: 0,
                      gender: 0,
                    })
                  }
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

export default CreateRoomInfo;