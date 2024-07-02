import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchExtraPackage from "./SearchExtraPackage";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { TourCreateExtraPackageCreateType } from "../../../store/types/tour/create-two/extraPackage";
import { createTourExtraPackage } from "../../../api";
import { useFormik } from "formik";
import { TourCreateExtraPackageUpdateType } from "../../../store/types/tour/create-two/extraPackageUpdate";

const CreateExtraPackageInfo = ({ id }: { id: number }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { extraPackages } = useSelector(
    (state: RootState) => state.extraPackagesReducer
  );

  interface ExtraPackagesListType {
    packages: TourCreateExtraPackageUpdateType[];
  }

  const initialValues: ExtraPackagesListType = {
    packages: [{ extra_package_id: 0, id: 0, price: 0 }],
  };

  const onSubmit = async (values: ExtraPackagesListType) => {
    try {
      const obj = values.packages.map((x) => {
        return {
          extra_package_id: x.extra_package_id,
          price: x.price,
        };
      });
      await createTourExtraPackage(id, obj);
      navigate("/tour", { replace: true });
    } catch (error) {
      console.log("error createTourExtraPackage: ", error);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <div className="card mb-4">
      <div className="card-body">
        <div className="table-responsive mb-4">
          <SearchExtraPackage id={id} />
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Дополнительные услуги</th>
                <th>цена</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Страхование</td>
                <td>$50</td>
                <td>
                  <button className="btn btn-icon btn-success">
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                  <button className="btn btn-icon btn-danger">
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CreateExtraPackageInfo;
