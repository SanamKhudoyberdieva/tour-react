import { useEffect, useState } from 'react';
import { getAdminById } from '../../../api';
import { useTranslation } from 'react-i18next';
import { AdminType } from '../../../store/types';
import { Link, useParams } from 'react-router-dom';
import AdminViewTable from '../../../components/admin/AdminViewTable';

const Index = () => {
  const param = useParams();
  const { t } = useTranslation();
  const [data, setData] = useState<AdminType | null>(null);

  const handleGetById = async (id: number) => {
    try {
      const res = await getAdminById(id);
      setData(res.data);
    } catch (error) {
      console.log("error getAdminById: ", error);
    }
  };

  useEffect(() => {
    if (!param || !param.id) return;
    handleGetById(+param.id);
  }, [param]);

  if (!data) return <></>;

  return (
    <>
      <div
        className="d-flex mb-4 align-items-center justify-content-between"
      >
        <h4 className="py-3 mb-0">
          <span className="text-muted fw-light"
            ><Link to={'/'}>{t('home')}</Link> / </span>
          <span className="text-muted fw-light"
            ><Link to={'/admin'}>Adminstratorlar</Link>
            / </span>
            {data.username}
        </h4>
        <Link className="btn btn-info" to={'/admin'}
          >Orqaga</Link>
      </div>
      <div className="card mb-3">
        <div className="card-body">
          <AdminViewTable data={data} />
        </div>
      </div>
    </>
  )
}

export default Index;