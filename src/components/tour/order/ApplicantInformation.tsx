import React from "react";
import { Field, ErrorMessage } from "formik";

interface ApplicantInformationProps {
  index: number;
}

const ApplicantInformation: React.FC<ApplicantInformationProps> = ({
  index,
}) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="row">
          <div className="col-md-4 mb-3">
            <label className="form-label">MR/MRS/CHD/INF</label>
            <Field
              as="select"
              name={`applicants[${index}].applicant_type`}
              className="form-select"
            >
              <option value="1">MR</option>
              <option value="2">MRS</option>
              <option value="3">CHD</option>
            </Field>
            <ErrorMessage
              name={`applicants[${index}].applicant_type`}
              component="div"
              className="text-danger"
            />
          </div>

          <div className="col-md-4 col-6 mb-3">
            <label className="form-label">Фамилия по-латински</label>
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
            <label className="form-label">Имя по-латински</label>
            <Field
              type="text"
              name={`applicants[${index}].first_name`}
              className="form-control"
            />
            <ErrorMessage
              name={`applicants[${index}].first_name`}
              component="div"
              className="text-danger"
            />
          </div>

          <div className="col-md-4 col-6 mb-3">
            <label className="form-label">Отчество по-латински</label>
            <Field
              type="text"
              name={`applicants[${index}].middle_name`}
              className="form-control"
            />
            <ErrorMessage
              name={`applicants[${index}].middle_name`}
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

          <div className="col-md-4 mb-3">
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
          </div>

          <div className="col-md-4">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantInformation;
