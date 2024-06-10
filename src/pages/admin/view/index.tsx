import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <>
      <div
        className="d-flex mb-4 align-items-center justify-content-between"
      >
        <h4 className="py-3 mb-0">
          <span className="text-muted fw-light"
            ><Link to={'/'}>Asosiy</Link> / </span>
          <span className="text-muted fw-light"
            ><Link to={'/admin'}>Adminstratorlar</Link>
            / </span>
          Toxirjonova Dildora Sardorovna
        </h4>
        <Link className="btn btn-info" to={'/admin'}
          >Orqaga</Link>
      </div>
      <div className="card mb-3">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <table
                className="table table-striped table-bordered detail-view"
              >
                <tbody>
                  <tr>
                    <th>Идентификатор</th>
                    <td>1</td>
                  </tr>
                  <tr></tr>
                  <tr>
                    <th>FISH</th>
                    <td>Toxirjonova Dildora Sardorovna</td>
                  </tr>
                  <tr>
                    <th>Telefon raqam</th>
                    <td>+998 99 617 45 65</td>
                  </tr>
                  <tr>
                    <th>Elektron manzil</th>
                    <td>toxirjonova45@gmail.com</td>
                  </tr>
                  <tr>
                    <th>Buyurtmalar soni</th>
                    <td>67</td>
                  </tr>
                  <tr>
                    <th>Holati</th>
                    <td>Faol</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-6">
              <table
                className="table table-striped table-bordered detail-view"
              >
                <tbody>
                  <tr></tr>
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
    </>
  )
}

export default Index;