import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPen, faPlus, faTrashCan, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "../store";
import { createHotel, deleteHotel, getHotels, updateHotel } from "../api";
import { setHostels } from "../store/slices/hostelSlice";
import { HostelType } from "../store/types";

const Hostel = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [stars, setStars] = useState(0);
  const [name_uz, setName_uz] = useState("");
  const [name_ru, setName_ru] = useState("");
  const [position, setPosition] = useState(0);
  const [address_ru, setAddress_ru] = useState("");
  const [address_uz, setAddress_uz] = useState("");
  const [description_uz, setDescription_uz] = useState("");
  const [description_ru, setDescription_ru] = useState("");
  const [updateId, setUpdateId] = useState<number | null>(null);
  const { hostels } = useSelector((state: RootState) => state.hostelsReducer);

  const handleGetAll = async () => {
    try {
      const res = await getHotels();
      dispatch(setHostels(res.data));
    } catch (error) {
      console.log("error getHotels: ", error);
    }
  };

  const handleCreate = async () => {
    try {
      await createHotel({
        name_uz,
        name_ru,
        description_ru,
        description_uz,
        position,
        address_uz,
        address_ru,
        stars
      });
      handleClearData();
      handleGetAll();
    } catch (error) {
      console.log("error createHotel: ", error);
    }
  };

  const handleUpdate = async (id: number) => {
    try {
      await updateHotel(id, {
        name_uz,
        name_ru,
        description_ru,
        description_uz,
        position,
        address_uz,
        address_ru,
        stars
      });
      setUpdateId(null);
      handleClearData();
      handleGetAll();
    } catch (error) {
      console.log("errr updateHotel: ", error);
    }
  };

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm(t("are-you-sure-you-want-to-delete"));
    if (!confirmed) return;

    try {
      await deleteHotel(id);
      handleGetAll();
    } catch (error) {
      console.log("errr deleteHotel: ", error);
    }
  };

  const handleClearData = () => {
    setName_uz("");
    setName_ru("");
    setDescription_ru(""),
    setDescription_uz(""),
    setAddress_ru("");
    setAddress_uz("");
    setPosition(0);
    setStars(0);
  };

  const selectUpdate = (x: HostelType) => {
    handleClearData();
    setName_uz(x.name_uz);
    setName_ru(x.name_ru);
    setAddress_ru(x.address_ru);
    setAddress_uz(x.address_uz);
    setStars(x.stars);
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
          {t('hotels')}
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
                  <th>Описание</th>
                  <th>Tavsifi</th>
                  <th>Адрес</th>
                  <th>Manzil</th>
                  <th>{t('stars')}</th>
                  <th>{t('position-in-the-list')}</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
              {hostels &&
                hostels.map((x, idx) => (
                <tr key={"hostel-row-id-hostels-table-" + x.id}>
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
                        value={address_ru}
                        onChange={(e) => setAddress_ru(e.target.value)}
                      />
                    ) : (
                      x.address_ru
                    )}
                  </td>
                  <td>
                    {updateId == x.id ? (
                      <input
                        className="form-control"
                        type="text"
                        value={address_uz}
                        onChange={(e) => setAddress_uz(e.target.value)}
                      />
                    ) : (
                      x.address_uz
                    )}
                  </td>
                  <td>
                    {updateId == x.id ? (
                      <input
                        className="form-control"
                        type="number"
                        value={stars}
                        onChange={(e) =>
                          setStars(parseInt(e.target.value))
                        }
                      />
                    ) : (
                      x.stars
                    )}
                  </td>
                  <td>
                    {updateId == x.id ? (
                      <input
                        className="form-control"
                        type="number"
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
                      type="text"
                      value={address_ru}
                      onChange={(e) => setAddress_ru(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      className="form-control"
                      type="text"
                      value={address_uz}
                      onChange={(e) => setAddress_uz(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      className="form-control"
                      type="text"
                      value={stars}
                      onChange={(e) => setStars(parseInt(e.target.value))}
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

export default Hostel;