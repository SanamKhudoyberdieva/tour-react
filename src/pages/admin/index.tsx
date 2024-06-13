import { getAdmins } from "../../api";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { AdminType } from "../../store/types";
import { useTranslation } from "react-i18next";
import AdminTable from "../../components/admin/AdminTable";

const Index = () => {
  const { t } = useTranslation();
  const [data, setData] = useState<AdminType[] | []>([]);

  const handleGet = async () => {
    try {
      const res = await getAdmins();
      setData(res.data);
    } catch (error) {
      console.log("error getAdmins: ", error);
    }
  };

  useEffect(() => {
    handleGet();
  }, []);

  return (
    <>
      <div
        className="d-flex mb-4 align-items-center justify-content-between"
      >
        <h4 className="py-3 mb-0">
          <span className="text-muted fw-light">
            <Link to={'/'}>{t('home')}</Link> / 
          </span>
          Adminstratorlar
        </h4>
        <Link className="btn btn-success" to={'/admin/create'}
          >Admin qo'shish</Link>
      </div>
      <div className="card">
        <div className="card-body">
          <div
            className="d-flex flex-column-reverse flex-md-row align-items-center justify-content-between mb-3"
          ></div>
          <AdminTable data={data} handleGet={handleGet}/>
        </div>
      </div>
    </>
  )
}

export default Index;