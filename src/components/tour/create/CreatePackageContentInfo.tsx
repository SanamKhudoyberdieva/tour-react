import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { createTourNavigate } from "../../../api/tour/navigate";
import { FieldArray, Formik, FormikProps } from "formik";
import { TourCreateNavigateType } from "../../../store/types/tour/create-two/navigate";
import { formatDateToInputValue } from "../../../utils";
// import { object, string, array } from "yup";
import moment from "moment";

const CreatePackageContentInfo = ({ id }: { id: number }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  interface NavigationsListType {
    navigations: TourCreateNavigateType[];
  }

  const initialValues: NavigationsListType = {
    navigations: [
      {
        description_ru: "",
        description_uz: "",
        from: "",
        name_ru: "",
        name_uz: "",
        position: 0,
        to: "",
        id: 0,
      },
    ],
  };

  // const validationSchema = object({
  //   navigations: array().of(
  //     object().shape({
  //       name_uz: string().required(
  //         t("required").toString()
  //       ),
  //       name_ru: string().required(
  //         t("required").toString()
  //       ),
  //     })
  //   ),
  // });

  const formatDates = (values: NavigationsListType) => {
    return {
      ...values,
      navigations: values.navigations.map((navigation) => ({
        ...navigation,
        from: moment(navigation.from).format(),
        to: moment(navigation.to).format(),
      })),
    };
  };

  const onSubmit = async (values: NavigationsListType) => {
    try {
      const formattedValues = formatDates(values);
      await createTourNavigate(id, formattedValues.navigations);
      navigate("/tour", { replace: true });
    } catch (error) {
      console.log("error createTourExtraPackage: ", error);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(formik: FormikProps<NavigationsListType>) => (
        <form onSubmit={formik.handleSubmit}>
          <div className="card mb-4">
            <div className="card-body">
              <FieldArray name="navigations">
                {({ push, remove }) => (
                  <>
                    {formik.values.navigations.map((navigation, index) => (
                      <div className="row" key={index}>
                        <div className="col-md-4 mb-3">
                          <label
                            className="form-label"
                            htmlFor={`tour-navigations-name_ru-${index}`}
                          >
                            Наименование
                          </label>
                          <div className="d-flex">
                            <input
                              type="text"
                              className="form-control"
                              name={`navigations[${index}].name_ru`}
                              id={`tour-navigations-name_ru-${index}`}
                              value={navigation.name_ru}
                              onChange={formik.handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            className="form-label"
                            htmlFor={`tour-navigations-name_uz-${index}`}
                          >
                            Nomi
                          </label>
                          <div className="d-flex">
                            <input
                              type="text"
                              className="form-control"
                              name={`navigations[${index}].name_uz`}
                              id={`tour-navigations-name_uz-${index}`}
                              value={navigation.name_uz}
                              onChange={formik.handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            className="form-label"
                            htmlFor={`tour-navigations-description_ru-${index}`}
                          >
                            Описание
                          </label>
                          <div className="d-flex">
                            <input
                              type="text"
                              className="form-control"
                              name={`navigations[${index}].description_ru`}
                              id={`tour-navigations-description_ru-${index}`}
                              value={navigation.description_ru}
                              onChange={formik.handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            className="form-label"
                            htmlFor={`tour-navigations-description_uz-${index}`}
                          >
                            Tasnifi
                          </label>
                          <div className="d-flex">
                            <input
                              type="text"
                              className="form-control"
                              name={`navigations[${index}].description_uz`}
                              id={`tour-navigations-description_uz-${index}`}
                              value={navigation.description_uz}
                              onChange={formik.handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            className="form-label"
                            htmlFor={`tour-navigations-time_from-${index}`}
                          >
                            {t("time-from")}
                          </label>
                          <input
                            type="datetime-local"
                            className="form-control"
                            name={`navigations[${index}].from`}
                            id={`tour-navigations-time_from-${index}`}
                            value={
                              navigation.from
                                ? formatDateToInputValue(navigation.from)
                                : ""
                            }
                            onChange={formik.handleChange}
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            className="form-label"
                            htmlFor={`tour-navigations-time_to-${index}`}
                          >
                            {t("time-to")}
                          </label>
                          <input
                            type="datetime-local"
                            className="form-control"
                            name={`navigations[${index}].to`}
                            id={`tour-navigations-time_to-${index}`}
                            value={
                              navigation.to
                                ? formatDateToInputValue(navigation.to)
                                : ""
                            }
                            onChange={formik.handleChange}
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label
                            className="form-label"
                            htmlFor={`tour-navigation-position-${index}`}
                          >
                            {t("position-in-the-list")}
                          </label>
                          <input
                            type="number"
                            id={`tour-navigation-position-${index}`}
                            className="form-control"
                            name={`navigations[${index}].position`}
                            value={navigation.position}
                            onChange={formik.handleChange}
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
                            description_ru: "",
                            description_uz: "",
                            from: "",
                            name_ru: "",
                            name_uz: "",
                            position: 0,
                            to: "",
                            id: 0,
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
          <div>
            <button type="submit" className="btn btn-success">
              {t("submit")}
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default CreatePackageContentInfo;
