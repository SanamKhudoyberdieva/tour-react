import { ChangeEvent } from "react";
import { FiltersStateType } from "../../../pages/tour";

const FilterOne = ({
  handleFilterChange,
  filters,
}: {
  handleFilterChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  filters: FiltersStateType;
}) => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <div className="d-flex">
          {/* <div className="d-flex flex-column">
            <div>
              <label className="form-label">город отправления</label>
              <select className="form-select" onChange={handleFilterChange}>
                <option value="0"></option>
                <option value="1">Tashkent</option>
              </select>
            </div>
            <div>
              <label className="form-label">страна</label>
              <select className="form-select" onChange={handleFilterChange}>
                <option value="0"></option>
                <option value="1">Uzbekistan</option>
                <option value="2">India</option>
              </select>
            </div>
          </div> */}

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
        <div className="row">
          <div className="col-3">
            <div className="mb-2">
              <label className="form-label">тур</label>
              <select className="form-select" onChange={handleFilterChange}>
                <option value="0"></option>
                <option value="1">Tashkent - Azarbajon</option>
                <option value="2">Dubai - Toshkent</option>
              </select>
            </div>
            <div>
              <label className="form-label">вылет от</label>
              <input
                type="date"
                className="form-control"
                value={filters.date}
                name="date"
                onChange={handleFilterChange}
              />
            </div>
          </div>
          <div className="col-2">
            <div className="mb-2">
              <label className="form-label">ночей</label>
              <select
                className="form-select"
                onChange={handleFilterChange}
                value={filters.night_count}
                name="night_count"
              >
                <option value="0"></option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div>
              <label className="form-label">взрослых</label>
              <select
                className="form-select"
                onChange={handleFilterChange}
                value={filters.adults_count}
                name="adults_count"
              >
                <option value="0"></option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
          </div>
          <div className="d-flex flex-column col-2">
            <div className="mb-2">
              <label className="form-label">детей/возраст</label>
              <select
                className="form-select"
                onChange={handleFilterChange}
                value={filters.child_count}
                name="child_count"
              >
                <option value="0"></option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div className="d-flex">
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
          <div className="col-2 d-flex flex-column justify-content-between">
            <div>
              <label className="form-label me-4">питание</label>
              <input
                className="form-control"
                value={filters.nutrition_type}
                onChange={handleFilterChange}
                type="text"
              />
            </div>
            <div className="form-check me-2">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label small">
                дети на отдельной кровати
              </label>
            </div>
          </div>
          <div className="d-flex align-items-end justify-content-end col-3">
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterOne;
