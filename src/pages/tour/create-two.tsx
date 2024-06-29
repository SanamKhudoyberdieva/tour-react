import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import CreatePackageContentInfo from "../../components/tour/create/CreatePackageContentInfo";
import CreateExtraPackageInfo from "../../components/tour/create/CreateExtraPackageInfo";

const CreateTwo = () => {
    const { t } = useTranslation();

  return (
    <>
      <div className="d-flex mb-4 align-items-center justify-content-between">
        <h4 className="py-3 mb-0">
          <span className="text-muted fw-light">
            <Link to={"/"}>Asosiy</Link> / {' '}
          </span>
          <span className="text-muted fw-light">
            <Link to={"/tour"}>Tur Paketlar</Link> / {' '}
          </span>
          Yaratish
        </h4>
        <Link className="btn btn-info" to={"/tour"}>
          Orqaga
        </Link>
      </div>
      <CreatePackageContentInfo />
      <CreateExtraPackageInfo />
        <div>
            <button type="submit" className="btn btn-success">
            {t('submit')}
            </button>
        </div>
    </>
  );
};

export default CreateTwo;