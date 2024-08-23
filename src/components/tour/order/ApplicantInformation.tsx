import React from "react";
import * as Yup from "yup";
import InputMask from "react-input-mask";
import { Field, ErrorMessage, useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { ApplicantsCreateType } from "../../../store/types/tour/order/applicantsCreate";
import { createApplicant } from "../../../api";

interface ApplicantInformationProps {
  index: number;
}

const ApplicantInformation: React.FC<ApplicantInformationProps> = ({
  index,
}) => {
  const { t } = useTranslation();

  const initialValues: ApplicantsCreateType = {
    applicants: [
      {
        applicant_type: 0,
        full_name: "",
        birthday: "",
        expire_date: "",
        phone: "",
        second_phone: ""
      },
    ],
  };

  const onSubmit = async (values: ApplicantsCreateType) => {
    try {
      await createApplicant(values);
    } catch (error) {
      console.log("Error createApplicant: ", error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      applicant_type: Yup.string().required(t('you-must-fill-in-applicant_type')),
      full_name: Yup.string().required(t('you-must-fill-in-fullname')),
      birthday: Yup.string().required(t('you-must-fill-in-birthday')),
      expire_date: Yup.string().required(t('you-must-fill-in-expire_date')),
      phone: Yup.string().required(t('you-must-fill-in-phone')),
      second_phone: Yup.string().required(t('you-must-fill-in-second_phone')),
    }),
    onSubmit,
  });

  return (
    <div className="card mb-3">
      <form onSubmit={formik.handleSubmit} className="card-body">
        <div className="row">
          <div className="col-md-4 mb-3">
            <label className="form-label">MR/MRS/CHD/INF</label>
            <Field
              as="select"
              name={`applicants[${index}].applicant_type`}
              className="form-select"
            >
              <option value="0">INF</option>
              <option value="1">CHD</option>
              <option value="2">MR</option>
              <option value="3">MRS</option>
            </Field>
            <ErrorMessage
              name={`applicants[${index}].applicant_type`}
              component="div"
              className="text-danger"
            />
          </div>

          <div className="col-md-4 col-6 mb-3">
            <label className="form-label">{t('fullname')}</label>
            <Field
              type="text"
              name={`applicants[${index}].full_name`}
              className="form-control"
            />
            <ErrorMessage
              name={`applicants[${index}].full_name`}
              component="div"
              className="text-danger"
            />
          </div>

          <div className="col-md-4 col-6 mb-3">
            <label className="form-label">Дата рождения</label>
            <Field
              type="date"
              name={`applicants[${index}].birthday`}
              className="form-control"
            />
            <ErrorMessage
              name={`applicants[${index}].birthday`}
              component="div"
              className="text-danger"
            />
          </div>

          <div className="col-md-4 mb-3">
            <label className="form-label">Страна рождения</label>
            <Field
              as="select"
              name={`applicants[${index}].birth_country`}
              className="form-select"
            >
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="India">India</option>
              <option value="Dubai">Dubai</option>
            </Field>
            <ErrorMessage
              name={`applicants[${index}].birth_country`}
              component="div"
              className="text-danger"
            />
          </div>

          <div className="col-md-4 mb-3">
            <label className="form-label">Гражданство</label>
            <Field
              as="select"
              name={`applicants[${index}].citizenship`}
              className="form-select"
            >
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="India">India</option>
              <option value="Dubai">Dubai</option>
            </Field>
            <ErrorMessage
              name={`applicants[${index}].citizenship`}
              component="div"
              className="text-danger"
            />
          </div>

          <div className="col-md-4 mb-3">
            <label className="form-label">Тип документа</label>
            <Field
              as="select"
              name={`applicants[${index}].document_type`}
              className="form-select"
            >
              <option value="passport">Passport</option>
              <option value="id_card">ID Card</option>
              <option value="other">Other</option>
            </Field>
            <ErrorMessage
              name={`applicants[${index}].document_type`}
              component="div"
              className="text-danger"
            />
          </div>

          <div className="col-md-4 col-6 mb-3">
            <label className="form-label">Серия документа</label>
            <Field
              type="text"
              name={`applicants[${index}].document_series`}
              className="form-control"
            />
            <ErrorMessage
              name={`applicants[${index}].document_series`}
              component="div"
              className="text-danger"
            />
          </div>

          <div className="col-md-4 col-6 mb-3">
            <label className="form-label">Номер документа</label>
            <Field
              type="text"
              name={`applicants[${index}].document_number`}
              className="form-control"
            />
            <ErrorMessage
              name={`applicants[${index}].document_number`}
              component="div"
              className="text-danger"
            />
          </div>

          <div className="col-md-4 col-6 mb-3">
            <label className="form-label">Действителен до</label>
            <Field
              type="date"
              name={`applicants[${index}].expire_date`}
              className="form-control"
            />
            <ErrorMessage
              name={`applicants[${index}].expire_date`}
              component="div"
              className="text-danger"
            />
          </div>

          <div className="col-md-4 col-6 mb-3">
            <label className="form-label">Документ выдан</label>
            <Field
              type="date"
              name={`applicants[${index}].issue_date`}
              className="form-control"
            />
            <ErrorMessage
              name={`applicants[${index}].issue_date`}
              component="div"
              className="text-danger"
            />
          </div>

          <div className="col-md-4 col-6 mb-3">
            <label className="form-label" htmlFor="user-phone">
              {t("phone-number")}
            </label>
            <InputMask
              name='phone'
              className="form-control"
              placeholder={`+998 00 000 00 00`}
              mask="+998 (99) 999 99 99"
              maskChar={null}
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              id="user-phone"
            />
            {formik.errors.phone && formik.touched.phone && (
              <div className="text-danger">{formik.errors.phone}</div>
            )}
          </div>

          <div className="col-md-4 col-6 mb-3">
            <label className="form-label" htmlFor="user-second_phone">
              {t("second-phone-number")}
            </label>
            <InputMask
              name='second_phone'
              className="form-control"
              placeholder={`+998 00 000 00 00`}
              mask="+998 (99) 999 99 99"
              maskChar={null}
              value={formik.values.second_phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              id="user-second_phone"
            />
            {formik.errors.second_phone && formik.touched.second_phone && (
              <div className="text-danger">{formik.errors.second_phone}</div>
            )}
          </div>

          {/* <div className="col-md-4 mb-3">
            <div className="d-flex">
              <div className="form-check">
                <Field
                  className="form-check-input"
                  type="radio"
                  name={`applicants[${index}].gender`}
                  value="male"
                />
                <label className="form-check-label me-4">Муж.</label>
              </div>
              <div className="form-check">
                <Field
                  className="form-check-input"
                  type="radio"
                  name={`applicants[${index}].gender`}
                  value="female"
                />
                <label className="form-check-label">Жен.</label>
              </div>
            </div>
            <ErrorMessage
              name={`applicants[${index}].gender`}
              component="div"
              className="text-danger"
            />
          </div> */}

          {/* <div className="col-md-4">
            <div className="form-check">
              <Field
                className="form-check-input"
                type="checkbox"
                name={`applicants[${index}].with_parent`}
              />
              <label className="form-check-label">с родителем</label>
              <ErrorMessage
                name={`applicants[${index}].with_parent`}
                component="div"
                className="text-danger"
              />
            </div>
          </div> */}
        </div>
      </form>
    </div>
  );
};

export default ApplicantInformation;