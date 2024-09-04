import { FormikErrors, FormikTouched } from "formik";
import { ApplicantsCreateType } from "../../../store/types/tour/order/applicantsCreate";
import { useTranslation } from "react-i18next";

interface ApplicationNotesProps {
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
const ApplicationNotes: React.FC<ApplicationNotesProps> = ({
  handleChange,
  values,
}) => {
  const { t } = useTranslation();
  return (
    <div>
      <h6>{t("order-notes")}</h6>
      <div className="card mb-3">
        <div className="card-body">
          <div className="mb-3">
            <label className="form-label" htmlFor="order-comment">
              {t("comment")}
            </label>
            <textarea
              name="comment"
              onChange={handleChange}
              className="form-control"
              value={values.comment}
              id="order-comment"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationNotes;
