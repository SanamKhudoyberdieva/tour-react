import { useFormik } from 'formik';
import { number, object, string } from 'yup';
import InputMask from "react-input-mask";
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AdminCreateType, AdminType, AdminUpdateType } from '../../../store/types';
import { activateAdmin, deactivateAdmin, getAdminById, updateAdmin } from '../../../api';

const Index = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [data, setData] = useState<AdminType | null>(null);
  const { roles } = useSelector((state: RootState) => state.rolesReducer);
  const { organizations } = useSelector((state: RootState) => state.organizationsReducer);

  const initialValues: AdminUpdateType = {
    full_name: "",
    role_id: 0,
    password: "",
    phone: "",
    is_active: false,
    username: "",
    id: 0,
    organization_id: 0
  };

  const handleGetById = async (id: number) => {
    try {
      const res = await getAdminById(id);
      setData(res.data);
    } catch (error) {
      console.log("error getAdminById: ", error);
    }
  };

  const handleDeactivate = async (id: number) => {
    try {
      await deactivateAdmin(id);
      navigate("/admin", { replace: true });
    } catch (error) {
      console.log("error deactivateAdmin: ", error);
    }
  };

  const handleActivate = async (id: number) => {
    try {
      await activateAdmin(id);
      navigate("/admin", { replace: true });
    } catch (error) {
      console.log("error activateAdmin: ", error);
    }
  };

  useEffect(() => {
    if (!data) return;
    formik.setValues({
      ...data,
      password: formik.values.password,  // Retain the password (optional)
      full_name: formik.values.full_name,
      role_id: formik.values.role_id,
      phone: formik.values.phone,
      is_active: formik.values.is_active,
      username: formik.values.username,
      organization_id: formik.values.organization_id,
    });
  }, [data]);

  const onSubmit = async (values: AdminCreateType) => {
    if (!id) return;
    const intId = parseInt(id, 10);
    if (isNaN(intId)) return;
    try {
      await updateAdmin(intId, values);
      navigate("/admin", { replace: true });
    } catch (error) {
      console.log("error updateAdmin: ", error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: object({
      full_name: string().required(t('required')),
      username: string().required(t('required')),
      password: string().required(t('required')),
      role_id: number().min(1, t('required')), 
      organization_id: number().min(1, t('required')),
    }),
    onSubmit,
  });

  useEffect(() => {
    if (!id) return;  
    handleGetById(+id);  
  }, [id]);

  useEffect(() => {
    if (!data) return;
    formik.setValues({
      full_name: data.full_name || "",
      role_id: data.role_id || 0,
      password: "", 
      phone: data.phone || "",
      is_active: data.is_active || false,
      username: data.username || "",
      id: data.id,
      organization_id: data.organization_id || 0
    });
  }, [data]);
  
  if (!data) return <></>;

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
          {t('edit')}
        </h4>
        <Link className="btn btn-info" to={'/admin'}
          >{t('back')}</Link>
      </div>
      {data.id !== data.id && (
        <div className="mb-2 mb-md-4">
          {!formik.values.is_active ? (
            <button
              className="btn btn-primary me-2"
              onClick={() => {
                handleActivate(data.id);
              }}
            >
              {t("make-active")}
            </button>
          ) : (
            <button
              className="btn btn-danger"
              onClick={() => {
                handleDeactivate(data.id);
              }}
            >
              {t("make-inactive")}
            </button>
          )}
        </div>
      )}
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
              {formik.errors.role_id && formik.touched.role_id && (
                <div className="text-danger">{formik.errors.role_id}</div>
              )}
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
              {formik.errors.organization_id && formik.touched.organization_id && (
                <div className="text-danger">{formik.errors.organization_id}</div>
              )}
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

export default Index;