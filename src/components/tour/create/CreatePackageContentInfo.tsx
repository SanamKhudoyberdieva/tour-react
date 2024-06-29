import { faPen, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { createTourNavigate } from '../../../api/tour/navigate';
import { useFormik } from 'formik';
import { TourCreateNavigateType } from '../../../store/types/tour/create-two/navigate';

const CreatePackageContentInfo = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const initialValues: TourCreateNavigateType = {
    description_ru: '',
    description_uz: '',
    from: '',
    name_ru: '',
    name_uz: '',
    position: 0,
    to: '',
    id: 0,
    tour_id: 0
  };

  const onSubmit = async (values: TourCreateNavigateType) => {
    try {
      await createTourNavigate(values.tour_id, values);
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
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Состав пакета</th>
                <th>от</th>
                <th>до</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Трансфер: Airport-Hotel-Airport(NHA TRANG)</td>
                <td>04.06.2024</td>
                <td>04.06.2024</td>
                <td>
                  <button className="btn btn-icon btn-success">
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                  <button className="btn btn-icon btn-danger">
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <input
                    className="form-control"
                    type="text"
                    value="" />
                </td>
                <td>
                  <input
                    className="form-control"
                    type="text"
                    value="" />
                </td>
                <td>
                  <input
                    className="form-control"
                    type="text"
                    value="" />
                </td>
                <td>
                  <button
                    type="submit"
                    className="btn btn-icon btn-success">
                      <FontAwesomeIcon icon={faPlus} />
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

export default CreatePackageContentInfo;