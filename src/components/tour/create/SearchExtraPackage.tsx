import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useTranslation } from "react-i18next";
import ExtraPackagesResult from "./ExtraPackagesResult";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createTourExtraPackage } from "../../../api";

const SearchExtraPackage = () => {
  const { t } = useTranslation();
  const { extraPackages } = useSelector((state: RootState) => state.extraPackagesReducer);
  const [searchPackage, setSearchPackage] = useState("");
  const [selectedPackage, setSelectedPackage] = useState<number[]>([]);

  const filteredPackages =
  extraPackages?.filter((extraPackage: { name_uz: string }) =>
    extraPackage.name_uz.toLowerCase().includes(searchPackage.toLowerCase()),
  ) || [];

  const setExtraPackageList = async (id: number) => {
    if (!(selectedPackage.length > 0)) return;
    const arr = selectedPackage.map(x => (
      {
        extra_package_id: x,
        price: 0,
        tour_id: id
      }
    ))
    try {
      await createTourExtraPackage(id, arr);
      setSelectedPackage([]);
    } catch (error) {
      console.log("error createTourExtraPackage", error);
    }
  };

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
          className={`btn d-flex align-items-center ${
            !(selectedPackage.length > 0)
              ? " disabled btn-outline-secondary"
              : "btn-outline-primary"
          }`}
          id="basic-addon2"
          onClick={()=>setExtraPackageList(id)}
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
