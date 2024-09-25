import i18n from "../../utils/i18n";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { deleteNews, getNews } from "../../api";
import { NewsListType } from "../../store/types";
import { formateDate, getName } from "../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const NewsTable = () => {
  const { t } = useTranslation();
  const [data, setData] = useState<NewsListType | null>(null);

  const handleGet = async () => {
    try {
      const res = await getNews();
      setData(res.data);
    } catch (error) {
      console.log("error getNews: ", error);
    }
  };

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm(t('are-you-sure-you-want-to-delete'));
    if (!confirmed) return;
    
    try {
      await deleteNews(id);
      handleGet();
    } catch (error) {
      console.log("error deleteNews: ", error);
    }
  };

  useEffect(() => {
    handleGet();
  }, []);

  if (!data) return;

  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>{t('name')}</th>
            <th>{t('image')}</th>
            <th>{t('position')}</th>
            <th>{t('created-at')}</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
        {data.news.map((x, idx) => (
          <tr key={"news-list-item-id" + x.id}>
            <td>{idx + 1}</td>
            <td>
              <Link to={`/news/view/${x.id}`}>
                {getName(x, i18n.language)}
              </Link>
            </td>
            <td>
              <img
                className="img-fluid pr-img-200"
                src={`https://backend.poytaxt-team.uz/public/news/${x.image}`}
                alt="news"
              />
            </td>
            <td>{x.position}</td>
            <td>{formateDate(x.created_at)}</td>
            <td>
              <Link className="btn p-1" to={`/news/edit/${x.id}`}>
                <FontAwesomeIcon icon={faPen}/>
              </Link>
              <button className="btn p-1" onClick={() => handleDelete(x.id)}>
                <FontAwesomeIcon icon={faTrash}/>
              </button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default NewsTable;