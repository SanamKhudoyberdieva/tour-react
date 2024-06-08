import { faPen, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const TourOrder = () => {
  return (
    <div>
      <div
        className="d-flex mb-4 align-items-center justify-content-between"
      >
        <h4 className="py-3 mb-0">
          <span className="text-muted fw-light"
            ><Link to={'/'}>Asosiy</Link> /</span>
          <span className="text-muted fw-light"
            ><Link to={'/tour'}>Turlar</Link> /</span>
          Tur 1
        </h4>
        <Link className="btn btn-info" to={'/tour'}>Orqaga</Link>
      </div>
      <div className="card mb-3">
        <div className="card-body">
          <div className="table-responsive mb-4">
            <h6>Тур</h6>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Описание тура</th>
                  <th>СПО</th>
                  <th>Страна</th>
                  <th>Продолжительность</th>
                  <th>ночей</th>
                  <th>Примечание</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Вьетнам: Нячанг из Ташкента</td>
                  <td>TAS-38529-CXR</td>
                  <td>Вьетнам</td>
                  <td>05.06.2024—12.06.2024</td>
                  <td>7</td>
                  <td>CROWN HOTEL NHA TRANG - Special offer</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-body">
          <div className="table-responsive mb-4">
            <h6>Проживание</h6>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Гостиница</th>
                  <th>Город</th>
                  <th>Номер</th>
                  <th>Размещение</th>
                  <th>Питание</th>
                  <th>Период проживания</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><Link to={'/'}>CROWN HOTEL NHA TRANG 3*</Link></td>
                  <td>Нячанг</td>
                  <td>Superior City View With Balcony</td>
                  <td>2Adl</td>
                  <td>BB</td>
                  <td>05.06.2024—12.06.2024</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-body">
          <div className="table-responsive mb-4">
            <h6>Транспорт</h6>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Reys</th>
                  <th>date</th>
                  <th>quantity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Reys nomi
                  </td>
                  <td>05.06.2024</td>
                  <td>2</td>
                </tr>
              </tbody>
            </table>
            <div>
              <div>Багаж: <span>20 КГ</span></div>
              <div>Ручная кладь: <span>8 КГ</span></div>
              <div>Bagaj: <span>20kg</span></div>
            </div>
            <hr />
            <table className="table table-striped table-hover">
              <tbody>
                <tr>
                  <td>
                    Reys nomi
                  </td>
                  <td>05.06.2024</td>
                  <td>2</td>
                </tr>
              </tbody>
            </table>
            <div>
              <div>Багаж: <span>20 КГ</span></div>
              <div>Ручная кладь: <span>8 КГ</span></div>
              <div>Bagaj: <span>20kg</span></div>
            </div>
          </div>
        </div>
      </div>
      <h6>Информация о туристе 1</h6>
      <div className="card mb-3">
        <div className="card-body">
          <div className="row">
            <div className="col-md-4 mb-3">
              <label className="form-label" 
                >MR/MRS/CHD/INF</label>
              <select className="form-select">
                <option value="1">MR</option>
                <option value="2">MRS</option>
                <option value="3">CHD</option>
              </select>
            </div>
            <div className="col-md-4 col-6 mb-3">
              <label className="form-label">Фамилия по-латински</label>
              <input
                type="text"
                className="form-control"
              />
            </div>
            <div className="col-md-4 col-6 mb-3">
              <label className="form-label"
                >Имя по-латински</label>
                <input
                type="text"
                className="form-control"
              />
            </div>
            <div className="col-md-4 col-6 mb-3">
              <label className="form-label"
                >Дата рождения</label>
                <input
                type="date"
                className="form-control"
              />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label" 
                >Гражданство</label>
              <select className="form-select">
                <option value="1">Uzbekistan</option>
                <option value="2">India</option>
                <option value="3">Dubai</option>
              </select>
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label" 
                >заграничный паспорт</label>
              <select className="form-select">
                <option value="1"></option>
                <option value="1"></option>
                <option value="1"></option>
              </select>
            </div>
            <div className="col-md-4 col-6 mb-3">
              <label className="form-label"
                >серия загранпаспортов</label>
                <input
                type="text"
                className="form-control"
              />
            </div>
            <div className="col-md-4 col-6 mb-3">
              <label className="form-label"
                >Действителен до</label>
                <input
                type="date"
                className="form-control"
              />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label" 
                >виза</label>
              <select className="form-select">
                <option value="1"></option>
                <option value="1"></option>
                <option value="1"></option>
              </select>
            </div>
            <div className="col-md-4 mb-3">
              <div className="d-flex">
                <div className="form-check">
                  <input
                    name="default-radio-1"
                    className="form-check-input"
                    type="radio"
                    id="defaultRadio2"
                    checked={true}
                  />
                  <label
                    className="form-check-label me-4"
                  >
                    Муж.
                  </label>
                </div>
                <div className="form-check">
                  <input
                    name="default-radio-1"
                    className="form-check-input"
                    type="radio"
                    id="defaultRadio2"
                    checked={true}
                  />
                  <label
                    className="form-check-label"
                  >
                    Жен.
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h6>Информация о туристе 2</h6>
      <div className="card mb-3">
        <div className="card-body">
          <div className="row">
            <div className="col-md-4 mb-3">
              <label className="form-label" 
                >MR/MRS/CHD/INF</label>
              <select className="form-select">
                <option value="1">MR</option>
                <option value="1">MRS</option>
                <option value="1">CHD</option>
              </select>
            </div>
            <div className="col-md-4 col-6 mb-3">
              <label className="form-label"
                >Фамилия по-латински</label>
                <input
                type="text"
                className="form-control"
              />
            </div>
            <div className="col-md-4 col-6 mb-3">
              <label className="form-label"
                >Имя по-латински</label>
                <input
                type="text"
                className="form-control"
              />
            </div>
            <div className="col-md-4 col-6 mb-3">
              <label className="form-label"
                >Отчество по-латински</label>
                <input
                type="text"
                className="form-control"
              />
            </div>
            <div className="col-md-4 col-6 mb-3">
              <label className="form-label"
                >Дата рождения</label>
                <input
                type="date"
                className="form-control"
              />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label" 
                >Страна рождения</label>
              <select className="form-select">
                <option value="1">Uzbekistan</option>
                <option value="1">India</option>
                <option value="1">Dubai</option>
              </select>
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label" 
                >Гражданство</label>
              <select className="form-select">
                <option value="1">Uzbekistan</option>
                <option value="1">India</option>
                <option value="1">Dubai</option>
              </select>
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label" 
                >Тип документа</label>
              <select className="form-select">
                <option value="1">Uzbekistan</option>
                <option value="1">India</option>
                <option value="1">Dubai</option>
              </select>
            </div>
            <div className="col-md-4 col-6 mb-3">
              <label className="form-label"
                >Серия документа</label>
                <input
                type="text"
                className="form-control"
              />
            </div>
            <div className="col-md-4 col-6 mb-3">
              <label className="form-label"
                >Номер документа</label>
                <input
                type="text"
                className="form-control"
              />
            </div>
            <div className="col-md-4 col-6 mb-3">
              <label className="form-label"
                >Действителен до</label>
                <input
                type="date"
                className="form-control"
              />
            </div>
            <div className="col-md-4 col-6 mb-3">
              <label className="form-label"
                >Документ выдан</label>
                <input
                type="date"
                className="form-control"
              />
            </div>
            <div className="col-md-4 mb-3">
              <div className="d-flex">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    checked={true}
                  />
                  <label
                    className="form-check-label me-4"
                  >
                    Муж.
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    checked={true}
                  />
                  <label
                    className="form-check-label"
                  >
                    Жен.
                  </label>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-check">
                <label className="form-check-label">
                  с родителем
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form-check mb-4">
        <label className="form-check-label">
          младенец
        </label>
        <input
          className="form-check-input"
          type="checkbox"
        />
      </div>

      <h6>Примечание к заявке</h6>
      <div className="card mb-3">
        <div className="card-body">
          <div className="row">
            <div className="col-md-3 mb-3">
              <div className="form-check">
                <label className="form-check-label">
                  вместе с заявкой №
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                />
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="form-check">
                <label className="form-check-label">
                  молодожены
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                />
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="form-check">
                <label className="form-check-label">
                  вид на море
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                />
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="form-check">
                <label className="form-check-label">
                  тихое место
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                />
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="form-check">
                <label className="form-check-label">
                  постоянный гость отеля
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                />
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="form-check">
                <label className="form-check-label">
                  люлька для младенца в номер
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                />
              </div>
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <h6>ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ</h6>
      <div className="card mb-4">
        <div className="card-body">
          <div className="table-responsive mb-4">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>дополнительные услуги</th>
                  <th>от</th>
                  <th>до</th>
                  <th>количество</th>
                  <th>Цена</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    виза
                  </td>
                  <td>04.06.2024</td>
                  <td>04.06.2024</td>
                  <td>1</td>
                  <td>$200</td>
                  <td>
                    <button className="btn btn-icon btn-success">
                      <FontAwesomeIcon icon={faPen}/>
                    </button>
                    <button className="btn btn-icon btn-danger">
                      <FontAwesomeIcon icon={faTrash}/>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <input
                      className="form-control"
                      type="text" />
                  </td> 
                  <td>
                    <input
                      className="form-control"
                      type="text"  />
                  </td>
                  <td>
                    <input
                      className="form-control"
                      type="text"  />
                  </td>
                  <td>
                    <input
                      className="form-control"
                      type="text"  />
                  </td>
                  <td>
                    <input
                      className="form-control"
                      type="text"  />
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
      <div className="row">
        <div className="col-md-5">
          <div className="card">
            <div className="card-body">
              <div className="dt-total-price">1099.13 USD</div>
              <div className="d-flex justify-content-around">
                <button className="btn btn-primary">Пересчитать</button>
                <button className="btn btn-primary" disabled>
                  Бронировать
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TourOrder;