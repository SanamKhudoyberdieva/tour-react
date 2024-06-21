import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useTranslation } from "react-i18next";
import ExtraPackagesResult from "./ExtraPackagesResult";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchExtraPackage = () => {
  const { t } = useTranslation();
  const { extraPackages } = useSelector((state: RootState) => state.extraPackagesReducer);
  const [searchPackage, setSearchPackage] = useState("");
  const [selectedPackage, setSelectedPackage] = useState<number[]>([]);

  const filteredPackages =
  extraPackages?.filter((extraPackage: { name_uz: string }) =>
    extraPackage.name_uz.toLowerCase().includes(searchPackage.toLowerCase()),
  ) || [];

  return (
    <div className="mb-4">
      <label htmlFor="add-extra-package" className="form-label">
        {t("add-extra-package")}
      </label>
      <div className="input-group pr-input-results-wrapper">
        <input
          type="text"
          className="form-control"
          id="add-extra-package"
          placeholder="Search..."
          value={searchPackage}
          onChange={(e) => setSearchPackage(e.target.value)}
        />
        <ExtraPackagesResult
          extraPackages={filteredPackages}
          selectedPackage={selectedPackage}
          setSelectedPackage={setSelectedPackage}
        />
        <button
          disabled={!(selectedPackage.length > 0)}
          className={`btn d-flex align-items-center ${
            !(selectedPackage.length > 0)
              ? " disabled btn-outline-secondary"
              : "btn-outline-primary"
          }`}
          id="basic-addon2"
        >
          <FontAwesomeIcon icon={faPlus} />
          {selectedPackage.length > 0 && (
            <span className="badge rounded-pill ms-1">
              {selectedPackage.length}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default SearchExtraPackage;
