import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div>
      <div
        className="d-flex mb-4 align-items-center justify-content-between">
        <h4 className="py-3 mb-0">
          <span className="text-muted fw-light"
            ><Link to={'/'}>Asosiy</Link> /</span>
          <span className="text-muted fw-light"
            ><Link to={'/branch'}>Filyallar</Link> / </span>
          Markaziy filyal
        </h4>
        <Link className="btn btn-info" to={'/branch'}>Orqaga</Link>
      </div>
      <div className="card mb-3">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <table
                className="table table-striped table-bordered detail-view">
                <tbody>
                  <tr>
                    <th>Идентификатор</th>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th>Nomi</th>
                    <td>Markaziy filyal</td>
                  </tr>
                  <tr>
                    <th>Shahar</th>
                    <td>Toshkent</td>
                  </tr>
                  <tr>
                    <th>Manzil</th>
                    <td>
                      Toshkent shahar, Yakkasaroy tumani 19
                    </td>
                  </tr>
                  <tr>
                    <th>Buyurtmalar soni</th>
                    <td>115</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-6">
              <table
                className="table table-striped table-bordered detail-view">
                <tbody>
                  <tr>
                    <th>Direktor</th>
                    <td>Maxmudov Bexruz</td>
                  </tr>
                  <tr>
                    <th>Xodimlar soni</th>
                    <td>21</td>
                  </tr>
                  <tr>
                    <th>Yaratuvchi</th>
                    <td>Muxtorova Malika</td>
                  </tr>
                  <tr>
                    <th>Yaratilgan</th>
                    <td>18.05.2024</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index;