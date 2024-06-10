import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div>
      <div
        className="d-flex mb-4 align-items-center justify-content-between">
        <h4 className="py-3 mb-0">
          <span className="text-muted fw-light"
            ><Link to={'/'}>Asosiy</Link> / </span>
          <span className="text-muted fw-light"
            ><Link to={'/role'}>Rollar</Link> / </span>
          Asosiy meneger
        </h4>
        <Link className="btn btn-info" to={'/role'}>Orqaga</Link>
      </div>
      <div className="card mb-3">
        <div className="card-body">
          <div className="check-list">
            <table
              className="table table-striped table-hover report-table">
              <thead>
                <tr>
                  <th style={{ width: "30px" }}>#</th>
                  <th>Tur paket</th>
                  <th>
                    <div className="d-flex justify-content-end">
                      <input
                        type="checkbox"
                        className="select-all"
                        name="all"
                        value="1" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Kirish</td>
                  <td>
                    <div className="d-flex justify-content-end">
                      <input
                        type="checkbox"
                        id="manageProducts"
                        name="Roles[]"
                        value="manageProducts" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Qo'shish</td>
                  <td>
                    <div className="d-flex justify-content-end">
                      <input
                        type="checkbox"
                        id="createProducts"
                        name="Roles[]"
                        value="createProducts" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>O'zgartirish</td>
                  <td>
                    <div className="d-flex justify-content-end">
                      <input
                        type="checkbox"
                        id="updateProducts"
                        name="Roles[]"
                        value="updateProducts" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>O'chirish</td>
                  <td>
                    <div className="d-flex justify-content-end">
                      <input
                        type="checkbox"
                        id="deleteProducts"
                        name="Roles[]"
                        value="deleteProducts" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <hr />
            <table
              className="table table-striped table-hover report-table">
              <thead>
                <tr>
                  <th style={{ width: "30px" }}>#</th>
                  <th>Buyurtmalar</th>
                  <th>
                    <div className="d-flex justify-content-end">
                      <input
                        type="checkbox"
                        className="select-all"
                        name="all"
                        value="1" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Kirish</td>
                  <td>
                    <div className="d-flex justify-content-end">
                      <input
                        type="checkbox"
                        id="manageProducts"
                        name="Roles[]"
                        value="manageProducts" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Qo'shish</td>
                  <td>
                    <div className="d-flex justify-content-end">
                      <input
                        type="checkbox"
                        id="createProducts"
                        name="Roles[]"
                        value="createProducts" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>O'zgartirish</td>
                  <td>
                    <div className="d-flex justify-content-end">
                      <input
                        type="checkbox"
                        id="updateProducts"
                        name="Roles[]"
                        value="updateProducts" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>O'chirish</td>
                  <td>
                    <div className="d-flex justify-content-end">
                      <input
                        type="checkbox"
                        id="deleteProducts"
                        name="Roles[]"
                        value="deleteProducts" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <hr />
            <table
              className="table table-striped table-hover report-table">
              <thead>
                <tr>
                  <th style={{ width: "30px" }}>#</th>
                  <th>Havo yo'llari</th>
                  <th>
                    <div className="d-flex justify-content-end">
                      <input
                        type="checkbox"
                        className="select-all"
                        name="all"
                        value="1" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Kirish</td>
                  <td>
                    <div className="d-flex justify-content-end">
                      <input
                        type="checkbox"
                        id="manageProducts"
                        name="Roles[]"
                        value="manageProducts" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Qo'shish</td>
                  <td>
                    <div className="d-flex justify-content-end">
                      <input
                        type="checkbox"
                        id="createProducts"
                        name="Roles[]"
                        value="createProducts" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>O'zgartirish</td>
                  <td>
                    <div className="d-flex justify-content-end">
                      <input
                        type="checkbox"
                        id="updateProducts"
                        name="Roles[]"
                        value="updateProducts" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>O'chirish</td>
                  <td>
                    <div className="d-flex justify-content-end">
                      <input
                        type="checkbox"
                        id="deleteProducts"
                        name="Roles[]"
                        value="deleteProducts" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <hr />
            <table
              className="table table-striped table-hover report-table">
              <thead>
                <tr>
                  <th style={{ width: "30px" }}>#</th>
                  <th>Mexmonxonalar</th>
                  <th>
                    <div className="d-flex justify-content-end">
                      <input
                        type="checkbox"
                        className="select-all"
                        name="all"
                        value="1" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Kirish</td>
                  <td>
                    <div className="d-flex justify-content-end">
                      <input
                        type="checkbox"
                        id="manageProducts"
                        name="Roles[]"
                        value="manageProducts" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Qo'shish</td>
                  <td>
                    <div className="d-flex justify-content-end">
                      <input
                        type="checkbox"
                        id="createProducts"
                        name="Roles[]"
                        value="createProducts" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>O'zgartirish</td>
                  <td>
                    <div className="d-flex justify-content-end">
                      <input
                        type="checkbox"
                        id="updateProducts"
                        name="Roles[]"
                        value="updateProducts" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>O'chirish</td>
                  <td>
                    <div className="d-flex justify-content-end">
                      <input
                        type="checkbox"
                        id="deleteProducts"
                        name="Roles[]"
                        value="deleteProducts" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <hr />
            <table
              className="table table-striped table-hover report-table">
              <thead>
                <tr>
                  <th style={{ width: "30px" }}>#</th>
                  <th>Xonalar</th>
                  <th>
                    <div className="d-flex justify-content-end">
                      <input
                        type="checkbox"
                        className="select-all"
                        name="all"
                        value="1" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Kirish</td>
                  <td>
                    <div className="d-flex justify-content-end">
                      <input
                        type="checkbox"
                        id="manageProducts"
                        name="Roles[]"
                        value="manageProducts" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Qo'shish</td>
                  <td>
                    <div className="d-flex justify-content-end">
                      <input
                        type="checkbox"
                        id="createProducts"
                        name="Roles[]"
                        value="createProducts" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>O'zgartirish</td>
                  <td>
                    <div className="d-flex justify-content-end">
                      <input
                        type="checkbox"
                        id="updateProducts"
                        name="Roles[]"
                        value="updateProducts" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>O'chirish</td>
                  <td>
                    <div className="d-flex justify-content-end">
                      <input
                        type="checkbox"
                        id="deleteProducts"
                        name="Roles[]"
                        value="deleteProducts" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <hr />
            <table
              className="table table-striped table-hover report-table">
              <thead>
                <tr>
                  <th style={{ width: "30px" }}>#</th>
                  <th>Adminstrator</th>
                  <th>
                    <div className="d-flex justify-content-end">
                      <input
                        type="checkbox"
                        className="select-all"
                        name="all"
                        value="1" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Kirish</td>
                  <td>
                    <div className="d-flex justify-content-end">
                      <input
                        type="checkbox"
                        id="manageProducts"
                        name="Roles[]"
                        value="manageProducts" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Qo'shish</td>
                  <td>
                    <div className="d-flex justify-content-end">
                      <input
                        type="checkbox"
                        id="createProducts"
                        name="Roles[]"
                        value="createProducts" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>O'zgartirish</td>
                  <td>
                    <div className="d-flex justify-content-end">
                      <input
                        type="checkbox"
                        id="updateProducts"
                        name="Roles[]"
                        value="updateProducts" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>O'chirish</td>
                  <td>
                    <div className="d-flex justify-content-end">
                      <input
                        type="checkbox"
                        id="deleteProducts"
                        name="Roles[]"
                        value="deleteProducts" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index;