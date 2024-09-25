import { useFormik } from "formik";
import { object, string } from "yup";
import { createNews } from "../../api";
import { useTranslation } from "react-i18next";
import { NewsCreateType } from "../../store/types";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const initialValues: NewsCreateType = {
    name_ru: "",
    name_uz: "",
    description_ru: "",
    description_uz: "",
    image_file: null,
    position: 0,
  };

  const onSubmit = async () => {
    try {
      const formData = new FormData();
      Object.entries(formik.values).forEach(([key, value]) => {
        if (value === "") return;
        formData.append(key, value);
      });
      await createNews(formData);
      navigate("/news", { replace: true });
    } catch (error) {
      console.log("error createNews: ", error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: object({
      image_file: string().required(t('required')),
    }),
    onSubmit,
  });

  return (
    <>
      <div className="d-flex mb-4 align-items-center justify-content-between">
        <h4 className="py-3 mb-0">
          <span className="text-muted fw-light">
            <Link to={'/'}>{t('home')}</Link> / {' '}
          </span>
          <span className="text-muted fw-light">
            <Link to={'/news'}>{t('news')}</Link> / {' '}
          </span>
          {t('create')}
        </h4>
        <Link className="btn btn-info" to={'/news'}>{t('back')}</Link>
      </div>
      <div className="card">
        <form className="card-body" onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="news-name_ru">
                Заголовок
              </label>
              <input
                type="text"
                id="news-name_ru"
                className="form-control"
                name="name_ru"
                maxLength={255}
                value={formik.values.name_ru}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="news-description_ru">
                ТЕКСТ
              </label>
              <input
                type="text"
                id="news-description_ru"
                className="form-control"
                name="description_ru"
                maxLength={255}
                value={formik.values.description_ru}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="news-name_uz">
                Sarlavha
              </label>
              <input
                type="text"
                id="news-name_uz"
                className="form-control"
                name="name_uz"
                maxLength={255}
                value={formik.values.name_uz}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="news-description_uz">
                Matn
              </label>
              <input
                type="text"
                id="news-description_uz"
                className="form-control"
                name="description_uz"
                maxLength={255}
                value={formik.values.description_uz}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="news-position">
                {t("position-in-the-list")}
              </label>
              <input
                type="number"
                id="news-position"
                className="form-control"
                name="position"
                value={formik.values.position ? formik.values.position : ""}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="col-md-6 mb-3">
              <div className="d-flex flex-column mb-3">
                <label className="form-label" htmlFor="news-image_file">
                  {t("image")} 
                </label>
                <input
                  type="file"
                  className="form-control"
                  name="image_file"
                  id="news-image_file"
                  onChange={(event) => {
                    formik.setFieldValue(
                      "image_file",
                      event.currentTarget.files?.[0] || null
                    );
                  }}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.image_file && formik.touched.image_file && (
                  <div className="text-danger">
                    {formik.errors.image_file}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div>
            <button type="submit" className="btn btn-success">
              {t('save')}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Create;