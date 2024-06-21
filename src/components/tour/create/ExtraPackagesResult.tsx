import React from 'react';
import i18n from '../../../utils/i18n';
import { getName } from '../../../utils';
import { ExtraPackageType } from '../../../store/types';

const ExtraPackagesResult = ({
  extraPackages,
  selectedPackage,
  setSelectedPackage,
}: {
  extraPackages: ExtraPackageType[];
  selectedPackage: number[];
  setSelectedPackage: React.Dispatch<React.SetStateAction<number[]>>;
}) => {
  const setAdminList = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);

    if (e.target.checked) {
      setSelectedPackage((prevSelectedExtraPackage) => [...prevSelectedExtraPackage, value]);
    } else {
      setSelectedPackage((prevSelectedExtraPackages) =>
        prevSelectedExtraPackages.filter((selectedValue) => selectedValue !== value)
      );
    }
  };

  return (
    <div className="pr-input-result-container">
      {extraPackages &&
        extraPackages.map((extraPackages, i) => (
          <label className="pr-checkbox-container mb-2" key={"extraPackages-index-" + i}>
            <input
              type="checkbox"
              value={extraPackages.id}
              checked={!!selectedPackage.find((id) => id === extraPackages.id)}
              onChange={(e) => setAdminList(e)}
            />
            <span className="checkmark"></span>
            <div>{getName(extraPackages, i18n.language)}</div>
          </label>
        ))}
    </div>
  );
};

export default ExtraPackagesResult;