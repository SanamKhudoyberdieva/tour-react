import { ChangeEvent } from "react";
import { FiltersStateType } from "../../../pages/tour";

const FilterThree = ({
  handleFilterChange,
  filters,
}: {
  handleFilterChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
  filters: FiltersStateType;
}) => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <div className="d-flex flex-column-reverse flex-md-row align-items-lg-center justify-content-lg-between mb-3">
          {/* <div>
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
          </div> */}
          <div>
            <label className="form-label me-4">питание</label>
            <input
              className="form-control"
              value={filters.nutrition_type}
              onChange={handleFilterChange}
              type="text"
            />
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
            {/* <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">нет остановки продажи</label>
            </div> */}
          </div>
          {/* <div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">есть места на рейсы</label>
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
          </div> */}
        </div>
        <div className="d-flex justify-content-end">
          <button className="btn btn-primary">Search</button>
        </div>
      </div>
    </div>
  );
};

export default FilterThree;
