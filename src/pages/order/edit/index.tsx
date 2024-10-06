import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { object, number } from "yup";
import { useTranslation } from "react-i18next";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { getApplication, getTours } from "../../../api";
import { AplicantionUpdateType } from "../../../store/types/tour/order/update";
import { updateApplication } from "../../../api/application/update";
import { TourPaginationType } from "../../../store/types/tour/all";
import { getName } from "../../../utils";
import i18n from "../../../utils/i18n";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import InputMask from "react-input-mask";

export interface FiltersStateType {
  page: number;
  page_size: number;
}

const Edit = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const queryPageSize = parseInt(searchParams.get("pageSize") || "15");
  const queryPage = parseInt(searchParams.get("page") || "1");
  const [pageSize, setPageSize] = useState(queryPageSize);
  const [currPage, setCurrPage] = useState(queryPage);
  const [data, setData] = useState<AplicantionUpdateType | null>(null);
  const [toursData, setToursData] = useState<TourPaginationType | null>(null);
  const { rooms } = useSelector((state: RootState) => state.roomsReducer);

  const initialValues: AplicantionUpdateType = {
    comment: "",
    phone: "",
    room_id: 0,
    second_phone: "",
    status: 0,
    total: 0,
    tour_id: 0,
    id: 0,
  };

  const handleGet = async (id: number) => {
    try {
      const res = await getApplication(id);
      setData(res.data);
    } catch (error) {
      console.log("Error getApplication: ", error);
    }
  };

  const handleGetTour = async ({ page, page_size }: FiltersStateType) => {
    try {
      const res = await getTours(
        {
          from: "",
          page_size,
          page,
          night_count: "",
          starts: "",
          to: "",
          with_delete: "",
        }
      );
      setToursData(res.data);
    } catch (error) {
      console.log("error getTours: ", error);
    }
  };

  const onSubmit = async (values: AplicantionUpdateType) => {
    if (!id) return;
    const intId = parseInt(id, 10);
    if (isNaN(intId)) return;
    try {
      await updateApplication(intId, values);
      navigate("/order", { replace: true });
    } catch (error) {
      console.log("Error updateApplication: ", error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: object({
      status: number().required(t("required")),
    }),
    onSubmit,
  });

  useEffect(() => {
    if (!id) return;
    const intId = parseInt(id, 10);
    if (isNaN(intId)) return;
    handleGet(intId);
    handleGetTour({ page: currPage, page_size: pageSize });
  }, [id]);

  useEffect(() => {
    if (!data) return;
    formik.setValues({
      comment: data.comment || "",
      phone: data.phone || "",
      second_phone: data.second_phone || "",
      status: data.status || 0,
      total: data.total || 0,
      room_id: data.room_id || 0,
      tour_id: data.tour_id || 0,
      id: data.id || 0,
    });
  }, [data]);

  if (!data || !toursData || !rooms) return <></>;

  return (
    <>
      <div className="d-flex mb-4 align-items-center justify-content-between">
        <h4 className="py-3 mb-0">
          <span className="text-muted fw-light">
            <Link to="/">{t("home")}</Link> /{" "}
          </span>
          <span className="text-muted fw-light">
            <Link to="/order">{t("orders")}</Link> /{" "}
          </span>
          {t("edit")}
        </h4>
        <Link className="btn btn-info" to="/order">
          {t("back")}
        </Link>
      </div>
      <div className="card">
        <form className="card-body" onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="tour_id">
                {t("tour-packages")}
              </label>
              <select
                className="form-select"
                id="tour_id"
                name="tour_id"
                value={formik.values.tour_id}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value={0}>{t("select-tour")}</option>
                {toursData.tours.map((tour) => (
                  <option key={tour.id} value={tour.id}>
                    {getName(tour,i18n.language)}
                  </option>
                ))}
              </select>
              {formik.errors.tour_id && formik.touched.tour_id && (
                <div className="text-danger">{formik.errors.tour_id}</div>
              )}
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="room_id">
                {t("rooms")}
              </label>
              <select
                className="form-select"
                id="room_id"
                name="room_id"
                value={formik.values.room_id}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value={0}>{t("select-room")}</option>
                {rooms.map((room) => (
                  <option key={room.id} value={room.id}>
                    {getName(room, i18n.language)}
                  </option>
                ))}
              </select>
              {formik.errors.room_id && formik.touched.room_id && (
                <div className="text-danger">{formik.errors.room_id}</div>
              )}
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="phone">
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
                id="phone"
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="second_phone">
                {t("second-phone-number")}
              </label>
              <InputMask
                name='second_phone'
                className="form-control"
                placeholder={`+998 00 000 00 00`}
                mask="+998 (99) 999 99 99"
                maskChar={null}
                value={formik.values.second_phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="second_phone"
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="status">
                {t("status")}
              </label>
              <select
                className="form-select"
                id="status"
                name="status"
                value={formik.values.status}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value={0}>{t("new")}</option>
                <option value={1}>{t("paid")}</option>
                <option value={2}>{t("cancelled")}</option>
              </select>
              {formik.errors.status && formik.touched.status && (
                <div className="text-danger">{formik.errors.status}</div>
              )}
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="total">
                {t("price")}
              </label>
              <input
                type="number"
                id="total"
                className="form-control"
                name="total"
                value={formik.values.total}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.total && formik.touched.total && (
                <div className="text-danger">{formik.errors.total}</div>
              )}
            </div>

            <div className="col-md-12 mb-3">
              <label className="form-label" htmlFor="comment">
                {t("comment")}
              </label>
              <textarea
                id="comment"
                className="form-control"
                name="comment"
                maxLength={500}
                value={formik.values.comment}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
          </div>
          <div>
            <button type="submit" className="btn btn-success">
              {t("save")}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Edit;
