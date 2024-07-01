import React from "react";
import { useTranslation } from "react-i18next";
import { FormikProps, FieldArray } from "formik";
import { HostelType, TourCreateType } from "../../../store/types";
import { formatDateToInputValue, getName } from "../../../utils";
import i18n from "../../../utils/i18n";

interface CreateHostelInfoProps {
  formik: FormikProps<TourCreateType>;
  hostels: HostelType[];
}

const CreateHostelInfo: React.FC<CreateHostelInfoProps> = ({
  formik,
  hostels,
}) => {
  const { t } = useTranslation();

  return (
    <div className="card mb-4">
      <div className="card-body">
        <FieldArray name="hotels">
          {({ push, remove }) => (
            <>
              {formik.values.hotels.map((hotel, index) => (
                <div className="row" key={index}>
                  <div className="col-md-4 mb-3">
                    <label
                      className="form-label"
                      htmlFor={`tour-hostels-${index}`}
                    >
                      {t("hostels")}
                    </label>
                    <select
                      className="form-select"
                      id={`tour-hostels-${index}`}
                      name={`hotels[${index}].hotel_id`}
                      value={hotel.hotel_id}
                      onChange={(event) => {
                        const selectedValue = parseInt(event.target.value, 10);
                        formik.setFieldValue(
                          `hotels[${index}].hotel_id`,
                          selectedValue
                        );
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
                    <label
                      className="form-label"
                      htmlFor={`tour-hostels-nutrition_type-${index}`}
                    >
                      {t("nutrition-type")}
                    </label>
                    <div className="d-flex">
                      <input
                        type="text"
                        className="form-control"
                        name={`hotels[${index}].nutrition_type`}
                        id={`tour-hostels-nutrition_type-${index}`}
                        value={hotel.nutrition_type}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label
                      className="form-label"
                      htmlFor={`tour-hostels-time_from-${index}`}
                    >
                      {t("time-from")}
                    </label>
                    <input
                      type="datetime-local"
                      className="form-control"
                      name={`hotels[${index}].from`}
                      id={`tour-hostels-time_from-${index}`}
                      value={
                        hotel.from ? formatDateToInputValue(hotel.from) : ""
                      }
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label
                      className="form-label"
                      htmlFor={`tour-hostels-time_to-${index}`}
                    >
                      {t("time-to")}
                    </label>
                    <input
                      type="datetime-local"
                      className="form-control"
                      name={`hotels[${index}].to`}
                      id={`tour-hostels-time_to-${index}`}
                      value={hotel.to ? formatDateToInputValue(hotel.to) : ""}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label
                      className="form-label"
                      htmlFor={`tour-hostel-position-${index}`}
                    >
                      {t("position-in-the-list")}
                    </label>
                    <input
                      type="number"
                      id={`tour-hostel-position-${index}`}
                      className="form-control"
                      name={`hotels[${index}].position`}
                      value={hotel.position}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label
                      className="form-label"
                      htmlFor={`tour-hostel-price-${index}`}
                    >
                      {t("price")}
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      name={`hotels[${index}].price`}
                      id={`tour-hostel-price-${index}`}
                      value={hotel.price}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  <div className="col-md-4 mb-3">
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
                      from: "",
                      hotel_id: 0,
                      nutrition_type: "",
                      position: 0,
                      price: 0,
                      to: "",
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

export default CreateHostelInfo;
