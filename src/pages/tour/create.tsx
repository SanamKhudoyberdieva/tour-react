import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { object, string } from "yup";
import { TourCreateType } from "../../store/types";
import { createTour } from "../../api";
import { useFormik } from "formik";
import CreateGeneralInfo from "../../components/tour/create/CreateGeneralInfo";
import CreateAirwaysInfo from "../../components/tour/create/CreateAirwaysInfo";
import CreateHostelInfo from "../../components/tour/create/CreateHostelInfo";
import CreatePackageContentInfo from "../../components/tour/create/CreatePackageContentInfo";
import CreateExtraPackageInfo from "../../components/tour/create/CreateExtraPackageInfo";

const Create = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { airways } = useSelector((state: RootState) => state.airwaysReducer);
  const { cities } = useSelector((state: RootState) => state.citiesReducer);
  const { extraPackages } = useSelector((state: RootState) => state.extraPackagesReducer);
  const { hostels } = useSelector((state: RootState) => state.hostelsReducer);
  const { rooms } = useSelector((state: RootState) => state.roomsReducer);

  const initialValues = {
    airways: [{ airway_id: 0, city_from_id: 0, city_to_id: 0, from: "", position: 0, to: "" }],
    baby_price: 0,
    city_from_id: 0,
    description_ru: "",
    description_uz: "",
    extra_packages: [{ extra_package_id: 0, price: 0 }],
    from: "",
    hotels: [{ from: "", hotel_id: 0, nutrition_type: "", position: 0, price: 0, to: "" }],
    name_ru: "",
    name_uz: "",
    navigate: [{ description_ru: "", description_uz: "", from: "", name_ru: "", name_uz: "", position: 0, to: "" }],
    night_count: 0,
    nutrition_type: "",
    place_by_request: false,
    position: 0,
    rooms: [{ count: 0, gender: 0, price: 0, room_id: 0 }],
    tarif_type: "",
    to: ""
  };

  const validationSchema = object({
    name_uz: string().required("Необходимо заполнить «Название на узбекском»."),
    name_ru: string().required("Необходимо заполнить «Название на русском»."),
  });

  const onSubmit = async (values: TourCreateType) => {
    try {
      await createTour(values);
      navigate("/tour", { replace: true });
    } catch (error) {
      console.log("error createTour: ", error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <div
        className="d-flex mb-4 align-items-center justify-content-between"
      >
        <h4 className="py-3 mb-0">
          <span className="text-muted fw-light"
            ><Link to={'/'}>Asosiy</Link> /</span>
          <span className="text-muted fw-light"
            ><Link to={'/tour'}>Tur Paketlar</Link> /</span>
          Yaratish
        </h4>
        <Link className="btn btn-info" to={'/tour'}>Orqaga</Link>
      </div>
      <CreateGeneralInfo />
      <CreateAirwaysInfo formik={formik} airways={airways} cities={cities} />
      <CreateHostelInfo />
      <CreatePackageContentInfo />
      <CreateExtraPackageInfo />
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="mb-3">
              <label className="form-label" 
                >ОПИСАНИЕ</label>
              <textarea
                className="form-control"
              ></textarea>
            </div>
            <div className="col-md-4 d-flex align-items-center mb-3">
              <input
                className="form-check"
                type="checkbox"
              /><label
                className="form-label mb-0 ms-2"
                >дети на отдельной кровати</label>
            </div>
            <div className="col-md-4 d-flex align-items-center mb-3">
              <input
                className="form-check"
                type="checkbox"
              /><label
                className="form-label mb-0 ms-2"
                >нет остановки продажи</label>
            </div>
            <div className="col-md-4 d-flex align-items-center mb-3">
              <input
                className="form-check"
                type="checkbox"
              /><label
                className="form-label mb-0 ms-2"
                >есть места на рейсы</label>
            </div>
            <div className="col-md-4 d-flex align-items-center mb-3">
              <input
                className="form-check"
                type="checkbox"
              /><label
                className="form-label mb-0 ms-2"
                >мгновенное подтверждение</label>
            </div>
            <div className="col-md-4 d-flex align-items-center mb-3">
              <input
                className="form-check"
                type="checkbox"
              /><label
                className="form-label mb-0 ms-2"
                >места повышенной комфортности</label>
            </div>
            <div className="col-md-4 d-flex align-items-center mb-3">
              <input
                className="form-check"
                type="checkbox"
              /><label
                className="form-label mb-0 ms-2"
                >инвалидная коляска</label>
            </div>
            <div>
              <button type="submit" className="btn btn-success">
                Saqlash
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Create;