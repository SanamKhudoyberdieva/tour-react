import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div>
      <div
        className="d-flex mb-4 align-items-center justify-content-between"
      >
        <h4 className="py-3 mb-0">
          <span className="text-muted fw-light"
            ><Link to={'/'}>Asosiy</Link> / </span>
          <span className="text-muted fw-light"
            ><Link to={'/order'}>Buyurtmalar</Link> / </span>
          Esonov Omon
        </h4>
        <Link className="btn btn-info" to={'/order'}>Orqaga</Link>
      </div>
      <div className="card mb-3">
        <div className="card-body">
          <div className="row">
            <div>
              <table
                className="table table-striped table-bordered detail-view mb-4"
              >
                <tbody>
                  <tr>
                    <th>Identifikatsiya raqami</th>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th>Tur nomi</th>
                    <td>Umra 2024</td>
                  </tr>
                  <tr>
                    <th>Yaratuvchi</th>
                    <td>
                      <Link to={'/admin/2'}>Iqboljonov Ozod</Link>
                    </td>
                  </tr>
                  <tr>
                    <th>Yaratilgan vaqti</th>
                    <td>02.05.2024</td>
                  </tr>
                  <tr>
                    <th>To'lov holati</th>
                    <td>To'langan</td>
                  </tr>
                  <tr>
                    <th>Qo'shimcha ma'lumotlar</th>
                    <td>
                      Lorem ipsum dolor sit, amet consectetur recusandae
                      adipisci dicta magni officia.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-6">
              <table className="table table-striped table-bordered detail-view">
                <tbody>
                  <tr>
                    <th>Ism va familiyasi</th>
                    <td>Esonov Omon</td>
                  </tr>
                  <tr>
                    <th>Telefon raqami</th>
                    <td>+998 99 613 22 33</td>
                  </tr>
                  <tr>
                    <th>Passport Seriyasi</th>
                    <td>AA 012 12 34</td>
                  </tr>
                  <tr>
                    <th>Yoshi</th>
                    <td>45</td>
                  </tr>
                  <tr>
                    <th>Jinsi</th>
                    <td>Erkak</td>
                  </tr>
                  <tr>
                    <th>Passport</th>
                    <td>
                      <Link to={'/'}>Ochish</Link>
                    </td>
                  </tr>
                  <tr>
                    <th>Visa</th>
                    <td>
                      <Link to={'/'}>Ochish</Link>
                    </td>
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