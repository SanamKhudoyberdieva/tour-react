import { useFormik } from "formik";
import { object, string } from "yup";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { createRole, getRoles } from "../../api";
import { Link, useNavigate } from "react-router-dom";
import { setRoles } from "../../store/slices/rolesSlice";
import { RoleCreateType } from "../../store/types/role/craete";

const Create = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues: RoleCreateType = {
    comment: "",
    is_active: false,
    key: "",
    title: "",
  };

  const handleGetRoles = async () => {
    try {
      const res = await getRoles();
      dispatch(setRoles(res.data));
    } catch (error) {
      console.log("error getRoles: ", error);
    }
  };

  const onSubmit = async () => {
    if (!formik.values.key || !formik.values.title) return;
    try {
      await createRole(formik.values);
      handleGetRoles();
      navigate("/role", { replace: true });
    } catch (error) {
      console.log("error createRole: ", error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: object({
      title: string().required("Необходимо заполнить «Название»."),
      key: string().required("Необходимо заполнить «Ключ»."),
    }),
    onSubmit,
  });

  return (
    <div>
      <div className="d-flex mb-4 align-items-center justify-content-between">
        <h4 className="py-3 mb-0">
          <span className="text-muted fw-light">
            <Link to={"/"}>{t("home")}</Link> /
          </span>{" "}
          <span className="text-muted fw-light">
            <Link to={"/role"}>{t("roles")}</Link> /
          </span>{" "}
          {t("create")}
        </h4>
        <Link to={"/role"} className="btn btn-info">
          {t("back")}
        </Link>
      </div>
      <div className="card">
        <form onSubmit={formik.handleSubmit} className="card-body">
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="control-label" htmlFor="roles-title">
                {t("name")}
              </label>
              <input
                type="text"
                id="roles-title"
                className="form-control"
                name="title"
                maxLength={255}
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.title && formik.touched.title && (
                <div className="text-danger">{formik.errors.title}</div>
              )}
            </div>
            <div className="col-md-6 mb-3">
              <label className="control-label" htmlFor="roles-name">
                {t("key")}
              </label>
              <input
                type="text"
                id="roles-name"
                className="form-control"
                name="key"
                maxLength={50}
                value={formik.values.key}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.key && formik.touched.key && (
                <div className="text-danger">{formik.errors.key}</div>
              )}
            </div>
            <div className="col-md-6 mb-3">
              <label className="control-label" htmlFor="roles-name">
                {t("comment")}
              </label>
              <textarea
                id="roles-name"
                className="form-control"
                name="comment"
                maxLength={50}
                value={formik.values.comment}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></textarea>
              {formik.errors.comment && formik.touched.comment && (
                <div className="text-danger">{formik.errors.comment}</div>
              )}
            </div>
            <div className="col-12 d-flex align-items-center mb-3">
              <input
                className="form-check"
                type="checkbox"
                id="roles-is_active"
                name="is_active"
                checked={!!formik.values.is_active}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label className="form-label mb-0 ms-2" htmlFor="roles-is_active">
                {t("active")}
              </label>
            </div>
          </div>
          <div>
            <button className="btn btn-success">{t("save")}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;