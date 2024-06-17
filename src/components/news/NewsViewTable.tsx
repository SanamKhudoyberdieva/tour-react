import { formateDate } from "../../utils";
import { NewsType } from "../../store/types";
import { useTranslation } from "react-i18next";

const NewsViewTable = ({data}: {data: NewsType}) => {
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
          <th>{t('image')}</th>
          <td>
            <img
              className="img-fluid pr-img-200"
              src={`http://80.90.188.12:8000/public/news/${data.image}`}
              alt="news"
            />
          </td>
        </tr>
        <tr>
          <th>Заголовок</th>
          <td>{data.name_ru}</td>
        </tr>
        <tr>
          <th>ТЕКСТ</th>
          <td>{data.description_ru}</td>
        </tr>
        <tr>
          <th>Sarlavha</th>
          <td>
            {data.name_uz}
          </td>
        </tr>
        <tr>
          <th>Matn</th>
          <td>{data.description_uz}</td>
        </tr>
        <tr>
          <th>{t('position-in-the-list')}</th>
          <td>{data.position}</td>
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

export default NewsViewTable;