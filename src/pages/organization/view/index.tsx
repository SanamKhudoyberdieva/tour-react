import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getOrganization } from "../../../api";
import { Link, useParams } from "react-router-dom";
import { OrganizationType } from "../../../store/types";
import OrganizationViewTable from "../../../components/organization/OrganizationViewTable";

const Index = () => {
  const params = useParams();
  const { t } = useTranslation();
  const [data, setData] = useState<OrganizationType>();

  const handleGet = async (id: number) => {
    try {
      const res = await getOrganization(id);
      setData(res.data);
    } catch (error) {
      console.log("error getOrganization: ", error);
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
            ><Link to={'/organization'}>{t('organizations')}</Link> / </span>
          {data.name}
        </h4>
        <Link className="btn btn-info" to={'/organization'}>{t('back')}</Link>
      </div>
      <div className="card mb-3">
        <div className="card-body">
          <OrganizationViewTable data={data}/>
        </div>
      </div>
    </>
  )
}

export default Index;