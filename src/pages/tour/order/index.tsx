import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link, useLocation, useParams } from "react-router-dom";
import ApplicationTurTable from "../../../components/tour/order/ApplicationTurTable";
import ApplicationHotelTable from "../../../components/tour/order/ApplicationHotelTable";
import ApplicationTransportTable from "../../../components/tour/order/ApplicationTransportTable";
import ApplicantInformation from "../../../components/tour/order/ApplicantInformation";
import ApplicationNotes from "../../../components/tour/order/ApplicationNotes";
import ApplicationExtraPackages from "../../../components/tour/order/ApplicationExtraPackages";
import { ApplicantsCreateType } from "../../../store/types/tour/order/applicantsCreate";
import { getTour } from "../../../api";
import { TourType } from "../../../store/types";

// Validation schema using Yup
const TourOrderSchema = Yup.object().shape({
  applicants: Yup.array().of(
    Yup.object().shape({
      applicant_type: Yup.number().required("Applicant type is required"),
      birthday: Yup.string().required("Birthday is required"),
      commission: Yup.number().required("Commission is required"),
      expire_date: Yup.string().required("Expire date is required"),
      full_name: Yup.string().required("Full name is required"),
      need_disabled_carriage: Yup.boolean(),
      need_visa: Yup.boolean(),
      passport: Yup.string().required("Passport is required"),
      visa_file: Yup.string().required("Visa file is required"),
    }),
  ),
  comment: Yup.string().optional(),
  extra_packages: Yup.array().of(
    Yup.object().shape({
      count: Yup.number().required("Count is required"),
      extra_package_id: Yup.number().required("Extra package ID is required"),
      total: Yup.number().required("Total is required"),
    }),
  ),
  phone: Yup.string().required("Phone is required"),
  place_count: Yup.number().required("Place count is required"),
  second_phone: Yup.string().optional(),
  total: Yup.number().required("Total is required"),
  total_commission: Yup.number().required("Total commission is required"),
  tour_id: Yup.number().required("Tour ID is required"),
  tour_room_id: Yup.number().required("Tour room ID is required"),
});

const TourOrder: React.FC = () => {
  const param = useParams();
  const location = useLocation();
  const [data, setData] = useState<TourType | null>(null);
  const queryParams = new URLSearchParams(location.search);
  const adults_count = queryParams.get("adults_count") || "1";

  const initialValues: ApplicantsCreateType = {
    applicants: [
      {
        applicant_type: 0,
        birthday: "",
        commission: 0,
        expire_date: "",
        full_name: "",
        need_disabled_carriage: false,
        need_visa: false,
        passport: "",
        visa_file: "",
      },
    ],
    comment: "",
    extra_packages: [
      {
        count: 0,
        extra_package_id: 0,
        total: 0,
      },
    ],
    phone: "",
    place_count: 0,
    second_phone: "",
    total: 0,
    total_commission: 0,
    tour_id: 0,
    tour_room_id: 0,
  };

  const handleGetById = async (id: number) => {
    try {
      const res = await getTour(id);
      setData(res.data);
    } catch (error) {
      console.log("error getTour: ", error);
    }
  };

  const handleSubmit = (values: ApplicantsCreateType) => {
    console.log("Form data submitted:", values);
    // Here, you can make your API call to post the form data
  };

  useEffect(() => {
    if (!param || !param.id) return;
    handleGetById(+param.id);
  }, [param]);

  console.log("data", data)


  if (!data) return <></>;

  return (
    <div>
      <div className="d-flex mb-4 align-items-center justify-content-between">
        <h4 className="py-3 mb-0">
          <span className="text-muted fw-light">
            <Link to={"/"}>Asosiy</Link> /
          </span>
          <span className="text-muted fw-light">
            <Link to={"/tour"}>Turlar</Link> /
          </span>
          Tur 1
        </h4>
        <Link className="btn btn-info" to={"/tour"}>
          Orqaga
        </Link>
      </div>
      <ApplicationTurTable data={data} />
      <ApplicationHotelTable data={data} />
      <ApplicationTransportTable data={data} />
      <Formik
        initialValues={initialValues}
        validationSchema={TourOrderSchema}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form>
            {Array.from({ length: parseInt(adults_count, 10) }, (_, index) => (
              <div key={index}>
                <h6>Информация о туристе {index + 1}</h6>
                <ApplicantInformation index={index + 1} />
              </div>
            ))}
            <div className="form-check mb-4">
              <Field
                className="form-check-input"
                type="checkbox"
                name="applicants[0].need_disabled_carriage"
              />
              <label className="form-check-label">младенец</label>
            </div>

            <ApplicationNotes />
            <ApplicationExtraPackages />

            <div className="row">
              <div className="col-md-5">
                <div className="card">
                  <div className="card-body">
                    <div className="dt-total-price">{values.total} USD</div>
                    <div className="d-flex justify-content-around">
                      <button type="submit" className="btn btn-primary">
                        Пересчитать
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        disabled
                      >
                        Бронировать
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TourOrder;
