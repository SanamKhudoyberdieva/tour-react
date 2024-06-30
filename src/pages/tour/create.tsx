import { useFormik } from "formik";
import { object, string } from "yup";
import { createTour } from "../../api";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { TourCreateType } from "../../store/types";
import { Link, useNavigate } from "react-router-dom";
import CreateHostelInfo from "../../components/tour/create/CreateHostelInfo";
import CreateGeneralInfo from "../../components/tour/create/CreateGeneralInfo";
import CreateAirwaysInfo from "../../components/tour/create/CreateAirwaysInfo";
import CreateRoomInfo from "../../components/tour/create/CreateRoomInfo";

const Create = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { airways } = useSelector((state: RootState) => state.airwaysReducer);
  const { cities } = useSelector((state: RootState) => state.citiesReducer);
  const { hostels } = useSelector((state: RootState) => state.hostelsReducer);
  const { rooms } = useSelector((state: RootState) => state.roomsReducer);

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

  const validationSchema = object({
    name_uz: string().required("Необходимо заполнить «Название на узбекском»."),
    name_ru: string().required("Необходимо заполнить «Название на русском»."),
  });

  const onSubmit = async (values: TourCreateType) => {
    try {
      console.log("Form Values:", values); // Debugging line
      await createTour(values);
      navigate("/tour/create-two", { replace: true });
    } catch (error) {
      console.log("error createTour: ", error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  console.log("time", formik.values.to);

  return (
    <>
      <div className="d-flex mb-4 align-items-center justify-content-between">
        <h4 className="py-3 mb-0">
          <span className="text-muted fw-light">
            <Link to={"/"}>Asosiy</Link> /{" "}
          </span>
          <span className="text-muted fw-light">
            <Link to={"/tour"}>Tur Paketlar</Link> /{" "}
          </span>
          Yaratish
        </h4>
        <Link className="btn btn-info" to={"/tour"}>
          Orqaga
        </Link>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <CreateGeneralInfo formik={formik} cities={cities} />
        {airways && cities && (
          <CreateAirwaysInfo
            formik={formik}
            airways={airways}
            cities={cities}
          />
        )}
        <CreateHostelInfo formik={formik} hostels={hostels} />
        <CreateRoomInfo formik={formik} rooms={rooms} />
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
                  {t("next")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Create;
