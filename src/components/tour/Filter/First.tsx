import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
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
  fetchData,
  setFilters,
}: {
  handleFilterChange: (
    e:
      | ChangeEvent<HTMLInputElement | HTMLSelectElement>
      | { target: { name: string; value: string | Date | null | boolean } },
  ) => void;
  filters: FiltersStateType;
  handleChildYearChange: (
    e: ChangeEvent<HTMLSelectElement>,
    index: number,
  ) => void;
  fetchData: () => Promise<void>;
  setFilters: Dispatch<SetStateAction<FiltersStateType>>;
}) => {
  const [toursData, setToursData] = useState<TourPaginationType | null>(null);
  const [calendar, setCalendar] = useState<TourCalendarType[] | []>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const uniqueSortedArray = (arr: number[] | undefined): number[] => {
    if (!arr) return [];
    const uniqueArray = Array.from(new Set(arr));
    uniqueArray.sort((a, b) => a - b);
    return uniqueArray;
  };

  const night_count = uniqueSortedArray(
    toursData?.tours.map((x) => x.night_count),
  );

  const handleGetTours = async () => {
    try {
      const res = await getTours();
      setToursData(res.data);
    } catch (error) {
      console.log("error getTours: ", error);
    }
  };

  const handleGetCalendar = async (date: Date) => {
    try {
      const res = await getTourCalendar(date);
      setCalendar(res.data);
    } catch (error) {
      console.log("error getTourCalendar: ", error);
    }
  };

  useEffect(() => {
    handleGetTours();
  }, []);

  return (
    <div className="card mb-4">
      <div className="card-body">
        <div className="row">
          <div className="col-md-4">
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
            <div className="d-flex flex-column">
              <label htmlFor="date-picker" className="form-label">
                вылет от
              </label>
              <DateSelector
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                setCalendar={setCalendar}
                handleGetCalendar={handleGetCalendar}
                handleFilterChange={handleFilterChange}
                calendar={calendar}
              />
            </div>
          </div>
          <div className="col-md-4">
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
          {/* <div className="d-flex flex-column col-3">
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
              {Array.from(
                { length: parseInt(filters.child_count || "0", 10) },
                (_, index) => {
                  const childYears = filters.child_years || [];
                  if (
                    childYears.length < parseInt(filters.child_count || "0", 10)
                  ) {
                    const newApplicants = [...filters.child_years, "0"];
                    setFilters((x) => ({
                      ...x,
                      child_years: newApplicants,
                    }));
                  }
                  return (
                    <div className="ms-2" key={index}>
                      <label className="form-label">{index + 1}</label>
                      <select
                        className="form-select"
                        onChange={(e) => handleChildYearChange(e, index)}
                        value={filters.child_years[index] || ""}
                      >
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                      </select>
                    </div>
                  );
                },
              )}
            </div>
          </div> */}
          <div className="col-md-4 d-flex flex-column justify-content-between">
            <div>
              <label className="form-label me-4">питание</label>
              <input
                className="form-control"
                value={filters.nutrition_type}
                onChange={handleFilterChange}
                type="text"
              />
            </div>
            {/* <div className="form-check me-2">
              <input
                className="form-check-input"
                type="checkbox"
                name="child_with_parent"
                checked={filters.child_with_parent}
                onChange={(e) => {
                  console.log(e.target.checked);
                  handleFilterChange({
                    target: {
                      name: "child_with_parent",
                      value: e.target.checked,
                    },
                  });
                }}
                id="child-seperate-bad"
              />
              <label
                className="form-check-label small"
                htmlFor="child-seperate-bad"
              >
                дети на отдельной кровати
              </label>
            </div> */}
            <div className="d-flex align-items-end justify-content-between">
              <button
                className="btn btn-secondary"
                type="button"
                onClick={() => {
                  setCalendar([]);
                  setSelectedDate(null);
                  setFilters({
                    adults_count: "",
                    child_count: "",
                    child_with_parent: false,
                    date: "",
                    night_count: "",
                    nutrition_type: "",
                    page: 1,
                    page_size: 10,
                    tour_id: "",
                    child_years: [],
                  });
                }}
              >
                Clear
              </button>
              <button className="btn btn-primary" onClick={fetchData}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterOne;
