import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination";
import TourTable from "../../components/tour/TourTable";

const Index = () => {
  return (
    <>
      <div
        className="d-flex mb-4 align-items-center justify-content-between"
      >
        <h4 className="py-3 mb-0">
          <span className="text-muted fw-light">
            <Link to={'/'}>Asosiy</Link> / {' '}
          </span>
          Tur Paketlar
        </h4>
        <Link className="btn btn-success" to={'/tour/create'}
          >Yaratish
        </Link>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <div
            className="d-flex flex-column-reverse flex-md-row  justify-content-between mb-3"
          >
            <div className="d-flex flex-column">
              <div>
                <label className="form-label"
                  >город отправления
                </label>
                <select className="form-select">
                  <option value="0"></option>
                  <option value="1">Tashkent</option>
                </select>
              </div>
              <div>
                <label  className="form-label">
                  страна
                </label>
                <select className="form-select">
                  <option value="0"></option>
                  <option value="1">Uzbekistan</option>
                  <option value="2">India</option>
                </select>
              </div>
            </div>
            <div className="d-flex">
              <div>
                <label className="form-label">тур</label>
                <select className="form-select">
                  <option value="0"></option>
                  <option value="1">Tashkent - Azarbajon</option>
                  <option value="2">Dubai - Toshkent</option>
                </select>
              </div>
            </div>
            <div>
              <h6 className="card-title">Tur ichida:</h6>
              <ul>
                <li>Aviabilet (Toshkent-Dubai)</li>
                <li>Aviabilet (Toshkent-Dubai)</li>
                <li>Hotel</li>
                <li>Transfer from airport to hotel</li>
              </ul>
            </div>
            <div>
              <h6 className="card-title">Qo'shimcha to'lov:</h6>
              <ul>
                <li>Aviabilet (Toshkent-Dubai)</li>
                <li>Aviabilet (Toshkent-Dubai)</li>
                <li>Hotel</li>
                <li>Transfer from airport to hotel</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-4">
        <div className="card-body">
          <div
            className="d-flex flex-column-reverse flex-md-row  justify-content-between mb-3"
          >
          <div className="d-flex flex-column">
            <div>
              <label className="form-label">вылет от</label>
              <input
                type="date"
                className="form-control"
              />
            </div>
            <div>
              <label className="form-label">до</label>
              <input
                type="date"
                className="form-control"
              />
            </div>
          </div>
          <div className="d-flex flex-column">
            <div>
              <label className="form-label">ночей от</label>
              <select className="form-select">
                <option value="0"></option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div>
              <label className="form-label">до</label>
              <select className="form-select">
                <option value="0"></option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
          </div>
          <div className="d-flex flex-column">
            <div>
              <label className="form-label">взрослых</label>
              <select className="form-select">
                <option value="0"></option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div className="d-flex">
              <div>
                <label className="form-label">детей/возраст</label>
                <select className="form-select">
                  <option value="0"></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <div className="ms-2">
                <label className="form-label">1</label>
                <select className="form-select">
                  <option value="0"></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <div className="ms-2">
                <label className="form-label">2</label>
                <select className="form-select">
                  <option value="0"></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <div className="ms-2">
                <label className="form-label">3</label>
                <select className="form-select">
                  <option value="0"></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
            </div>
          </div>
          <div className="d-flex">
            <div>
              <label className="form-label">цена</label>
              <select className="form-select">
                <option value="0"></option>
                <option value="1">EUR</option>
                <option value="2">RUB</option>
              </select>
            </div>
          </div>
          <div className="d-flex flex-column">
            <div>
              <label className="form-label">от</label>
              <input
                type="text"
                className="form-control"
              />
            </div>
            <div>
              <label className="form-label">до</label>
              <input
                type="text"
                className="form-control"
              />
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="card mb-4">
        <div className="card-body">
          <div className="d-flex flex-column-reverse flex-md-row align-items-lg-center justify-content-lg-between mb-3">
            <div>
              <div className="d-flex justify-content-between mb-2">
                <label className="form-label me-4">город</label>
                <div className="form-check">
                  <label className="form-check-label">
                    любое
                  </label>
                  <input className="form-check-input" type="checkbox" />
                </div>
              </div>
              <div className="dt-filter-wrp">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">
                    Toshkent
                  </label>
                </div>
              </div>
            </div>
            <div>
              <div className="d-flex justify-content-between mb-2">
                <label className="form-label me-4"
                >категория</label>
                <div className="form-check">
                  <label className="form-check-label">
                    любое
                  </label>
                  <input className="form-check-input" type="checkbox" />
                </div>
              </div>
              <div className="dt-filter-wrp">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">
                    3
                  </label>
                </div>
                <hr />
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">
                    Active
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">
                    Family
                  </label>
                </div>
              </div>
            </div>
            <div>
              <div className="d-flex justify-content-between mb-2 align-items-center">
                <label className="form-label me-4"
                >гостиница</label>
                <input type="search" className="form-control me-4 d-sm-none d-md-block" placeholder="" aria-controls="DataTables_Table_1" />
                <div className="form-check me-4">
                  <label className="form-check-label">
                    выбранные
                  </label>
                  <input className="form-check-input" type="checkbox" />
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    любое
                  </label>
                  <input className="form-check-input" type="checkbox" />
                </div>
              </div>
              <div className="dt-filter-wrp">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">
                    AGNES HOTEL 3*
                  </label>
                </div>
              </div>
            </div>
            <div>
              <div className="d-flex justify-content-between mb-2">
                <label className="form-label me-4"
                >питание</label>
                <div className="form-check">
                  <label className="form-check-label">
                    любое
                  </label>
                  <input className="form-check-input" type="checkbox" />
                </div>
              </div>
              <div className="dt-filter-wrp">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">
                    AI
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column-reverse flex-md-row align-items-lg-center justify-content-lg-between mb-3">
            <div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">
                  дети на отдельной кровати
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">
                  нет остановки продажи
                </label>
              </div>
            </div>
            <div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">
                  есть места на рейсы
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">
                  мгновенное подтверждение
                </label>
              </div>
            </div>
            <div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">
                  места повышенной комфортности
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">
                  группировать по гостинице
                </label>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div
            className="d-flex flex-column-reverse flex-md-row align-items-center justify-content-between mb-3"
          >
            <div className="d-flex align-items-center">
              <label
                className="form-label text-nowrap mb-0 me-2"
                >Размер стр:</label>
                <select id="page-size-label" className="form-select">
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
                <option value="40">40</option>
                <option value="50">50</option>
                <option value="60">60</option>
                <option value="70">70</option>
                <option value="80">80</option>
                <option value="90">90</option>
                <option value="100">100</option>
              </select>
            </div>
          </div>
          <TourTable />
          <Pagination />
        </div>
      </div>
    </>
  )
}

export default Index;