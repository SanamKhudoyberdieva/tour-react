import React from "react";
import InputMask from "react-input-mask";
import { useTranslation } from "react-i18next";
import { uploadApplicaitonFile } from "../../../api/application/file";
import { Field, ErrorMessage, FormikErrors, FormikTouched } from "formik";
import { ApplicantsCreateType } from "../../../store/types/tour/order/applicantsCreate";

interface ApplicantInformationProps {
  index: number;
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
  handleBlur: {
    (e: React.FocusEvent<unknown>): void;
    <T = unknown>(fieldOrEvent: T): T extends string
      ? (e: unknown) => void
      : void;
  };
  errors: FormikErrors<ApplicantsCreateType>;
  touched: FormikTouched<ApplicantsCreateType>;
}

const formatPhoneNumber = (phone: string): string => {
  return phone.replace(/\D/g, ""); // Remove all non-digit characters
};

const ApplicantInformation: React.FC<ApplicantInformationProps> = ({
  index,
  handleChange,
  setFieldValue,
  handleBlur,
  values,
  // errors,
  // touched,
}) => {
  const { t } = useTranslation();

  const handlePhoneBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    console.log(formattedPhone);
  };
  return (
    <div className="card mb-2">
      <form className="card-body">
        <div className="row">
          <div className="col-md-4 mb-3">
            <label className="form-label">{t('mr-mrs')}</label>
            <select
              onChange={(e) =>
                setFieldValue(
                  `applicants[${index}].applicant_type`,
                  parseInt(e.target.value),
                )
              }
              name={`applicants[${index}].applicant_type`}
              value={values.applicants[index].applicant_type.toString()}
              className="form-select"
            >
              <option value=""></option>
              <option value="2">{t('man')}</option>
              <option value="3">{t('woman')}</option>
            </select>
          </div>

          <div className="col-md-4 col-6 mb-3">
            <label className="form-label">{t("fullname")}</label>
            <Field
              type="text"
              name={`applicants[${index}].full_name`}
              onChange={handleChange}
              className="form-control"
              value={values.applicants[index].full_name}
            />
            <ErrorMessage
              name={`applicants[${index}].full_name`}
              component="div"
              className="text-danger"
            />
          </div>

          <div className="col-md-4 col-6 mb-3">
            <label className="form-label">{t('birthday')}</label>
            <Field
              type="date"
              name={`applicants[${index}].birthday`}
              value={values.applicants[index].birthday}
              className="form-control"
            />
          </div>
          <div className="col-md-4 col-6 mb-3">
            <label className="form-label">{t('passport')}</label>
            <input
              type="file"
              name={`applicants[${index}].passport`}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const formData = new FormData();
                (async () => {
                  if (!e.target.files) return;
                  formData.append("file", e.target.files[0]);
                  try {
                    const res = await uploadApplicaitonFile(formData);

                    setFieldValue(
                      `applicants[${index}].passport`,
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
              name={`applicants[${index}].visa_file`}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const formData = new FormData();
                (async () => {
                  if (!e.target.files) return;
                  formData.append("file", e.target.files[0]);
                  try {
                    const res = await uploadApplicaitonFile(formData);

                    setFieldValue(
                      `applicants[${index}].visa_file`,
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
            <label className="form-label">{t('expire-date')}</label>
            <Field
              type="date"
              name={`applicants[${index}].expire_date`}
              value={values.applicants[index].expire_date}
              className="form-control"
            />
          </div>

          <div className="col-md-4 col-6 mb-3">
            <label className="form-label" htmlFor="user-phone">
              {t("phone-number")}
            </label>
            <InputMask
              name={`applicants[${index}].phone`}
              className="form-control"
              placeholder={`+998 00 000 00 00`}
              mask="+998 (99) 999 99 99"
              maskChar={null}
              value={values.applicants[index].phone}
              onChange={(e) =>
                setFieldValue(
                  `applicants[${index}].phone`,
                  formatPhoneNumber(e.target.value),
                )
              }
              onBlur={(e) => {
                handleBlur(e);
                handlePhoneBlur(e); 
              }}
              id="user-phone"
            />
          </div>
          <div className="col-md-4">
            <div className="form-check">
              <Field
                className="form-check-input"
                type="checkbox"
                name={`applicants[${index}].need_visa`}
                id="need-visa"
              />
              <label className="form-check-label" htmlFor="need-visa">
                {t('need-visa')}
              </label>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-check">
              <Field
                className="form-check-input"
                type="checkbox"
                name={`applicants[${index}].need_disabled_carriage`}
                id="need_disabled_carriage"
              />
              <label
                className="form-check-label"
                htmlFor="need_disabled_carriage"
              >
                 {t('need-disabled-carriage')}
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ApplicantInformation;