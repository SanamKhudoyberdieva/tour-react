import { RootState } from "../store";
import { Link } from "react-router-dom";
import { CityType } from "../store/types";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { setCities } from "../store/slices/citySlice";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createCity, deleteCity, getCities, updateCity } from "../api";
import { faCheck, faPen, faPlus, faTrashCan, faXmark } from "@fortawesome/free-solid-svg-icons";

const City = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [name_uz, setName_uz] = useState("");
  const [name_ru, setName_ru] = useState("");
  const [updateId, setUpdateId] = useState<number | null>(null);
  const { cities } = useSelector((state: RootState) => state.citiesReducer);

  const handleGetAll = async () => {
    try {
      const res = await getCities();
      dispatch(setCities(res.data));
    } catch (error) {
      console.log("error getCities: ", error);
    }
  };

  const handleCreate = async () => {
    try {
      await createCity({
        name_uz,
        name_ru,
      });
      handleClearData();
      handleGetAll();
    } catch (error) {
      console.log("error createCity: ", error);
    }
  };

  const handleUpdate = async (id: number) => {
    try {
      await updateCity(id, {
        name_uz,
        name_ru,
      });
      setUpdateId(null);
      handleClearData();
      handleGetAll();
    } catch (error) {
      console.log("error updateCity: ", error);
    }
  };

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm(t("are-you-sure-you-want-to-delete"));
    if (!confirmed) return;

    try {
      await deleteCity(id);
      handleGetAll();
    } catch (error) {
      console.log("error deleteCity: ", error);
    }
  };

  const handleClearData = () => {
    setName_uz("");
    setName_ru("");
  };

  const selectUpdate = (x: CityType) => {
    handleClearData();
    setName_uz(x.name_uz);
    setName_ru(x.name_ru);
    setUpdateId(x.id);
  };

  useEffect(() => {
    handleGetAll();
  }, []);

  return (
    <div>
      <div
        className="d-flex mb-4 align-items-center justify-content-between">
        <h4 className="py-3 mb-0">
          <span className="text-muted fw-light"
            ><Link to={'/'}>{t('home')}</Link> / </span>
          {t('cities')}
        </h4>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Название</th>
                  <th>Nomi</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
              {cities &&
                cities.map((x, idx) => (
                <tr key={"city-row-id-cities-table-" + x.id}>
                  <td>{idx + 1}</td>
                  <td>
                    {updateId == x.id ? (
                      <input
                        className="form-control"
                        type="text"
                        value={name_ru}
                        onChange={(e) => setName_ru(e.target.value)}
                      />
                    ) : (
                      x.name_ru
                    )}
                  </td>
                  <td>
                    {updateId == x.id ? (
                      <input
                        className="form-control"
                        type="text"
                        value={name_uz}
                        onChange={(e) => setName_uz(e.target.value)}
                      />
                    ) : (
                      x.name_uz
                    )}
                  </td>
                  <td>
                    {updateId == x.id ? (
                      <>
                        <button
                          className="btn btn-icon btn-success"
                          onClick={() => handleUpdate(x.id)}
                        >
                          <FontAwesomeIcon icon={faCheck} />
                        </button>
                        <button
                          className="btn btn-icon btn-warning"
                          onClick={() => {
                            setUpdateId(null);
                            handleClearData();
                          }}
                        >
                          <FontAwesomeIcon icon={faXmark} />
                        </button>
                      </>
                    ) : (
                      <button
                        className="btn btn-icon btn-success"
                        onClick={() => selectUpdate(x)}
                      >
                        <FontAwesomeIcon icon={faPen} />
                      </button>
                    )}
                    <button
                      className="btn btn-icon btn-danger"
                      onClick={() => handleDelete(x.id)}
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                  </td>
                </tr>
              ))}
              {!updateId && (
                <tr>
                  <td></td>
                  <td>
                    <input
                      className="form-control"
                      type="text"
                      value={name_ru}
                      onChange={(e) => setName_ru(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      className="form-control"
                      type="text"
                      value={name_uz}
                      onChange={(e) => setName_uz(e.target.value)}
                    />
                  </td>
                  <td>
                    <button
                      type="submit"
                      className="btn btn-icon btn-success"
                      onClick={handleCreate}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </td>
                </tr>
              )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default City;