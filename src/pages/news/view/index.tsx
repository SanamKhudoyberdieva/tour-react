import { getNew } from "../../../api";
import i18n from "../../../utils/i18n";
import { getName } from "../../../utils";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { NewsType } from "../../../store/types";
import { Link, useParams } from "react-router-dom";
import NewsViewTable from "../../../components/news/NewsViewTable";

const Index = () => {
  const params = useParams();
  const { t } = useTranslation();
  const [data, setData] = useState<NewsType>();

  const handleGet = async (id: number) => {
    try {
      const res = await getNew(id);
      setData(res.data);
    } catch (error) {
      console.log("error getNew: ", error);
    }
  };

  useEffect(() => {
    if (!params || !params.id) return;
    const id = params.id;
    const intId = parseInt(id, 10);
    if (isNaN(intId)) return;
    handleGet(intId);
  }, [params]);

  if (!data) return <></>;

  return (
    <>
      <div
        className="d-flex mb-4 align-items-center justify-content-between">
        <h4 className="py-3 mb-0">
          <span className="text-muted fw-light"
            ><Link to={'/'}>{t('home')}</Link> / </span>
          <span className="text-muted fw-light"
            ><Link to={'/news'}>{t('news')}</Link> / </span>
          {getName(data, i18n.language)}
        </h4>
        <Link className="btn btn-info" to={'/news'}>{t('back')}</Link>
      </div>
      <div className="card mb-3">
        <div className="card-body">
          <NewsViewTable data={data}/>
        </div>
      </div>
    </>
  )
}

export default Index;