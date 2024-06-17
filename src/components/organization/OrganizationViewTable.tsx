import { formateDate } from "../../utils";
import { useTranslation } from "react-i18next";
import { OrganizationType } from "../../store/types";

const OrganizationViewTable = ({data}: {data: OrganizationType}) => {
  const { t } = useTranslation();

  return (
    <table
      className="table table-striped table-bordered detail-view">
      <tbody>
        <tr>
          <th>{t('id')}</th>
          <td>{data.id}</td>
        </tr>
        <tr>
          <th>{t('name')}</th>
          <td>{data.name}</td>
        </tr>
        <tr>
          <th>{t('director')}</th>
          <td>{data.director}</td>
        </tr>
        <tr>
          <th>{t('city')}</th>
          <td>{data.city}</td>
        </tr>
        <tr>
          <th>{t('address')}</th>
          <td>{data.address}</td>
        </tr>
        <tr>
          <th>{t('description')}</th>
          <td>{data.description}</td>
        </tr>
        <tr>
          <th>{t('created')}</th>
          <td>{data.created?.full_name}</td>
        </tr>
        <tr>
          <th>{t('created-at')}</th>
          <td>{formateDate(data.created_at)}</td>
        </tr>
        <tr>
          <th>{t('updated')}</th>
          <td>{data.updated?.full_name}</td>
        </tr>
        <tr>
          <th>{t('updated-at')}</th>
          <td>{formateDate(data.updated_at)}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default OrganizationViewTable;