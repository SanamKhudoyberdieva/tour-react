import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useTranslation } from "react-i18next";
import { createTourExtraPackage } from "../../../api";
import ExtraPackagesResult from "./ExtraPackagesResult";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Dispatch, SetStateAction, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExtraPackageGetType } from "../../../store/types/extraPackage/get";

const SearchExtraPackage = ({
  id,
  handleGetTour,
  selectedPackage,
  setSelectedPackage,
  tourPackages,
}: {
  id: number;
  handleGetTour: (id: number) => Promise<void>;
  selectedPackage: number[];
  setSelectedPackage: Dispatch<SetStateAction<number[]>>;
  tourPackages: [] | ExtraPackageGetType[];
}) => {
  const { t } = useTranslation();
  const { extraPackages } = useSelector(
    (state: RootState) => state.extraPackagesReducer
  );
  const [searchPackage, setSearchPackage] = useState("");

  const filteredPackages =
    extraPackages?.filter((extraPackage: { name_uz: string }) =>
      extraPackage.name_uz.toLowerCase().includes(searchPackage.toLowerCase())
    ) || [];

  const setExtraPackageList = async (id: number) => {
    if (!(selectedPackage.length > 0)) return;
    const idList = [...tourPackages.map((x) => x.extra_package_id), ...selectedPackage];
    const arr = idList.map((x) => {
      return {
        extra_package_id: x,
        price: 0,
        tour_id: id,
      };
    });
    try {
      await createTourExtraPackage(id, arr);
      setSelectedPackage([]);
      handleGetTour(id);
    } catch (error) {
      console.log("error createTourExtraPackage", error);
    }
  };

  return (
    <div className="mb-4 col-md-6">
      <label htmlFor="add-extra-package" className="form-label">
        {t("add-extra-package")}
      </label>
      <div className="input-group pr-input-results-wrapper">
        <input
          type="text"
          className="form-control"
          id="add-extra-package"
          placeholder={t('search')}
          value={searchPackage}
          onChange={(e) => setSearchPackage(e.target.value)}
        />
        <ExtraPackagesResult
          extraPackages={filteredPackages}
          selectedPackage={selectedPackage}
          setSelectedPackage={setSelectedPackage}
          tourPackages={tourPackages}
        />
        <button
          className={`btn d-flex align-items-center ${
            !(selectedPackage.length > 0)
              ? " disabled btn-outline-secondary"
              : "btn-outline-primary"
          }`}
          id="basic-addon2"
          onClick={() => setExtraPackageList(id)}
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
