import {
  faCheck,
  faPen,
  faTrash,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchExtraPackage from "./SearchExtraPackage";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { TourCreateExtraPackageCreateType } from "../../../store/types/tour/create-two/extraPackage";
import { createTourExtraPackage, getTour } from "../../../api";
import { useFormik } from "formik";
import { TourCreateExtraPackageUpdateType } from "../../../store/types/tour/create-two/extraPackageUpdate";
import { useEffect, useState } from "react";
import { ExtraPackageGetType } from "../../../store/types/extraPackage/get";
import { getName } from "../../../utils";
import i18n from "../../../utils/i18n";

const CreateExtraPackageInfo = ({ id }: { id: number }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { extraPackages } = useSelector(
    (state: RootState) => state.extraPackagesReducer
  );
  const [updateId, setUpdateId] = useState<number | null>(null);
  const [price, setPrice] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState<number[]>([]);
  const [tourPackages, setTourPackages] = useState<ExtraPackageGetType[] | []>(
    []
  );

  interface ExtraPackagesListType {
    packages: TourCreateExtraPackageUpdateType[];
  }

  const initialValues: ExtraPackagesListType = {
    packages: [{ extra_package_id: 0, id: 0, price: 0 }],
  };

  const onSubmit = async (values: ExtraPackagesListType) => {
    try {
      const obj = values.packages.map((x) => {
        return {
          extra_package_id: x.extra_package_id,
          price: x.price,
          tour_id: id,
        };
      });
      await createTourExtraPackage(id, obj);
      handleGetTour(id);
      // navigate("/tour", { replace: true });
    } catch (error) {
      console.log("error createTourExtraPackage: ", error);
    }
  };

  const handleGetTour = async (id: number) => {
    try {
      const res = await getTour(id);
      setTourPackages(res.data.extra_packages);
    } catch (error) {
      console.log("error getTour: ", error);
    }
  };

  const handleClearData = () => {
    setPrice(0);
  };

  const handleUpdate = async (packageId: number) => {
    try {
      const obj = tourPackages.map((x) => {
        if (packageId == x.id) {
          return {
            extra_package_id: x.extra_package_id,
            price: price,
            id: packageId,
            tour_id: id,
          };
        } else {
          return {
            extra_package_id: x.extra_package_id,
            price: x.price,
            tour_id: id,
            id: x.id,
          };
        }
      });
      await createTourExtraPackage(id, obj);
      setUpdateId(null);
      handleGetTour(id);
      handleClearData();
    } catch (error) {
      console.log("error updateRoom: ", error);
    }
  };

  const selectUpdate = (x: ExtraPackageGetType) => {
    handleClearData();
    setPrice(x.price);
    setUpdateId(x.id);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  useEffect(() => {
    handleGetTour(id);
  }, [id]);

  const deleteExtraPackage = async (tourId: number, id: number) => {
    if (!(tourPackages.length > 0)) return;

    const arr = tourPackages.filter((x) => x.extra_package_id !== id);
    const arr1 = arr.map((x) => {
      return {
        extra_package_id: x.extra_package_id,
        price: 0,
        tour_id: tourId,
      };
    });
    try {
      await createTourExtraPackage(tourId, arr1);
      setSelectedPackage([]);
      handleGetTour(tourId);
    } catch (error) {
      console.log("error createTourExtraPackage", error);
    }
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <div className="mb-4">
          <SearchExtraPackage
            id={id}
            handleGetTour={handleGetTour}
            selectedPackage={selectedPackage}
            setSelectedPackage={setSelectedPackage}
            tourPackages={tourPackages}
          />
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>{t('extra-packages')}</th>
                <th>{t('price')}</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {tourPackages.map((x, idx) => (
                <tr key={"tour-create-two-extra-package-idx-" + idx}>
                  <td>{idx + 1}</td>
                  <td>{getName(x.extra_package, i18n.language)}</td>
                  <td>
                    {updateId == x.id ? (
                      <input
                        className="form-control"
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(parseInt(e.target.value))}
                      />
                    ) : (
                      x.price
                    )}
                  </td>
                  <td>
                    {updateId == x.id ? (
                      <>
                        <button
                          className="btn btn-icon btn-success"
                          onClick={() => handleUpdate(x.id)}
                        >
                          <FontAwesomeIcon icon={faCheck} />
                        </button>
                        <button
                          className="btn btn-icon btn-warning"
                          onClick={() => {
                            setUpdateId(null);
                            handleClearData();
                          }}
                        >
                          <FontAwesomeIcon icon={faXmark} />
                        </button>
                      </>
                    ) : (
                      <button
                        className="btn btn-icon btn-success"
                        onClick={() => selectUpdate(x)}
                      >
                        <FontAwesomeIcon icon={faPen} />
                      </button>
                    )}
                    <button className="btn btn-icon btn-danger">
                      <FontAwesomeIcon
                        icon={faTrash}
                        onClick={() =>
                          deleteExtraPackage(id, x.extra_package_id)
                        }
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CreateExtraPackageInfo;