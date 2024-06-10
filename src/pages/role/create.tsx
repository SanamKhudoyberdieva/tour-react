import { Link } from "react-router-dom";

const Create = () => {
  return (
    <div>
      <div
        className="d-flex mb-4 align-items-center justify-content-between"
      >
        <h4 className="py-3 mb-0">
          <span className="text-muted fw-light"
            ><Link to={'/'}>Asosiy</Link> /</span>
          <span className="text-muted fw-light"
            ><Link to={'/role'}>Rollar</Link>
            /</span>
          Yaratish
        </h4>
        <Link className="btn btn-info" to={'/role'}
          >Orqaga</Link>
      </div>
      <div className="card">
        <form className="card-body">
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label"
                >Nomi</label>
              <input
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3 col-md-6">
              <label className="form-label" 
                >Kalit</label>
              <input
                type="text"
                className="form-control"
              />
            </div>
          </div>
          <div>
            <button type="submit" className="btn btn-success">
              Сохранить
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Create;