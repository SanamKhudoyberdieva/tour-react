import { authAdmin } from "../api";
import { useFormik } from "formik";
import { object, string } from "yup";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { setAuthAdmin } from "../store/slices/loginSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const initialValues = {
    username: "",
    password: "",
  };

  const onSubmit = async (values: { username: string; password: string }) => {
    try {
      const response = await authAdmin({
        username: values.username,
        password: values.password,
      });
      dispatch(setAuthAdmin(response.data));
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Error setAuthAdmin:", error);
    }
  };

  const validationSchema = object({
    username: string().required(t("required")),
    password: string().required(t("required")),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <main>
      <h5 className="card-header">Poytaxt</h5>
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-center h-px-500">
          <form
            className="w-px-400 border rounded p-3 p-md-5"
            onSubmit={formik.handleSubmit}
          >
            <h3 className="mb-3">{t("login")}</h3>
            <div className="mb-3">
              <label className="form-label">{t("username")}</label>
              <input
                type="text"
                name="username"
                onChange={formik.handleChange}
                value={formik.values.username}
                onBlur={formik.handleBlur}
                className="form-control"
              />
              {formik.errors.username && formik.touched.username && (
                <div className="text-danger">{formik.errors.username}</div>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">{t("password")}</label>
              <input
                type="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
                className="form-control"
              />
              {formik.errors.password && formik.touched.password && (
                <div className="text-danger">{formik.errors.password}</div>
              )}
            </div>
            <button className="btn btn-primary w-100 py-2 mt-4" type="submit">
              {t("login")}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
