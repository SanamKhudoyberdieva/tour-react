import { useEffect, useState } from 'react';
import { getTour } from '../../../api';
import { useTranslation } from 'react-i18next';
import { TourType } from '../../../store/types';
import { Link, useParams } from 'react-router-dom';
import TourViewTable from '../../../components/tour/TourViewTable';
import { getName } from '../../../utils';
import i18n from '../../../utils/i18n';

const Index = () => {
  const param = useParams();
  const { t } = useTranslation();
  const [data, setData] = useState<TourType | null>(null);

  const handleGetById = async (id: number) => {
    try {
      const res = await getTour(id);
      setData(res.data);
    } catch (error) {
      console.log("error getTour: ", error);
    }
  };

  useEffect(() => {
    if (!param || !param.id) return;
    handleGetById(+param.id);
  }, [param]);

  if (!data) return <></>;

  console.log("data", data)

  return (
    <>
      <div
        className="d-flex mb-4 align-items-center justify-content-between"
      >
        <h4 className="py-3 mb-0">
          <span className="text-muted fw-light"
            ><Link to={'/'}>{t('home')}</Link> / </span>
          <span className="text-muted fw-light"
            ><Link to={'/tour'}>{t('tours')} </Link>
            / </span>
            {getName(data, i18n.language)}
        </h4>
        <Link className="btn btn-info" to={'/tour'}
          >{t('back')}</Link>
      </div>
      <TourViewTable data={data} />
    </>
  )
}

export default Index;