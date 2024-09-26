import { Formik, Form } from "formik";
import i18n from "../../../utils/i18n";
import { getName } from "../../../utils";
import { useTranslation } from "react-i18next";
import { TourType } from "../../../store/types";
import React, { useEffect, useState } from "react";
import { createApplicant, getTour } from "../../../api";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { uploadApplicaitonFile } from "../../../api/application/file";
import ApplicationNotes from "../../../components/tour/order/ApplicationNotes";
import InfantInformation from "../../../components/tour/order/InfantInformation";
import ApplicationTurTable from "../../../components/tour/order/ApplicationTurTable";
import ApplicantInformation from "../../../components/tour/order/ApplicantInformation";
import { ApplicantsCreateType } from "../../../store/types/tour/order/applicantsCreate";
import ApplicationHotelTable from "../../../components/tour/order/ApplicationHotelTable";
import ApplicationExtraPackages from "../../../components/tour/order/ApplicationExtraPackages";
import ApplicationTransportTable from "../../../components/tour/order/ApplicationTransportTable";
import useToast from "../../../utils/useToast";

const TourOrder: React.FC = () => {
  const { t } = useTranslation();
  const [selectedPackages, setSelectedPackeges] = useState<
    { extra_package_id: number; total: number; count: number }[]
  >([]);
  const [isLoaded, setIsloaded] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { showToast } = useToast();
  const queryParams = new URLSearchParams(location.search);
  const adults_count = queryParams.get("adults_count") || "1";
  const tour_room_id = queryParams.get("tour_room_id");
  const [adultsHasInfant, setAdultsHasInfant] = useState<
    { index: number; has: boolean }[]
  >([]);
  const param = useParams();
  const [tourData, setTourData] = useState<TourType | null>(null);

  const [total, setTotal] = useState<number>(0);

  const calculateSum = (values: ApplicantsCreateType) => {
    if (!tourData) return;
    let sum = 0;
    const roomPrice = tourData.room_prices[0].price;
    const visaPrice = tourData.visa_price;
    const babyPrice = tourData.baby_price;

    values.applicants.forEach((x) => {
      sum = x.need_visa ? sum + visaPrice : sum;
      sum = x.applicant_type === 1 ? sum - babyPrice : sum + roomPrice;
    });

    selectedPackages.forEach((x) => {
      sum = x.total * x.count + sum;
    });

    setTotal(sum);
  };

  const initialValues: ApplicantsCreateType = {
    applicants: [],
    comment: "",
    extra_packages: [
      {
        count: 0,
        extra_package_id: 0,
        total: 0,
      },
    ],
    place_count: 0,
    total: 0,
    total_commission: 0,
    tour_id: 0,
    tour_room_id: 0,
  };

  const handleGetTour = async (id: number) => {
    try {
      const res = await getTour(id);
      setTourData(res.data);
      setIsloaded(true);
    } catch (error) {
      console.log("getting tour: ", error);
    }
  };

  const handleSubmit = async (data: ApplicantsCreateType) => {
    try {
      await createApplicant(data);
      showToast(t("successfully-created"), { type: "success" });
      navigate("/order", { replace: true });
    } catch (error: any) {
      showToast(error.response.data.message, { type: "error" });
      console.error("Error submitting form:", error.response.data);
    }
  };

  useEffect(() => {
    if (!param.id) return;
    handleGetTour(parseInt(param.id, 10));
  }, [param.id]);

  useEffect(() => {
    Array.from({ length: parseInt(adults_count) }, (_, index) => {
      if (!adultsHasInfant.find((x) => x.index === index)) {
        setAdultsHasInfant((x) => [
          ...x,
          {
            index,
            has: false,
          },
        ]);
      }
      function onlyUnique(
        value: { index: number; has: boolean },
        index: number,
        array: { index: number; has: boolean }[]
      ) {
        return array.findIndex((v) => v.index === value.index) === index;
      }
      setAdultsHasInfant((x) => x.filter(onlyUnique));
    });
  }, [adults_count]);

  if (!tourData || !tour_room_id) return;

  return (
    <div>
      <div className="d-flex mb-4 align-items-center justify-content-between">
        <h4 className="py-3 mb-0">
          <span className="text-muted fw-light">
            <Link to={"/"}>{t("home")}</Link> /{" "}
          </span>
          <span className="text-muted fw-light">
            <Link to={"/tour"}>{t("tour-packages")}</Link> /
          </span>{" "}
          {getName(tourData, i18n.language)}
        </h4>
        <Link className="btn btn-info" to={"/tour"}>
          {t("back")}
        </Link>
      </div>
      <ApplicationTurTable data={tourData} />
      <ApplicationHotelTable data={tourData} />
      <ApplicationTransportTable data={tourData} />
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({
          values,
          handleChange,
          setFieldValue,
          handleBlur,
          errors,
          touched,
        }) => {
          if (isLoaded) {
            setFieldValue("tour_id", tourData.id);
            setFieldValue("tour_room_id", parseInt(tour_room_id));
            setIsloaded(false);
          }
          return (
            <Form>
              {Array.from({ length: parseInt(adults_count) }, (_, index) => {
                const applicants = values.applicants || [];
                const adults = parseInt(adults_count);

                if (applicants.length < parseInt(adults_count)) {
                  const newApplicants = [
                    ...applicants,
                    {
                      applicant_type: 0,
                      birthday: "",
                      commission: 0,
                      expire_date: "",
                      full_name: "",
                      need_disabled_carriage: false,
                      need_visa: false,
                      passport: null,
                      visa_file: null,
                      with_parent: false,
                      phone: "",
                    },
                  ];
                  setFieldValue("applicants", newApplicants);
                }

                const handleAddInfant = async () => {
                  const newApplicants = [
                    ...applicants,
                    {
                      applicant_type: 1,
                      birthday: "",
                      commission: 0,
                      expire_date: "",
                      full_name: "",
                      need_visa: false,
                      passport: null,
                      visa_file: null,
                      with_parent: false,
                    },
                  ];
                  await setFieldValue("applicants", newApplicants);
                  setAdultsHasInfant((x) =>
                    x.map((y) => {
                      if (y.index === index)
                        return {
                          index: y.index,
                          has: true,
                        };
                      return y;
                    })
                  );
                };
                const handleRemoveInfant = (index: number) => {
                  setAdultsHasInfant((x) =>
                    x.map((y) => {
                      if (y.index === index)
                        return {
                          index: y.index,
                          has: false,
                        };
                      return y;
                    })
                  );
                };
                return (
                  <div key={index} className="mb-3">
                    <h6>
                      {t("information-about-tourist")} {index + 1}
                    </h6>
                    <ApplicantInformation
                      values={values}
                      handleChange={handleChange}
                      setFieldValue={setFieldValue}
                      index={index}
                      handleBlur={handleBlur}
                      errors={errors}
                      touched={touched}
                    />
                    {index > 0 && adultsHasInfant[0].has == false ? (
                      <></>
                    ) : (
                      <>
                        {!adultsHasInfant.find((x) => x.index === index)
                          ?.has ? (
                          <button
                            className="btn btn-secondary btn-sm mt-3"
                            onClick={handleAddInfant}
                            type="button"
                          >
                            {t("add-infant")}
                          </button>
                        ) : (
                          <button
                            className="btn btn-secondary btn-sm mb-4 mt-3"
                            onClick={() => handleRemoveInfant(index)}
                            type="button"
                          >
                            {t("remove-infant")}
                          </button>
                        )}
                        {adultsHasInfant.find((x) => x.index === index)
                          ?.has && (
                          <InfantInformation
                            values={values}
                            handleChange={handleChange}
                            setFieldValue={setFieldValue}
                            index={index}
                            adults={adults}
                            uploadApplicaitonFile={uploadApplicaitonFile}
                          />
                        )}
                      </>
                    )}
                  </div>
                );
              })}
              <ApplicationNotes
                values={values}
                handleChange={handleChange}
                setFieldValue={setFieldValue}
                handleBlur={handleBlur}
                errors={errors}
                touched={touched}
              />
              <ApplicationExtraPackages
                data={tourData}
                selectedPackages={selectedPackages}
                setSelectedPackeges={setSelectedPackeges}
                setFieldValue={setFieldValue}
              />

              <div className="row">
                <div className="col-md-5">
                  <div className="card">
                    <div className="card-body">
                      <div className="dt-total-price">
                        {total} {t("sum")}
                      </div>
                      <div className="d-flex justify-content-around">
                        <button
                          type="button"
                          onClick={() => calculateSum(values)}
                          className="btn btn-primary"
                        >
                          {t("calculate")}
                        </button>
                        <button type="submit" className="btn btn-primary">
                          {t("book")}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default TourOrder;
