import React from "react";
import { AxiosResponse } from "axios";
import { useTranslation } from "react-i18next";
import { Field, ErrorMessage, FormikErrors } from "formik";
import { ApplicantsCreateType } from "../../../store/types/tour/order/applicantsCreate";

interface InfantInformationProps {
  index: number;
  adults: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  uploadApplicaitonFile: (file: FormData) => Promise<AxiosResponse<any, any>>;
  handleChange: {
    (e: React.ChangeEvent<unknown>): void;
    <T = string | React.ChangeEvent<unknown>>(
      field: T,
    ): T extends React.ChangeEvent<unknown>
      ? void
      : (e: string | React.ChangeEvent<unknown>) => void;
  };
  setFieldValue: (
    field: string,
    value: unknown,
    shouldValidate?: boolean,
  ) => Promise<void | FormikErrors<ApplicantsCreateType>>;
  values: ApplicantsCreateType;
}

const InfantInformation: React.FC<InfantInformationProps> = ({
  index,
  handleChange,
  setFieldValue,
  values,
  adults,
  uploadApplicaitonFile,
}) => {
  const { t } = useTranslation();

  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-md-4 mb-3">
            <label className="form-label">{t('infant')}</label>
            <select
              onChange={(e) =>
                setFieldValue(
                  `applicants[${adults + index}].applicant_type`,
                  parseInt(e.target.value),
                )
              }
              value={values.applicants[adults + index].applicant_type}
              name={`applicants[${adults + index}].applicant_type`}
              className="form-select"
            >
              <option value="0"></option>
              <option value="1">{t('infant')}</option>
            </select>
            <ErrorMessage
              name={`applicants[${adults + index}].applicant_type`}
              component="div"
              className="text-danger"
            />
          </div>

          <div className="col-md-4 col-6 mb-3">
            <label className="form-label">{t("fullname")}</label>
            <Field
              type="text"
              name={`applicants[${adults + index}].full_name`}
              onChange={handleChange}
              className="form-control"
              value={values.applicants[adults + index].full_name}
            />
            <ErrorMessage
              name={`applicants[${adults + index}].full_name`}
              component="div"
              className="text-danger"
            />
          </div>

          <div className="col-md-4 col-6 mb-3">
            <label className="form-label">{t('birthday')}</label>
            <Field
              type="date"
              name={`applicants[${adults + index}].birthday`}
              value={values.applicants[adults + index].birthday}
              className="form-control"
            />
          </div>
          <div className="col-md-4 col-6 mb-3">
            <label className="form-label">{t('passport')}</label>
            <input
              type="file"
              name={`applicants[${adults + index}].passport`}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const formData = new FormData();
                (async () => {
                  if (!e.target.files) return;
                  formData.append("file", e.target.files[0]);
                  try {
                    const res = await uploadApplicaitonFile(formData);
                    setFieldValue(
                      `applicants[${adults + index}].passport`,
                      res.data.file,
                    );
                  } catch (error) {
                    console.log("error uploading", error);
                  }
                })();
              }}
              className="form-control"
            />
          </div>
          <div className="col-md-4 col-6 mb-3">
            <label className="form-label">{t('visa')}</label>
            <input
              type="file"
              name={`applicants[${adults + index}].visa_file`}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const formData = new FormData();
                (async () => {
                  if (!e.target.files) return;
                  formData.append("file", e.target.files[0]);
                  try {
                    const res = await uploadApplicaitonFile(formData);
                    setFieldValue(
                      `applicants[${adults + index}].visa_file`,
                      res.data.file,
                    );
                  } catch (error) {
                    console.log("error uploading", error);
                  }
                })();
              }}
              className="form-control"
            />
          </div>

          <div className="col-md-4 col-6 mb-3">
            <label className="form-label">{t("expire-date")}</label>
            <Field
              type="date"
              name={`applicants[${adults + index}].expire_date`}
              value={values.applicants[adults + index].expire_date}
              className="form-control"
            />
          </div>
          <div className="col-md-4">
            <div className="form-check">
              <Field
                className="form-check-input"
                type="checkbox"
                name={`applicants[${adults + index}].need_visa`}
                id="need-visa"
              />
              <label className="form-check-label" htmlFor="need-visa">
                {t('need-visa')}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfantInformation;