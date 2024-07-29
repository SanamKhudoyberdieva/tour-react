import React from "react";
import i18n from "../../../utils/i18n";
import { getName } from "../../../utils";
import { ExtraPackageType } from "../../../store/types";
import { ExtraPackageGetType } from "../../../store/types/extraPackage/get";

const ExtraPackagesResult = ({
  extraPackages,
  selectedPackage,
  setSelectedPackage,
  tourPackages,
}: {
  extraPackages: ExtraPackageType[];
  selectedPackage: number[];
  setSelectedPackage: React.Dispatch<React.SetStateAction<number[]>>;
  tourPackages: [] | ExtraPackageGetType[];
}) => {
  const setAdminList = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);

    if (e.target.checked) {
      setSelectedPackage((prevSelectedExtraPackage) => [
        ...prevSelectedExtraPackage,
        value,
      ]);
    } else {
      setSelectedPackage((prevSelectedExtraPackages) =>
        prevSelectedExtraPackages.filter(
          (selectedValue) => selectedValue !== value
        )
      );
    }
  };

  const filteredExtraPackagesGet = extraPackages.filter(
    (epg) => !tourPackages.some((ep) => ep.extra_package_id === epg.id)
  );
  return (
    <div className="pr-input-result-container">
      {filteredExtraPackagesGet &&
        filteredExtraPackagesGet.map((extraPackage, i) => (
          <label
            className="pr-checkbox-container mb-2"
            key={"extraPackage-index-" + i}
          >
            <input
              type="checkbox"
              value={extraPackage.id}
              checked={!!selectedPackage.find((id) => id === extraPackage.id)}
              onChange={(e) => setAdminList(e)}
            />
            <span className="checkmark"></span>
            <div>{getName(extraPackage, i18n.language)}</div>
          </label>
        ))}
    </div>
  );
};

export default ExtraPackagesResult;
