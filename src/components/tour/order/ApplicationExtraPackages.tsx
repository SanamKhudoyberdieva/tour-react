import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TourType } from "../../../store/types";
import { getDescription, getName } from "../../../utils";
import { useTranslation } from "react-i18next";
import { ApplicantsCreateType } from "../../../store/types/tour/order/applicantsCreate";
import { FormikErrors } from "formik";
import { useEffect } from "react";

interface ApplicationExtraPackagesProps {
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean
  ) => Promise<void | FormikErrors<ApplicantsCreateType>>;
  data: TourType;
  setSelectedPackeges: React.Dispatch<
    React.SetStateAction<
      {
        extra_package_id: number;
        total: number;
        count: number;
      }[]
    >
  >;
  selectedPackages: {
    extra_package_id: number;
    total: number;
    count: number;
  }[];
}

const ApplicationExtraPackages: React.FC<ApplicationExtraPackagesProps> = ({
  data,
  setSelectedPackeges,
  selectedPackages,
  setFieldValue,
}) => {
  const { t } = useTranslation();

  const handleAdd = (id: number, total: number) => {
    const has = selectedPackages.find((p) => p.extra_package_id === id);
    setSelectedPackeges((x) =>
      has ? [...x] : [...x, { extra_package_id: id, total: total, count: 1 }]
    );
  };

  const handleDelete = (id: number) => {
    setSelectedPackeges((x) => x.filter((p) => !(p.extra_package_id === id)));
  };

  const handleSetQuantity = (
    id: number,
    total: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const index = selectedPackages.findIndex((p) => p.extra_package_id === id);
    setSelectedPackeges((x) =>
      x.map((y, idx) => {
        if (idx === index) {
          return {
            ...y,
            count: parseInt(e.target.value),
          };
        }
        return y;
      })
    );
  };

  useEffect(() => {
    setFieldValue("extra_packages", selectedPackages);
  }, [selectedPackages]);

  return (
    <div>
      <h6>{t("extra-packages")}</h6>
      <div className="card mb-4">
        <div className="card-body">
          <div className="table-responsive mb-4">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>{t("name")}</th>
                  <th>{t("description")}</th>
                  <th>{t("quantity")}</th>
                  <th>{t("price")}</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data.extra_packages &&
                  data.extra_packages.map((x, idx) => (
                    <tr key={idx}>
                      <td>{idx + 1}</td>
                      <td>{getName(x.extra_package)}</td>
                      <td>{getDescription(x.extra_package)}</td>
                      <td>
                        {selectedPackages.find(
                          (p) => p.extra_package_id === x.id
                        ) && (
                          <input
                            min={1}
                            type="number"
                            className="form-control"
                            value={
                              selectedPackages.find(
                                (p) => p.extra_package_id === x.id
                              )?.count
                            }
                            onChange={(e) =>
                              handleSetQuantity(x.id, x.price, e)
                            }
                          />
                        )}
                      </td>
                      <td>
                        {(selectedPackages.find(
                          (p) => p.extra_package_id === x.id
                        )?.count || 1) * x.price}
                      </td>
                      <td>
                        {!selectedPackages.find(
                          (p) => p.extra_package_id === x.id
                        ) && (
                          <button
                            className="btn btn-icon btn-success"
                            onClick={() => handleAdd(x.id, x.price)}
                          >
                            <FontAwesomeIcon icon={faPlus} />
                          </button>
                        )}
                        {selectedPackages.find(
                          (p) => p.extra_package_id === x.id
                        ) && (
                          <button
                            className="btn btn-icon btn-danger"
                            type="button"
                            onClick={() => handleDelete(x.id)}
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationExtraPackages;
