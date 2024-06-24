import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchExtraPackage from './SearchExtraPackage';
import { FormikProps } from 'formik';
import { ExtraPackageType } from '../../../store/types';
import { useTranslation } from 'react-i18next';

interface CreateExtraPackageInfoProps {
  formik: FormikProps<any>;
  extraPackages: ExtraPackageType[];
}

const CreateExtraPackageInfo: React.FC<CreateExtraPackageInfoProps> = ({ formik, extraPackages }) => {
  const { t } = useTranslation();

  return (
    <div className="card mb-4">
      <div className="card-body">
        <div className="table-responsive mb-4">
        <SearchExtraPackage  />
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
  )
}

export default CreateExtraPackageInfo;