import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TourType } from "../../../store/types";
import { getDescription, getName } from "../../../utils";
import { useTranslation } from "react-i18next";

interface ApplicationExtraPackagesProps {
  data: TourType;
  setSelectedPackeges: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        price: number;
        q: number;
      }[]
    >
  >;
  selectedPackages: {
    id: number;
    price: number;
    q: number;
  }[];
}

const ApplicationExtraPackages: React.FC<ApplicationExtraPackagesProps> = ({
  data,
  setSelectedPackeges,
  selectedPackages,
}) => {
  const { t } = useTranslation();

  const handleAdd = (id: number, price: number) => {
    const has = selectedPackages.find((p) => p.id === id);
    setSelectedPackeges((x) =>
      has ? [...x] : [...x, { id: id, price: price, q: 1 }],
    );
  };

  const handleDelete = (id: number) => {
    setSelectedPackeges((x) => x.filter((p) => p.id === id));
  };

  const handleSetQuantity = (
    id: number,
    price: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const index = selectedPackages.findIndex((p) => p.id === id);
    setSelectedPackeges((x) =>
      x.map((y, idx) => {
        if (idx === index) {
          return {
            ...y,
            q: parseInt(e.target.value),
          };
        }
        return y;
      }),
    );
  };

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
                        {selectedPackages.find((p) => p.id === x.id) && (
                          <input
                            min={1}
                            type="number"
                            className="form-control"
                            value={
                              selectedPackages.find((p) => p.id === x.id)?.q
                            }
                            onChange={(e) =>
                              handleSetQuantity(x.id, x.price, e)
                            }
                          />
                        )}
                      </td>
                      <td>
                        {(selectedPackages.find((p) => p.id === x.id)?.q || 1) *
                          x.price}
                      </td>
                      <td>
                        {!selectedPackages.find((p) => p.id === x.id) && (
                          <button
                            className="btn btn-icon btn-success"
                            onClick={() => handleAdd(x.id, x.price)}
                          >
                            <FontAwesomeIcon icon={faPlus} />
                          </button>
                        )}
                        {selectedPackages.find((p) => p.id === x.id) && (
                          <button className="btn btn-icon btn-danger">
                            <FontAwesomeIcon
                              icon={faTrash}
                              onClick={() => handleDelete(x.id)}
                            />
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
