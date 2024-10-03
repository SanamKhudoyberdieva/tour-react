import { formateDate } from "../../utils";
import { AdminType } from "../../store/types";
import { useTranslation } from "react-i18next";

const AdminViewTable = ({ data }: { data: AdminType }) => {
  const { t } = useTranslation();

  return (
    <table
      className="table table-striped table-bordered detail-view"
    >
      <tbody>
        <tr>
          <th>{t("id")}</th>
          <td>{data.id}</td>
        </tr>
        <tr>
          <th>{t("fullname")}</th>
          <td>{data.full_name}</td>
        </tr>
        <tr>
          <th>{t("username")}</th>
          <td>{data.username}</td>
        </tr>
        <tr>
          <th>{t("phone-number")}</th>
          <td>{data.phone}</td>
        </tr>
        <tr>
          <th>{t("role")}</th>
          <td>{data.role?.title}</td>
        </tr>
        <tr>
          <th>{t("organization")}</th>
          <td>{data.organization?.name}</td>
        </tr>
        <tr>
          <th>{t("active")}</th>
          <td>{data.is_active ? t("yes") : t("no")}</td>
        </tr>
        <tr>
          <th>{t("created-at")}</th>
          <td>{formateDate(data.created_at)}</td>
        </tr>
        <tr>
          <th>{t("last-visit")}</th>
          <td>{formateDate(data.last_visit)}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default AdminViewTable;