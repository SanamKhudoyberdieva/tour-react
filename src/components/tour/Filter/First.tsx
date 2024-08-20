import { ChangeEvent, useEffect, useState } from "react";
import { FiltersStateType } from "../../../pages/tour";
import { getTourCalendar, getTours } from "../../../api";
import { TourPaginationType } from "../../../store/types/tour/all";
import { getName } from "../../../utils";
import i18n from "../../../utils/i18n";
import DateSelector from "./Calendar";
import { TourCalendarType } from "../../../store/types/tour/calendar";

const FilterOne = ({
  handleFilterChange,
  filters,
  handleChildYearChange,
  fetchData,
}: {
  handleFilterChange: (
    e:
      | ChangeEvent<HTMLInputElement | HTMLSelectElement>
      | { target: { name: string; value: string | Date | null } }
  ) => void;
  filters: FiltersStateType;
  handleChildYearChange: (
    index: number
  ) => (e: ChangeEvent<HTMLSelectElement>) => void;
  fetchData: () => Promise<void>;
}) => {
  const [toursData, setToursData] = useState<TourPaginationType | null>(null);
  const [calendar, setCalendar] = useState<TourCalendarType[] | []>([]);

  const uniqueSortedArray = (arr: number[] | undefined): number[] => {
    if (!arr) return [];
    const uniqueArray = Array.from(new Set(arr));
    uniqueArray.sort((a, b) => a - b);
    return uniqueArray;
  };

  const night_count = uniqueSortedArray(
    toursData?.tours.map((x) => x.night_count)
  );

  const handleGetTours = async () => {
    try {
      const res = await getTours();
      setToursData(res.data);
    } catch (error) {
      console.log("error getTours: ", error);
    }
  };

  const handleGetCalendar = async () => {
    try {
      const res = await getTourCalendar();
      setCalendar(res.data);
    } catch (error) {
      console.log("error getTourCalendar: ", error);
    }
  };

  useEffect(() => {
    handleGetTours();
    handleGetCalendar();
  }, []);

  return (
    <div className="card mb-4">
      <div className="card-body">
        {/* <div className="d-flex">
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
        </div> */}
        <div className="row">
          <div className="col-3">
            <div className="mb-2">
              <label className="form-label">тур</label>
              <select
                className="form-select"
                onChange={handleFilterChange}
                name="tour_id"
                value={filters.tour_id}
              >
                <option value=""></option>
                {toursData &&
                  toursData.tours.length > 0 &&
                  toursData.tours.map((x) => (
                    <option key={"tour-filter-name-" + x.id} value={x.id}>
                      {getName(x, i18n.language)}
                    </option>
                  ))}
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
              <DateSelector
                handleFilterChange={handleFilterChange}
                calendar={calendar}
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
                {night_count.map((x, idx) => (
                  <option key={"night-count-" + idx} value={x}>
                    {x}
                  </option>
                ))}
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
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>
          <div className="d-flex flex-column col-3">
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
                <option value="3">3</option>
              </select>
            </div>
            <div className="d-flex">
              {parseInt(filters.child_count || "0") >= 1 && (
                <div className="ms-2">
                  <label className="form-label">1</label>
                  <select
                    className="form-select"
                    onChange={handleChildYearChange(0)}
                    value={filters.child_years[0] || ""}
                  >
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
              )}
              {parseInt(filters.child_count || "0") >= 2 && (
                <div className="ms-2">
                  <label className="form-label">2</label>
                  <select
                    className="form-select"
                    onChange={handleChildYearChange(1)}
                    value={filters.child_years[1] || ""}
                  >
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
              )}
              {parseInt(filters.child_count || "0") >= 3 && (
                <div className="ms-2">
                  <label className="form-label">3</label>
                  <select
                    className="form-select"
                    onChange={handleChildYearChange(2)}
                    value={filters.child_years[2] || ""}
                  >
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
              )}
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
          <div className="d-flex align-items-end justify-content-end col-2">
            <button className="btn btn-primary" onClick={fetchData}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterOne;
