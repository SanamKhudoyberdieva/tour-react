import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../../store";
import { TourCreateType } from "../../store/types";
import { createTour } from "../../api";
import { useFormik } from "formik";
import CreatePackageContentInfo from "../../components/tour/create/CreatePackageContentInfo";
import CreateExtraPackageInfo from "../../components/tour/create/CreateExtraPackageInfo";

const CreateTwo = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { extraPackages } = useSelector((state: RootState) => state.extraPackagesReducer);

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
        city_from_id: 0,
        description_ru: "",
        description_uz: "",
        extra_packages: [{ extra_package_id: 0, price: 0 }],
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
        navigate: [
        {
            description_ru: "",
            description_uz: "",
            from: "",
            name_ru: "",
            name_uz: "",
            position: 0,
            to: "",
        },
        ],
        night_count: 0,
        nutrition_type: "",
        place_by_request: false,
        position: 0,
        rooms: [{ count: 0, gender: 0, price: 0, room_id: 0 }],
        tarif_type: "",
        to: "",
    };

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
        onSubmit,
    });

  return (
    <>
      <div className="d-flex mb-4 align-items-center justify-content-between">
        <h4 className="py-3 mb-0">
          <span className="text-muted fw-light">
            <Link to={"/"}>Asosiy</Link> / {' '}
          </span>
          <span className="text-muted fw-light">
            <Link to={"/tour"}>Tur Paketlar</Link> / {' '}
          </span>
          Yaratish
        </h4>
        <Link className="btn btn-info" to={"/tour"}>
          Orqaga
        </Link>
      </div>
      <CreatePackageContentInfo formik={formik} />
      <CreateExtraPackageInfo extraPackages={extraPackages} formik={formik} />
        <div>
            <button type="submit" className="btn btn-success">
            {t('submit')}
            </button>
        </div>
    </>
  );
};

export default CreateTwo;