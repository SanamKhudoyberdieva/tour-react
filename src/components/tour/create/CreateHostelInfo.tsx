import React from "react";
import { useTranslation } from "react-i18next";
import { Formik, FormikProps, Form } from "formik";
import { HostelType } from "../../../store/types";
import { formatDateToInputValue, getName } from "../../../utils";
import i18n from "../../../utils/i18n";

interface FormValues {
  hotels: {
    from: string;
    hotel_id: number;
    nutrition_type: string;
    position: number;
    price: number;
    to: string;
  }[];
}

interface CreateHostelInfoProps {
  formik: FormikProps<FormValues>;
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
              name="hotels[0].hotel_id"
              value={formik.values.hotels[0].hotel_id}
              onChange={(event) => {
                const selectedValue = parseInt(event.target.value);
                formik.setFieldValue("hotels[0].hotel_id", selectedValue);
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
            <label className="form-label" htmlFor="tour-hostels-nutrition_type">
              {t("nutrition-type")}
            </label>
            <div className="d-flex">
              <input
                type="text"
                className="form-control"
                name="hotels[0].nutrition_type"
                id="tour-hostels-nutrition_type"
                value={formik.values.hotels[0].nutrition_type}
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
              name='hotels[0].from'
              id="tour-hostels-time_from"
              value={formik.values.hotels[0].from ? formatDateToInputValue(formik.values.hotels[0].from) : ""}
              onChange={(event) => {
                formik.setFieldValue('hotels[0].from', event.target.value);
              }}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label" htmlFor="tour-hostels-time_to">{t('time-to')}</label>
            <input
              type="datetime-local"
              className="form-control"
              name='hotels[0].to'
              id="tour-hostels-time_to"
              value={formik.values.hotels[0].to ? formatDateToInputValue(formik.values.hotels[0].to) : ""}
              onChange={(event) => {
                formik.setFieldValue('hotels[0].to', event.target.value);
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
              name="hotels[0].position"
              value={formik.values.hotels[0].position}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label" htmlFor="tour-hostel-price">{t('price')}</label>
            <input
              type="number"
              className="form-control"
              name='hotels[0].price'
              id="tour-hostel-price"
              value={formik.values.hotels[0].price}
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
  );
};

const CreateHostelForm: React.FC<{ hostels: HostelType[] }> = ({ hostels }) => {
  const initialValues: FormValues = {
    hotels: [
      {
        from: "",
        hotel_id: 0,
        nutrition_type: "",
        position: 0,
        price: 0,
        to: "",
      },
    ],
  };

  return (
    <Formik<FormValues>
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formikProps) => (
        <Form>
          <CreateHostelInfo formik={formikProps} hostels={hostels} />
        </Form>
      )}
    </Formik>
  );
};

export default CreateHostelForm;
