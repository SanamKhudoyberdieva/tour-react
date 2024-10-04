import React from 'react';
import { AdminMeType, OrganizationType } from "../../store/types";

const AdminsResult = ({
  organizations,
  admin,
  selectedAdmin,
  setSelectedAdmin,
}: {
  organizations: OrganizationType[];
  admin: AdminMeType[];
  selectedAdmin: number[];
  setSelectedAdmin: React.Dispatch<React.SetStateAction<number[]>>;
}) => {
  const setAdminList = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);

    if (e.target.checked) {
      setSelectedAdmin((prevSelectedStaffs) => [...prevSelectedStaffs, value]);
    } else {
      setSelectedAdmin((prevSelectedAdmin) =>
        prevSelectedAdmin.filter((selectedValue) => selectedValue !== value)
      );
    }
  };

  return (
    <div className="pr-input-result-container">
      {admin &&
        admin.map((admin, i) => (
          <label className="pr-checkbox-container mb-2" key={"admin-index-" + i}>
            <input
              type="checkbox"
              value={admin.id}
              checked={!!selectedAdmin.find((id) => id === admin.id)}
              onChange={(e) => setAdminList(e)}
            />
            <span className="checkmark"></span>
            <div>{admin.full_name}</div>
          </label>
        ))}
    </div>
  );
};

export default AdminsResult;