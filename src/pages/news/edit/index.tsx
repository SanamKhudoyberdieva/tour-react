import { useFormik } from "formik";
import { object, string } from "yup";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getNew, updateNew } from "../../../api";
import { NewsCreateType, NewsType } from "../../../store/types";
import { Link, useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const params = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [data, setData] = useState<NewsType | null>(null);

  const initialValues: NewsCreateType = {
    name_ru: "",
    name_uz: "",
    description_ru: "",
    description_uz: "",
    position: 0,
    image_file: null,
  };

  const handleGet = async (id: number) => {
    try {
      const res = await getNew(id);
      setData(res.data);
    } catch (error) {
      console.log("error getNew: ", error);
    }
  };

  const onSubmit = async () => {
    if (!params || !params.id) return;
    const id = params.id;
    const intId = parseInt(id, 10);
    if (isNaN(intId)) return;
    try {
      const formData = new FormData();
      Object.entries(formik.values).forEach(([key, value]) => {
        if (value === "") return;
        formData.append(key, value);
      });
      await updateNew(intId, formData);
      navigate("/news", { replace: true });
    } catch (error) {
      console.log("error updateNew: ", error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: object({
      image_file: string().required(t("required")),
    }),
    onSubmit,
  });

  useEffect(() => {
    if (!data) return;
    formik.setFormikState((state) => ({
      ...state,
      values: {
        image_file: data.image || null,
        name_uz: data.name_uz || "",
        name_ru: data.name_ru || "",
        description_uz: data.description_uz || "",
        description_ru: data.description_ru || "",
        position: data.position || 0,
      },
    }));
  }, [data]);

  useEffect(() => {
    if (!params || !params.id) return;
    const id = params.id;
    const intId = parseInt(id, 10);
    if (isNaN(intId)) return;
    handleGet(intId);
  }, [params]);

  if (!data) return <></>;

  return (
    <>
      <div
        className="d-flex mb-4 align-items-center justify-content-between">
        <h4 className="py-3 mb-0">
          <span className="text-muted fw-light"
            ><Link to={'/'}>{t('home')}</Link> / </span>
          <span className="text-muted fw-light"
            ><Link to={'/news'}>{t('news')}</Link> / </span>
          {t('edit')}
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
  )
}

export default Edit;