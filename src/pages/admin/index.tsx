import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div>
      <div
        className="d-flex mb-4 align-items-center justify-content-between"
      >
        <h4 className="py-3 mb-0">
          <span className="text-muted fw-light">
            <Link to={'/'}>Asosiy</Link> / 
          </span>
          Adminstratorlar
        </h4>
        <Link className="btn btn-success" to={'/admin/create'}
          >Admin qo'shish</Link>
      </div>
      <div className="card">
        <div className="card-body">
          <div
            className="d-flex flex-column-reverse flex-md-row align-items-center justify-content-between mb-3"
          ></div>
          <div className="table-responsive mb-4">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>FISH</th>
                  <th>Telefon raqam</th>
                  <th>Email</th>
                  <th>Buyurtmalar soni</th>
                  <th>Holat</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <Link to={'/admin/view/2'}
                      >Toxirjonova Dildora Sardorovna</Link>
                  </td>
                  <td>+998 99 617 45 65</td>
                  <td>toxirjonova45@gmail.com</td>
                  <td>67</td>
                  <td>
                    <input
                      type="checkbox"
                      name="parent_id"
                    />
                  </td>
                  <td>
                    <a
                      className="btn p-1"
                      href="./adminstrator-create.html"
                    >
                      <i className="fas fa-pen"></i>
                    </a>
                    <button className="btn p-1">
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <a href="./adminstrator-view.html"
                      >Nuriddinov Alisher Farxodvich</a
                    >
                  </td>
                  <td>+998 93 517 75 65</td>
                  <td>alisher45200@gmail.com</td>
                  <td>82</td>
                  <td>
                    <input
                      type="checkbox"
                      name="parent_id"
                    />
                  </td>
                  <td>
                    <a
                      className="btn p-1"
                      href="./adminstrator-create.html"
                    >
                      <i className="fas fa-pen"></i>
                    </a>
                    <button className="btn p-1">
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            className="d-flex flex-column flex-md-row justify-content-between align-items-center"
          >
            <span className="mb-2 mb-md-0"
              >Показаны записи 10 из 12</span
            >
            <ul
              className="pagination m-0 align-items-center"
              role="navigation"
              aria-label="Pagination"
            >
              <li className="prev">
                <a
                  className=""
                  role="button"
                  aria-disabled="false"
                  aria-label="Previous page"
                  rel="prev"
                  ><button className="page-link">
                    <i className="fa-solid fa-angle-left"></i></button
                ></a>
              </li>
              <li className="page-item active">
                <a
                  rel="prev"
                  role="button"
                  className="page-link"
                  aria-label="Page 1"
                  >1</a
                >
              </li>
              <li className="page-item">
                <a
                  rel="canonical"
                  role="button"
                  className="page-link"
                  aria-label="Page 2 is your current page"
                  aria-current="page"
                  >2</a
                >
              </li>
              <li className="next disabled">
                <a
                  className=" "
                  role="button"
                  aria-disabled="true"
                  aria-label="Next page"
                  rel="next"
                  ><button className="page-link">
                    <i className="fa-solid fa-angle-right"></i></button
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index;