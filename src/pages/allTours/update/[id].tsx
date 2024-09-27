import moment from "moment";
import { getTour, updateTour } from "../../../api";
import { RootState } from "../../../store";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { TourCreateType, TourType } from "../../../store/types";
import { Link, useNavigate, useParams } from "react-router-dom";
import CreateRoomInfo from "../../../components/tour/create/CreateRoomInfo";
import CreateHostelInfo from "../../../components/tour/create/CreateHostelInfo";
import CreateGeneralInfo from "../../../components/tour/create/CreateGeneralInfo";
import CreateAirwaysInfo from "../../../components/tour/create/CreateAirwaysInfo";
import { useEffect, useState } from "react";

const Update = () => {
  const { t } = useTranslation();
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<TourType | null>(null);
  const { rooms } = useSelector((state: RootState) => state.roomsReducer);
  const { cities } = useSelector((state: RootState) => state.citiesReducer);
  const { airways } = useSelector((state: RootState) => state.airwaysReducer);
  const { hostels } = useSelector((state: RootState) => state.hostelsReducer);

  const initialValues: TourCreateType = {
    airways: [
      {
        airway_id: 0,
        city_from_id: 0,
        city_to_id: 0,
        from: "",
        position: 0,
        to: "",
      },
    ],
    baby_price: 0,
    child_price: 0,
    city_from_id: 0,
    description_ru: "",
    description_uz: "",
    nutrition_type: "",
    from: "",
    hotels: [
      {
        from: "",
        hotel_id: 0,
        nutrition_type: "",
        position: 0,
        price: 0,
        to: "",
      },
    ],
    name_ru: "",
    name_uz: "",
    night_count: 0,
    place_by_request: false,
    position: 0,
    rooms: [{ count: 0, gender: 0, price: 0, room_id: 0 }],
    tarif_type: "",
    to: "",
    visa_price: 0,
  };

  // const validationSchema = object({
  //   name_uz: string().required(t("required")),
  //   name_ru: string().required(t("required")),
  // });

  const formatDates = (values: TourCreateType) => {
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
        airways: [
          {
            airway_id: data.airway_id,
            city_from_id: data.city_from_id,
            city_to_id: data.city_to_id,
            from: data.from,
            position: data.position,
            to: data.to,
          },
        ],
        baby_price: data.baby_price,
        child_price: data.child_price,
        city_from_id: data.city_from_id,
        description_ru: data.description_ru,
        description_uz: data.description_uz,
        // nutrition_type: data.nutrition_type,
        from: data.from,
        hotels: [
          {
            from: data.from,
            hotel_id: data.hotel_id,
            nutrition_type: data.nutrition_type,
            position: data.position,
            price: data.price,
            to: data.to,
          },
        ],
        name_ru: data.name_ru,
        name_uz: data.name_uz,
        night_count: data.night_count,
        place_by_request: data.place_by_request,
        position: data.position,
        // rooms: [{ count: data.count, gender: data.gender, price: data.price, room_id: data.room_id }],
        tarif_type: data.tarif_type,
        to: data.to,
        visa_price: data.visa_price,
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
      <CreateGeneralInfo formik={formik} cities={cities} />
      {airways && cities && (
        <CreateAirwaysInfo formik={formik} airways={airways} cities={cities} />
      )}
      <CreateHostelInfo formik={formik} hostels={hostels} />
      <CreateRoomInfo formik={formik} rooms={rooms} />
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
