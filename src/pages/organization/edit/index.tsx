import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { object, string, number } from "yup";
import { useTranslation } from "react-i18next";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getOrganization, updateOrganization } from "../../../api";
import { OrganizationCreateType, OrganizationType } from "../../../store/types";

const Edit = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [data, setData] = useState<OrganizationType | null>(null);

  const initialValues: OrganizationCreateType = {
    name: "",
    city: "",
    address: "",
    description: "",
    director_id: 0
  }

  const handleGet = async (id: number) => {
    try {
      const res = await getOrganization(id);
      setData(res.data);
    } catch (error) {
      console.log("Error getOrganization: ", error);
    }
  };

  const onSubmit = async (values: OrganizationCreateType) => {
    if (!id) return;
    const intId = parseInt(id, 10);
    if (isNaN(intId)) return;
    try {
      await updateOrganization(intId, values);
      navigate("/organization", { replace: true });
    } catch (error) {
      console.log("Error updateOrganization: ", error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: object({
      name: string().required(t('you-must-fill-in-name')),
      director_id: number().required(),
    }),
    onSubmit,
  });

  useEffect(() => {
    if (!id) return;
    const intId = parseInt(id, 10);
    if (isNaN(intId)) return;
    handleGet(intId);
  }, [id]);

  useEffect(() => {
    if (!data) return;
    formik.setValues({
      name: data.name || "",
      city: data.city || "",
      address: data.address || "",
      description: data.description || "",
      director_id: data.director_id || 0,
    });
  }, [data]);

  if (!data) return <></>;
  
  return (
    <>
      <div className="d-flex mb-4 align-items-center justify-content-between">
        <h4 className="py-3 mb-0">
          <span className="text-muted fw-light">
            <Link to="/">{t('home')}</Link> / </span>
          <span className="text-muted fw-light">
            <Link to="/organization">{t('organizations')}</Link> / </span>
          {t('edit')}
        </h4>
        <Link className="btn btn-info" to="/organization">{t('back')}</Link>
      </div>
      <div className="card">
        <form className="card-body" onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="organization-name">
                {t('name')}
              </label>
              <input
                type="text"
                id="organization-name"
                className="form-control"
                maxLength={255}
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.name && formik.touched.name && (
                <div className="text-danger">{formik.errors.name}</div>
              )}
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="organization-description">
                {t('description')}
              </label>
              <input
                type="text"
                id="organization-description"
                className="form-control"
                name="description"
                maxLength={50}
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="organization-city">
                {t('city')}
              </label>
              <input
                type="text"
                id="organization-city"
                className="form-control"
                name="city"
                maxLength={50}
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="organization-address">
                {t('address')}
              </label>
              <input
                type="text"
                id="organization-address"
                className="form-control"
                name="address"
                maxLength={50}
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="organization-director">
                {t('director')}
              </label>
              <input
                type="number"
                id="organization-director"
                className="form-control"
                name="director_id"
                value={formik.values.director_id}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
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