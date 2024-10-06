import moment from "moment";
import { getTour, updateTour } from "../../../api";
import { RootState } from "../../../store";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { TourUpdateType } from "../../../store/types/tour/update";
import UpdateGeneralInfo from "../../../components/tour/update/UpdateGeneralInfo";
import UpdateAirwaysInfo from "../../../components/tour/update/UpdateAirwaysInfo";
import UpdateHostelInfo from "../../../components/tour/update/UpdateHostelInfo";
import UpdateExtraPackageInfo from "../../../components/tour/update/UpdateExtraPackageInfo";
import UpdatePackageContentInfo from "../../../components/tour/update/UpdatePackageContentInfo";

const Update = () => {
  const { t } = useTranslation();
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<TourUpdateType | null>(null);
  const { rooms } = useSelector((state: RootState) => state.roomsReducer);
  const { cities } = useSelector((state: RootState) => state.citiesReducer);
  const { airways } = useSelector((state: RootState) => state.airwaysReducer);
  const { hostels } = useSelector((state: RootState) => state.hostelsReducer);

  const initialValues: TourUpdateType = {
    airways: [
      {
        id: 0,
        city_from: null,
        city_to: null,
        from: "",
        position: 0,
        to: "",
        airway: null,
      },
    ],
    baby_price: 0,
    child_price: 0,
    description_ru: "",
    description_uz: "",
    nutrition_type: "",
    from: "",
    hotels: [
      {
        id: 0,
        position: 0,
        price: 0,
        from: "",
        to: "",
        hotel: null,
      },
    ],
    name_ru: "",
    name_uz: "",
    night_count: 0,
    place_by_request: false,
    position: 0,
    rooms: null,
    tarif_type: "",
    to: "",
    visa_price: 0,
    id: 0,
    is_closed: false,
    is_deleted: false,
    created: {
      id: 0,
      full_name: "",
    },
    created_at: "",
    updated: null,
    updated_at: null,
    room_prices: [],
    extra_packages: [],
    application: null,
    navigate: [],
  };

  // const validationSchema = object({
  //   name_uz: string().required(t("required")),
  //   name_ru: string().required(t("required")),
  // });

  const formatDates = (values: TourUpdateType) => {
    return {
      ...values,
      from: moment(values.from).format(),
      to: moment(values.to).format(),
      airways: values.airways.map((airway) => ({
        ...airway,
        from: moment(airway.from).format(),
        to: moment(airway.to).format(),
      })),
      hotels: values.hotels.map((hotel) => ({
        ...hotel,
        from: moment(hotel.from).format(),
        to: moment(hotel.to).format(),
      })),
    };
  };

  const onSubmit = async () => {
    if (!params.id) return;
    const id = parseInt(params.id, 10);
    try {
      await updateTour(id, formik.values);
      navigate("/packages", { replace: true });
    } catch (error) {
      console.log("error updateTour: ", error);
    }
  };

  const handleGetById = async (id: number) => {
    try {
      const res = await getTour(id);
      setData(res.data);
    } catch (error) {
      console.log("error getting Tour", error);
    }
  };

  const formik = useFormik({
    initialValues,
    // validationSchema: object({
    //   title: string().required(t("required")),
    //   key: string().required(t("required")),
    // }),
    onSubmit,
  });

  useEffect(() => {
    if (!data) return;
    formik.setFormikState((state) => ({
      ...state,
      values: {
        airways: data.airways,
        baby_price: data.baby_price,
        child_price: data.child_price,
        description_ru: data.description_ru,
        description_uz: data.description_uz,
        nutrition_type: data.nutrition_type,
        from: data.from,
        hotels: data.hotels,
        name_ru: data.name_ru,
        name_uz: data.name_uz,
        night_count: data.night_count,
        place_by_request: data.place_by_request,
        position: data.position,
        rooms: data.rooms,
        tarif_type: data.tarif_type,
        to: data.to,
        visa_price: data.visa_price,
        id: data.id,
        is_closed: data.is_closed,
        is_deleted: data.is_deleted,
        created: data.created,
        created_at: data.created_at,
        updated: data.updated,
        updated_at: data.updated_at,
        room_prices: data.room_prices,
        extra_packages: data.extra_packages,
        application: data.application,
        navigate: data.navigate,
      },
    }));
  }, [data]);

  useEffect(() => {
    if (!params.id) return;
    const id = parseInt(params.id, 10);
    handleGetById(id);
  }, [params.id]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="d-flex mb-4 align-items-center justify-content-between">
        <h4 className="py-3 mb-0">
          <span className="text-muted fw-light">
            <Link to={"/"}>{t("home")}</Link> /{" "}
          </span>
          <span className="text-muted fw-light">
            <Link to={"/tour"}>{t("tour-packages")}</Link> /{" "}
          </span>
          {t("update")}
        </h4>
        <Link className="btn btn-info" to={"/tour"}>
          {t("back")}
        </Link>
      </div>
      {formik.values && <UpdateGeneralInfo formik={formik} />}
      {formik.values && airways && cities && (
        <UpdateAirwaysInfo formik={formik} airways={airways} cities={cities} />
      )}
      {/* <UpdateHostelInfo formik={formik} hostels={hostels} /> */}
      {/* <UpdateRoomInfo formik={formik} rooms={rooms} /> */}
      {/*
       */}
      {/* <UpdateExtraPackageInfo formik={formik} id={formik.values.id} />
      <UpdatePackageContentInfo formik={formik} id={formik.values.id} /> */}
      {/* <CreateExtraPackageInfo id={id} />
      <CreatePackageContentInfo id={id} /> */}
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">ОПИСАНИЕ</label>
              <textarea
                className="form-control"
                name="description_ru"
                value={formik.values.description_ru}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></textarea>
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Tasnifi</label>
              <textarea
                className="form-control"
                name="description_uz"
                value={formik.values.description_uz}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></textarea>
            </div>
            <div className="d-flex align-items-center mb-3">
              <input
                className="form-check"
                type="checkbox"
                id="tour-create-place_by_request"
                name="place_by_request"
                checked={!!formik.values.place_by_request}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label
                className="form-label mb-0 ms-2"
                htmlFor="tour-create-place_by_request"
              >
                {t("place-by-request")}
              </label>
            </div>
            <div>
              <button type="submit" className="btn btn-success">
                {t("save")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Update;
