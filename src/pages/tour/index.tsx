import api from "../../api/api";
import { useTranslation } from "react-i18next";
import Pagination from "../../components/Pagination";
import TourTable from "../../components/tour/TourTable";
import { ChangeEvent, useEffect, useState } from "react";
import FilterOne from "../../components/tour/Filter/First";
import { TourRoomType } from "../../store/types/tour/tourRoom";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { parseQuery, stringifyQuery } from "../../utils/queryUtils";

export interface FiltersStateType {
  adults_count: string;
  child_count?: string;
  child_with_parent?: false;
  date?: string;
  night_count?: string;
  nutrition_type?: string;
  page?: number;
  page_size?: number;
  tour_id?: string;
  child_years: string[];
  [key: string]:
    | string
    | number
    | undefined
    | string[]
    | []
    | Date
    | null
    | boolean;
}

const Index = () => {
  const { t } = useTranslation();
  const [data, setData] = useState<TourRoomType | null>(null);

  const navigate = useNavigate();
  const location = useLocation();

  const initialFilters: FiltersStateType = {
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
  };

  const [filters, setFilters] = useState<FiltersStateType>(initialFilters);

  useEffect(() => {
    // Parse URL query params and set filters
    const queryFilters = parseQuery(location.search);
    setFilters((prevFilters) => ({ ...prevFilters, ...queryFilters }));
  }, [location.search]);

  const cleanFilters = (
    filters: FiltersStateType,
  ): Record<string, string | number | undefined> => {
    const cleanedFilters: Record<string, string | number | undefined> = {};
    for (const key in filters) {
      if (key === "child_years") continue;
      if (filters[key] !== undefined && filters[key] !== "") {
        if (Array.isArray(filters[key])) {
          const filteredArray = (filters[key] as string[]).filter(
            (item) => item !== "",
          );
          cleanedFilters[key] = filteredArray.join(",");
        } else {
          cleanedFilters[key] = filters[key] as string | number | undefined;
        }
      }
    }
    return cleanedFilters;
  };

  const handleFilterChange = (
    e:
      | ChangeEvent<HTMLInputElement | HTMLSelectElement>
      | { target: { name: string; value: string | Date | null | boolean } },
  ) => {
    if (!e) return;
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    if (name === "child_count" && typeof value == "string") {
      // Update child_years array based on the new child_count value
      const childCount = parseInt(value, 10);
      newFilters.child_years = Array(childCount).fill("0");
    }

    setFilters(newFilters);
    const queryString = stringifyQuery(cleanFilters(newFilters));
    navigate(`?${queryString}`);
  };

  const handlePageChange = (selectedItem: { selected: number }) => {
    const newFilters = { ...filters, page: selectedItem.selected };
    setFilters(newFilters);
    const queryString = stringifyQuery(cleanFilters(newFilters));
    navigate(`?${queryString}`);
  };

  const handleChildYearChange = (
    e: ChangeEvent<HTMLSelectElement>,
    index: number,
  ) => {
    const newFilters = filters.child_years.map((x, idx) => {
      if (index == idx) return e.target.value;
      return x;
    });
    setFilters((x) => ({
      ...x,
      child_years: newFilters,
    }));
  };

  // Send request when filters change
  const fetchData = async () => {
    try {
      const queryString = stringifyQuery(cleanFilters(filters));
      if (!filters.adults_count || !filters.night_count) {
        setData(null);

        return;
        // const response = await api.get(`/api/tour/room`);
        // const data = await response.data;
        // setData(data);
      }
      const response = await api.get(`/api/tour/room?${queryString}`);
      const data = await response.data;
      setData(data);
    } catch (error) {
      setData(null);
      console.log("error getting Tours: ", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [filters]);

  return (
    <>
      <div className="d-flex mb-4 align-items-center justify-content-between">
        <h4 className="py-3 mb-0">
          <span className="text-muted fw-light">
            <Link to={"/"}>{t('home')}</Link> /{" "}
          </span>
          {t('tour-packages')}
        </h4>
        <Link className="btn btn-success" to={"/tour/create"}>
          {t('create')}
        </Link>
      </div>

      <FilterOne
        handleFilterChange={handleFilterChange}
        handleChildYearChange={handleChildYearChange}
        filters={filters}
        fetchData={fetchData}
        setFilters={setFilters}
      />
      {data && (
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-column-reverse flex-md-row align-items-center justify-content-between mb-3">
              <div className="d-flex align-items-center">
                <label className="form-label text-nowrap mb-0 me-2">
                  {t('page-size')}
                </label>
                <select
                  id="page-size-label"
                  className="form-select"
                  value={filters.page_size}
                  onChange={handleFilterChange}
                >
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
            <TourTable
              data={data}
              // child_count={filters.child_count}
              adults_count={filters.adults_count}
            />
            <Pagination
              currPage={data.page}
              recordsFiltered={data.page_size}
              recordsTotal={data.count}
              handlePageChange={handlePageChange}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
