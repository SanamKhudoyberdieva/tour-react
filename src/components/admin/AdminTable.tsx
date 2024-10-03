import {
  Link,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { formateDate } from "../../utils";
import { ChangeEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AdminListType } from "../../store/types";
import { deleteAdmin, getAdmins } from "../../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import Pagination from "../Pagination";
import { parseQuery, stringifyQuery } from "../../utils/queryUtils";

export interface FiltersStateType {
  name: string;
  page: number;
  page_size: number;
}
const AdminTable = () => {
  const { t } = useTranslation();
  const [data, setData] = useState<AdminListType | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryPageSize = parseInt(searchParams.get("pageSize") || "15");
  const queryPage = parseInt(searchParams.get("page") || "1");
  const queryName = searchParams.get("name") || "";
  const [pageSize, setPageSize] = useState(queryPageSize);
  const [currPage, setCurrPage] = useState(queryPage);
  const [name, setName] = useState(queryName);
  const handleGet = async ({ name, page, page_size }: FiltersStateType) => {
    try {
      const res = await getAdmins({
        organization_id: "",
        page_size,
        page,
        name,
      });
      setData(res.data);
    } catch (error) {
      console.log("error getAdmins: ", error);
    }
  };

  const handlePageClick = (event: { selected: number }) => {
    setCurrPage(event.selected + 1);
  };

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm(t("are-you-sure-you-want-to-delete"));
    if (!confirmed) return;

    try {
      await deleteAdmin(id);
      handleGet({ name, page: currPage, page_size: pageSize });
    } catch (error) {
      console.log("error deleteAdmin: ", error);
    }
  };

  useEffect(() => {
    setSearchParams({
      page: `${currPage}`,
      pageSize: `${pageSize}`,
      name: `${name}`,
    });
  }, [currPage, pageSize, queryName]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleGet({ name, page: currPage, page_size: pageSize });
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [name, currPage, pageSize]);

  if (!data) return;

  return (
    <>
      <div className="d-flex flex-column-reverse flex-md-row align-items-center justify-content-between mb-3">
        <div className="d-flex align-items-center">
          <label className="form-label text-nowrap mb-0 me-2">
            {t("page-size")}
          </label>
          <select
            id="page-size-label"
            className="form-select"
            value={pageSize}
            onChange={(e) => setPageSize(parseInt(e.target.value))}
          >
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
      <div className="table-responsive mb-3">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>{t("fullname")}</th>
              <th>{t("phone-number")}</th>
              <th>{t("organization")}</th>
              <th>{t("orders-number")}</th>
              <th>{t("last-visit")}</th>
              <th>{t("active")}</th>
              <th>&nbsp;</th>
            </tr>
            <tr>
              <td></td>
              <td>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="form-control"
                />
              </td>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {data?.admins &&
              data.admins.length > 0 &&
              data.admins.map((x, idx: number) => (
                <tr key={"admins-table-admin-id-" + x.id}>
                  <td>{idx + 1}</td>
                  <td>
                    <Link to={`/admin/view/${x.id}`}>{x.full_name}</Link>
                  </td>
                  <td>{x.phone}</td>
                  <td>{x.organization?.name}</td>
                  <td>{x.application_count}</td>
                  <td>{formateDate(x.last_visit)}</td>
                  <td>
                    <input
                      type="checkbox"
                      name="is_active"
                      disabled
                      checked={!!x.is_active}
                    ></input>
                  </td>
                  <td>
                    <Link className="btn p-1" to={`/admin/edit/${x.id}`}>
                      <FontAwesomeIcon icon={faPen} />
                    </Link>
                    <button className="btn p-1">
                      <FontAwesomeIcon
                        icon={faTrash}
                        onClick={() => handleDelete(x.id)}
                      />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Pagination
        currPage={data.page}
        recordsFiltered={data.admins.length}
        recordsTotal={data.count}
        handlePageChange={handlePageClick}
      />
    </>
  );
};

export default AdminTable;
