import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

const Create = () => {
  return (
    <>
      <div
        className="d-flex mb-4 align-items-center justify-content-between"
      >
        <h4 className="py-3 mb-0">
          <span className="text-muted fw-light"
            ><Link to={'/'}>Asosiy</Link> /</span>
          <span className="text-muted fw-light"
            ><Link to={'/tour'}>Tur Paketlar</Link> /</span>
          Yaratish
        </h4>
        <Link className="btn btn-info" to={'/tour'}>Orqaga</Link>
      </div>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-md-3 col-6 mb-3">
              <label className="form-label" >тур</label>
              <input
                type="text"
                className="form-control"
              />
            </div>
            <div className="col-md-3 col-6 mb-3">
              <label className="form-label" 
                >ночей</label>
              <input
                type="number"
                className="form-control"
              />
            </div>
            <div className="col-md-3 col-6 mb-3">
              <label className="form-label">вылет от</label>
              <input
                type="datetime-local"
                className="form-control"
              />
            </div>
            <div className="col-md-3 col-6 mb-3">
              <label className="form-label">до</label>
              <input
                type="datetime-local"
                className="form-control"
              />
            </div>
            <div className="col-md-4 col-6 mb-3">
              <label className="form-label" 
                >город отправления</label>
                <input
                type="text"
                className="form-control"
              />
            </div>
            <div className="col-md-4 col-6 mb-3">
              <label className="form-label">
                город
              </label>
              <select className="form-select">
                <option value="1">O'zbekistom</option>
                <option value="1">Turkiya</option>
              </select>
            </div>
            <div className="col-md-4 col-6 mb-3">
              <label className="form-label" 
                >страна</label>
                <select className="form-select">
                <option value="1">Toskent</option>
                <option value="1">Istanbul</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-md-4 col-6 mb-3">
              <label className="form-label" 
                >дыхательные пути</label>
              <select className="form-select">
                <option value="option1">Gulbahor Airways</option>
                <option value="option2">O'zb Airways</option>
                <option value="option3">Semurg' Airways</option>
              </select>
            </div>
            <div className="col-md-4 col-6 mb-3">
              <label className="form-label" 
                >билет</label>
              <input
                type="number"
                className="form-control"
              />
            </div>
            <div className="col-md-4 col-6 mb-3">
              <label className="form-label" 
                >СТАТУС ТРАНСПОРТ</label>
              <input
                type="text"
                className="form-control"
              />
            </div>
            <div className="col-md-3 col-6 mb-3">
              <label className="form-label" 
                > город отправлени</label>
                <input
                type="text"
                className="form-control"
              />
            </div>
            <div className="col-md-3 col-6 mb-3">
              <label className="form-label">город</label>
              <select className="form-select">
                <option value="1">O'zbekistom</option>
                <option value="1">Dubai</option>
                <option value="1">Turkiya</option>
              </select>
            </div>
            <div className="col-md-3 col-6 mb-3">
              <label className="form-label">от</label>
              <input
                type="datetime-local"
                className="form-control"
              />
            </div>
            <div className="col-md-3 col-6 mb-3">
              <label className="form-label">до</label>
              <input
                type="datetime-local"
                className="form-control"
              />
            </div>
            <hr />
            <div className="col-md-4 col-6 mb-3">
              <label className="form-label" 
                >дыхательные пути</label>
              <select className="form-select">
                <option value="option1">Gulbahor Airways</option>
                <option value="option2">O'zb Airways</option>
                <option value="option3">Semurg' Airways</option>
              </select>
            </div>
            <div className="col-md-4 col-6 mb-3">
              <label className="form-label" 
                >билет</label>
              <input
                type="number"
                className="form-control"
              />
            </div>
            <div className="col-md-4 col-6 mb-3">
              <label className="form-label" 
                >СТАТУС ТРАНСПОРТ</label>
              <input
                type="text"
                className="form-control"
              />
            </div>
            <div className="col-md-3 col-6 mb-3">
              <label className="form-label" 
                >город отправления</label>
              <input
                type="text"
                className="form-control"
              />
            </div>
            <div className="col-md-3 col-6 mb-3">
              <label className="form-label" 
                >город</label>
              <select className="form-select">
                <option value="1">O'zbekistom</option>
                <option value="2">Dubai</option>
                <option value="3">Turkiya</option>
              </select>
            </div>
            <div className="col-md-3 col-6 mb-3">
              <label className="form-label">от</label>
              <input
                type="datetime-local"
                className="form-control"
              />
            </div>
            <div className="col-md-3 col-6 mb-3">
              <label className="form-label">до</label>
              <input
                type="datetime-local"
                className="form-control"
              />
            </div>
          </div>
          <div>
            <button className="btn btn-success">добавлять</button>
          </div>
        </div>
      </div>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-md-3 col-6 mb-3">
              <div className="form-group">
                <label className="form-label" >гостиница</label>
                <select className="form-select">
                  <option value="option1">Hilton</option>
                  <option value="option2">Wyndham</option>
                  <option value="option3">City Palace</option>
                </select>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-3">
              <label className="form-label" 
                >питание</label>
              <div className="d-flex">
                <select className="form-select me-2">
                  <option value="1">BB</option>
                  <option value="1">PP</option>
                </select>
                <input
                  type="number"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-3 col-6 mb-3">
              <label className="form-label">от</label>
              <input
                type="datetime-local"
                className="form-control"
              />
            </div>
            <div className="col-md-3 col-6 mb-3">
              <label className="form-label">до</label>
              <input
                type="datetime-local"
                className="form-control"
              />
            </div>
            <div className="col-md-3 col-6 mb-3">
              <label className="form-label">2Adl Количество</label>
              <input
                type="number"
                className="form-control"
              />
              <label className="form-label">2Adl цена</label>
              <input
                type="number"
                className="form-control"
              />
            </div>
            <div className="col-md-3 col-6 mb-3">
              <label className="form-label">3Adl Количество</label>
              <input
                type="number"
                className="form-control"
              />
              <label className="form-label">3Adl цена</label>
              <input
                type="number"
                className="form-control"
              />
            </div>
            <div className="col-md-3 col-6 mb-3">
              <label className="form-label">4Adl (Мужчины) Количество</label>
              <input
                type="number"
                className="form-control"
              />
              <label className="form-label">4Adl (Мужчины) цена</label>
              <input
                type="number"
                className="form-control"
              />
            </div>
            <div className="col-md-3 col-6 mb-3">
              <label className="form-label">4Adl (женщины) Количество</label>
              <input
                type="number"
                className="form-control"
              />
              <label className="form-label">4Adl (женщины) цена</label>
              <input
                type="number"
                className="form-control"
              />
            </div>
            <hr />
            <div className="col-md-3 col-6 mb-3">
              <div className="form-group">
                <label className="form-label">гостиница</label>
                <select className="form-select">
                  <option value="option1">Hilton</option>
                  <option value="option2">Wyndham</option>
                  <option value="option3">City Palace</option>
                </select>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-3">
              <label className="form-label" 
                >питание</label>
              <select className="form-select">
                <option value="1">BB</option>
                <option value="1">PP</option>
              </select>
            </div>
            <div className="col-md-3 col-6 mb-3">
              <label className="form-label">от</label>
              <input
                type="datetime-local"
                className="form-control"
              />
            </div>
            <div className="col-md-3 col-6 mb-3">
              <label className="form-label">до</label>
              <input
                type="datetime-local"
                className="form-control"
              />
            </div>
            <div className="col-md-3 col-6 mb-3">
              <label className="form-label" 
                >2Adl Количество</label>
                <input
                type="number"
                className="form-control"
              />
              <label className="form-label" 
                >2Adl цена</label>
                <input
                type="number"
                className="form-control"
              />
            </div>
            <div className="col-md-3 col-6 mb-3">
              <label className="form-label" 
                >3Adl Количество</label>
                <input
                type="number"
                className="form-control"
              />
              <label className="form-label" 
                >3Adl цена</label>
                <input
                type="number"
                className="form-control"
              />
            </div>
            <div className="col-md-3 col-6 mb-3">
              <label className="form-label" 
                >4Adl (Мужчины) Количество</label>
                <input
                type="number"
                className="form-control"
              />
              <label className="form-label" 
                >4Adl (Мужчины) цена</label>
                <input
                type="number"
                className="form-control"
              />
            </div>
            <div className="col-md-3 col-6 mb-3">
              <label className="form-label" 
                >4Adl (женщины) Количество</label>
                <input
                type="number"
                className="form-control"
              />
              <label className="form-label" 
                >4Adl (женщины) цена</label>
                <input
                type="number"
                className="form-control"
              />
            </div>
          </div>
          <div>
            <button className="btn btn-success">добавлять</button>
          </div>
        </div>
      </div>
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
      <div className="card mb-4">
        <div className="card-body">
          <div className="table-responsive mb-4">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Дополнительные услуги</th>
                  <th>от</th>
                  <th>до</th>
                  <th>количество</th>
                  <th>цена</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Страхование</td>
                  <td>04.06.2024</td>
                  <td>04.06.2024</td>
                  <td>2</td>
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
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="mb-3">
              <label className="form-label" 
                >ОПИСАНИЕ</label>
              <textarea
                className="form-control"
              ></textarea>
            </div>
            <div className="col-md-4 d-flex align-items-center mb-3">
              <input
                className="form-check"
                type="checkbox"
              /><label
                className="form-label mb-0 ms-2"
                >дети на отдельной кровати</label>
            </div>
            <div className="col-md-4 d-flex align-items-center mb-3">
              <input
                className="form-check"
                type="checkbox"
              /><label
                className="form-label mb-0 ms-2"
                >нет остановки продажи</label>
            </div>
            <div className="col-md-4 d-flex align-items-center mb-3">
              <input
                className="form-check"
                type="checkbox"
              /><label
                className="form-label mb-0 ms-2"
                >есть места на рейсы</label>
            </div>
            <div className="col-md-4 d-flex align-items-center mb-3">
              <input
                className="form-check"
                type="checkbox"
              /><label
                className="form-label mb-0 ms-2"
                >мгновенное подтверждение</label>
            </div>
            <div className="col-md-4 d-flex align-items-center mb-3">
              <input
                className="form-check"
                type="checkbox"
              /><label
                className="form-label mb-0 ms-2"
                >места повышенной комфортности</label>
            </div>
            <div className="col-md-4 d-flex align-items-center mb-3">
              <input
                className="form-check"
                type="checkbox"
              /><label
                className="form-label mb-0 ms-2"
                >инвалидная коляска</label>
            </div>
            <div>
              <button type="submit" className="btn btn-success">
                Saqlash
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Create;