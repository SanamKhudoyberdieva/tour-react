import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store";
import { useEffect } from "react";

const BranchTable = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { branches } = useSelector((state: RootState) => state.branchesReducer);

  // const handleGetAll = async () => {
  //   try {
  //     const res = await getBrands();
  //     dispatch(setBrands(res.data));
  //   } catch (error) {
  //     console.log("error getBrands: ", error);
  //   }
  // };

  // const handleDelete = async (id: number) => {
  //   const confirmed = window.confirm(t('are-you-sure-you-want-to-delete'));
  //   if (!confirmed) return;
    
  //   try {
  //     await deleteBrand(id);
  //     handleGetAll();
  //   } catch (error) {
  //     console.log("error deleteBrand: ", error);
  //   }
  // };

  // useEffect(() => {
  //   handleGetAll();
  // }, []);

  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Nomi</th>
            <th>Direktor</th>
            <th>Shahar</th>
            <th>Buyurtmalar soni</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td><Link to={'/branch/view/2'}>Novza filyal</Link></td>
            <td>
              Maxmudov Nodir
            </td>
            <td>
              Toshkent
            </td>
            <td>
              67
            </td>
            <td>
              <Link className="btn p-1" to={'/branch/edit/2'}>
                <FontAwesomeIcon icon={faPen}/>
              </Link>
              <button className="btn p-1">
                <FontAwesomeIcon icon={faTrash}/>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default BranchTable;