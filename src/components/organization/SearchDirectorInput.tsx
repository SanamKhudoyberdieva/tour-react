import { useState } from "react";
import { RootState } from "../../store";
import AdminsResult from "./AdminsResult";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const SearchDirectorInput = () => {
  const { t } = useTranslation();
  const admins = useSelector((state: RootState) => state.adminReducer.admins);
  const organizations = useSelector(
    (state: RootState) => state.organizationsReducer.organizations,
  );
  const [searchAdmin, setSearchAdmin] = useState("");
  const [selectedAdmin, setSelectedAdmin] = useState<number[]>([]);

  const filteredAdmins =
    admins?.filter((admin: { full_name: string }) =>
      admin.full_name.toLowerCase().includes(searchAdmin.toLowerCase()),
    ) || [];
    
  console.log("searchAdmin", searchAdmin);
  console.log("filteredAdmins", admins);

  return (
    <div>
      <label htmlFor="add-staff" className="form-label">
        {t("add-director")}
      </label>
      <div className="input-group pr-input-results-wrapper">
        <input
          type="text"
          className="form-control"
          id="add-staff"
          placeholder="Search..."
          value={searchAdmin}
          onChange={(e) => setSearchAdmin(e.target.value)}
        />
        <AdminsResult
          organizations={organizations}
          admin={filteredAdmins}
          selectedAdmin={selectedAdmin}
          setSelectedAdmin={setSelectedAdmin}
        />
      </div>
    </div>
  );
};

export default SearchDirectorInput;
