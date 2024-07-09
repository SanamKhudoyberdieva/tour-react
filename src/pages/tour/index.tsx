import { Link, useLocation, useNavigate } from "react-router-dom";
import Pagination from "../../components/Pagination";
import TourTable from "../../components/tour/TourTable";
import FilterOne from "../../components/tour/Filter/First";
import { useTranslation } from "react-i18next";
import { ChangeEvent, useEffect, useState } from "react";
import { TourPaginationType } from "../../store/types/tour/all";
import { parseQuery, stringifyQuery } from "../../utils/queryUtils";
import api from "../../api/api";

export interface FiltersStateType {
  adults_count?: string;
  child_count?: string;
  child_with_parent?: string;
  date?: string;
  night_count?: string;
  nutrition_type?: string;
  page?: number;
  page_size?: number;
  tour_id?: string;
  child_years: string[];
  [key: string]: string | number | undefined | string[] | [];
}

const Index = () => {
  const { t } = useTranslation();
  const [data, setData] = useState<TourPaginationType | null>(null);

  const navigate = useNavigate();
  const location = useLocation();

  const initialFilters: FiltersStateType = {
    adults_count: "",
    child_count: "",
    child_with_parent: "",
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
    filters: FiltersStateType
  ): Record<string, string | number | undefined> => {
    const cleanedFilters: Record<string, string | number | undefined> = {};
    for (const key in filters) {
      if (filters[key] !== undefined && filters[key] !== "") {
        if (Array.isArray(filters[key])) {
          const filteredArray = (filters[key] as string[]).filter(
            (item) => item !== ""
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
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };

    if (name === "child_count") {
      // Update child_years array based on the new child_count value
      const childCount = parseInt(value, 10);
      newFilters.child_years = Array(childCount).fill("0");
    }

    setFilters(newFilters);
    const queryString = stringifyQuery(cleanFilters(newFilters));
    navigate(`?${queryString}`);
  };

  const handleChildYearChange =
    (index: number) => (e: ChangeEvent<HTMLSelectElement>) => {
      const newChildYears = [...filters.child_years];
      newChildYears[index] = e.target.value;
      const newFilters = { ...filters, child_years: newChildYears };
      setFilters(newFilters);
      const queryString = stringifyQuery(cleanFilters(newFilters));
      navigate(`?${queryString}`);
    };

  useEffect(() => {
    // Send request when filters change
    const fetchData = async () => {
      const queryString = stringifyQuery(cleanFilters(filters));
      if (!filters.adults_count || !filters.date || !filters.night_count)
        return;
      try {
        const response = await api.get(`/api/tour/room?${queryString}`);
        const data = await response.data;
        setData(data);
      } catch (error) {
        console.log("error getting Tours: ", error);
      }
    };

    fetchData();
  }, [filters]);

  console.log("filters", filters);

  return (
    <>
      <div className="d-flex mb-4 align-items-center justify-content-between">
        <h4 className="py-3 mb-0">
          <span className="text-muted fw-light">
            <Link to={"/"}>Asosiy</Link> /{" "}
          </span>
          Tur Paketlar
        </h4>
        <Link className="btn btn-success" to={"/tour/create"}>
          Yaratish
        </Link>
      </div>

      <FilterOne
        handleFilterChange={handleFilterChange}
        handleChildYearChange={handleChildYearChange}
        filters={filters}
      />
      {data && (
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-column-reverse flex-md-row align-items-center justify-content-between mb-3">
              <div className="d-flex align-items-center">
                <label className="form-label text-nowrap mb-0 me-2">
                  Размер стр:
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
            <TourTable data={data} />
            <Pagination />
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
