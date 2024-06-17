import { useFormik } from "formik";
import { object, string } from "yup";
import { createAdmin } from "../../api";
import { RootState } from "../../store";
import InputMask from "react-input-mask";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { AdminCreateType } from "../../store/types";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { roles } = useSelector((state: RootState) => state.rolesReducer);
  const { organizations } = useSelector((state: RootState) => state.organizationsReducer);

  const initialValues: AdminCreateType = {
    is_active: false,
    password: "",
    role_id: 0,
    username: "",
    full_name: "",
    phone: "",
    organization_id: 0
  };

  const onSubmit = async (values: AdminCreateType) => {
    try {
      await createAdmin(values);
      navigate("/admin", { replace: true });
    } catch (error) {
      console.log("Error createAdmin: ", error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: object({
      full_name: string().required(t('you-must-fill-in-fullname')),
      username: string().required(t('you-must-fill-in-login')),
      password: string().required(t('you-must-fill-in-password')),
      phone: string().required(t('you-must-fill-in-phone')),
    }),
    onSubmit,
  });

  return (
    <>
      <div
        className="d-flex mb-4 align-items-center justify-content-between"
      >
        <h4 className="py-3 mb-0">
          <span className="text-muted fw-light"
            ><Link to={'/'}>{t('home')}</Link> / </span>
          <span className="text-muted fw-light"
            ><Link to={'/admin'}>{t('admins')} </Link>
            / </span>
          {t('create')}
        </h4>
        <Link className="btn btn-info" to={'/admin'}
          >{t('back')}</Link>
      </div>
      <div className="card">
        <form onSubmit={formik.handleSubmit} className="card-body">
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="user-fullname">
                {t("fullname")}
              </label>
              <input
                type="text"
                id="user-fullname"
                className="form-control"
                name="full_name"
                maxLength={50}
                value={formik.values.full_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.full_name && formik.touched.full_name && (
                <div className="text-danger">{formik.errors.full_name}</div>
              )}
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="user-username">
                {t("username")}
              </label>
              <input
                type="text"
                id="user-username"
                className="form-control"
                name="username"
                maxLength={30}
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.username && formik.touched.username && (
                <div className="text-danger">{formik.errors.username}</div>
              )}
            </div>
            <div className="col-md-6 mb-3">
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
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="user-password">
                {t("password")}
              </label>
              <input
                type="password"
                id="user-password"
                className="form-control"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.password && formik.touched.password && (
                <div className="text-danger">{formik.errors.password}</div>
              )}
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="user-role_id">
                {t("role")}
              </label>
              <select
                className="form-select"
                id="user-role_id"
                name="role_id"
                value={formik.values.role_id || 0}
                onChange={(event) => {
                  const selectedValue = parseInt(event.target.value);
                  formik.setFieldValue("role_id", selectedValue);
                }}
                onBlur={formik.handleBlur}
              >
                <option value={0}></option>
                {roles &&
                roles.map((x, idx) => (
                  <option
                    key={"staff-create-roles-index-" + idx}
                    value={x.id}
                  >
                    {x.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="user-organization_id">
                {t("organization")}
              </label>
              <select
                className="form-select"
                id="user-organization_id"
                name="organization_id"
                value={formik.values.organization_id || 0}
                onChange={(event) => {
                  const selectedValue = parseInt(event.target.value);
                  formik.setFieldValue("organization_id", selectedValue);
                }}
                onBlur={formik.handleBlur}
              >
                <option value={0}></option>
                {organizations &&
                organizations.map((x, idx) => (
                  <option
                    key={"admin-create-organizations-index-" + idx}
                    value={x.id}
                  >
                    {x.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="d-flex align-items-center mb-3">
            <input
              className="form-check"
              type="checkbox"
              id="user-is_active"
              name="is_active"
              checked={!!formik.values.is_active}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label className="form-label mb-0 ms-2" htmlFor="user-is_active">
              {t("active")}
            </label>
          </div>
          <div>
            <button type="submit" className="btn btn-success">{t("save")}</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Create;