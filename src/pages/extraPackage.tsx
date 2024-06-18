import { RootState } from "../store";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { AirwayType } from "../store/types";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setExtraPackages } from "../store/slices/extraPackageSlice";
import { faCheck, faPen, faPlus, faTrashCan, faXmark } from "@fortawesome/free-solid-svg-icons";
import { createExtraPackage, deleteExtraPackage, getExtraPackages, updateExtraPackage } from "../api";

const ExtraPackage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [name_uz, setName_uz] = useState("");
  const [name_ru, setName_ru] = useState("");
  const [position, setPosition] = useState(0);
  const [description_uz, setDescription_uz] = useState("");
  const [description_ru, setDescription_ru] = useState("");
  const [updateId, setUpdateId] = useState<number | null>(null);
  const { extraPackages } = useSelector((state: RootState) => state.extraPackagesReducer);

  const handleGetAll = async () => {
    try {
      const res = await getExtraPackages();
      dispatch(setExtraPackages(res.data));
    } catch (error) {
      console.log("error getExtraPackages: ", error);
    }
  };

  const handleCreate = async () => {
    try {
      await createExtraPackage({
        name_uz,
        name_ru,
        description_ru,
        description_uz,
        position: position,
      });
      handleClearData();
      handleGetAll();
    } catch (error) {
      console.log("error createExtraPackage: ", error);
    }
  };

  const handleUpdate = async (id: number) => {
    try {
      await updateExtraPackage(id, {
        name_uz,
        name_ru,
        description_ru,
        description_uz,
        position: position,
      });
      setUpdateId(null);
      handleClearData();
      handleGetAll();
    } catch (error) {
      console.log("errr updateExtraPackage: ", error);
    }
  };

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm(t("are-you-sure-you-want-to-delete"));
    if (!confirmed) return;

    try {
      await deleteExtraPackage(id);
      handleGetAll();
    } catch (error) {
      console.log("errr deleteExtraPackage: ", error);
    }
  };

  const handleClearData = () => {
    setName_uz("");
    setName_ru("");
    setDescription_ru(""),
    setDescription_uz(""),
    setPosition(0);
  };

  const selectUpdate = (x: AirwayType) => {
    handleClearData();
    setName_uz(x.name_uz);
    setName_ru(x.name_ru);
    setDescription_ru(x.description_ru),
    setDescription_uz(x.description_uz),
    setPosition(x.position);
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
          {t('extra-packages')}
        </h4>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="table-responsive mb-4">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Название</th>
                  <th>Nomi</th>
                  <th>Описание</th>
                  <th>Tavsifi</th>
                  <th>{t('position-in-the-list')}</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
              {extraPackages &&
                extraPackages.map((x, idx) => (
                <tr key={"extraPackage-row-id-extraPackages-table-" + x.id}>
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
                      <input
                        className="form-control"
                        type="text"
                        value={description_ru}
                        onChange={(e) => setDescription_ru(e.target.value)}
                      />
                    ) : (
                      x.description_ru
                    )}
                  </td>
                  <td>
                    {updateId == x.id ? (
                      <input
                        className="form-control"
                        type="text"
                        value={description_uz}
                        onChange={(e) => setDescription_uz(e.target.value)}
                      />
                    ) : (
                      x.description_uz
                    )}
                  </td>
                  <td>
                    {updateId == x.id ? (
                      <input
                        className="form-control"
                        type="text"
                        value={position}
                        onChange={(e) =>
                          setPosition(parseInt(e.target.value))
                        }
                      />
                    ) : (
                      x.position
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
                    <input
                      className="form-control"
                      type="text"
                      value={description_ru}
                      onChange={(e) => setDescription_ru(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      className="form-control"
                      type="text"
                      value={description_uz}
                      onChange={(e) => setDescription_uz(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      className="form-control"
                      type="number"
                      value={position}
                      onChange={(e) => setPosition(parseInt(e.target.value))}
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

export default ExtraPackage;