import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

const Hostel = () => {
  return (
    <div>
      <div
        className="d-flex mb-4 align-items-center justify-content-between">
        <h4 className="py-3 mb-0">
          <span className="text-muted fw-light"
            ><Link to={'/'}>Asosiy</Link> / </span>
          Mehmonxonalar
        </h4>
      </div>
      <div className="card">
        <div className="card-body">
          <div
            className="d-flex flex-column-reverse flex-md-row align-items-center justify-content-between mb-3">
            <div className="d-flex align-items-center">
              <label
                className="form-label text-nowrap mb-0 me-2"
                >Размер стр:</label>
              <select className="form-select">
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
            </div>
          </div>
          <div className="table-responsive mb-4">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Stars</th>
                  <th>Address</th>
                  <th>Description</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                    />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Al Riffa Hotel</td>
                  <td>4</td>
                  <td>Ibrahim Al Khalil Road, Al Misfalah District, Makkah, Saudi Arabia</td>
                  <td>Al Riffa mehmonxonasi turli xil xona variantlari, jumladan umumiy yotoqxonalar va shaxsiy xonalar bilan arzon turar joyni taklif etadi. U Masjid al-Haromga yaqin joyda joylashgani uchun ziyoratchilar uchun ideal tanlovdir. </td>
                  <td>
                    <button className="btn btn-icon btn-success">
                      <FontAwesomeIcon icon={faPen} />
                    </button>
                    <button className="btn btn-icon btn-danger">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <input
                      className="form-control"
                      type="text"
                      value="" />
                  </td>
                  <td>
                    <input
                      className="form-control"
                      type="text"
                      value="" />
                  </td>
                  <td>
                    <input
                      className="form-control"
                      type="text"
                      value="" />
                  </td>
                  <td>
                    <input
                      className="form-control"
                      type="text"
                      value="" />
                  </td>
                  <td>
                    <button
                      type="submit"
                      className="btn btn-icon btn-success">
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  )
}

export default Hostel;