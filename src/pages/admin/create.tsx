import { Link } from "react-router-dom";

const Create = () => {
  return (
    <div>
      <div
        className="d-flex mb-4 align-items-center justify-content-between"
      >
        <h4 className="py-3 mb-0">
          <span className="text-muted fw-light"
            ><Link to={'/'}>Asosiy</Link> / </span>
          <span className="text-muted fw-light"
            ><Link to={'/admin'}>Adminstratorlar</Link>
            / </span>
          Yaratish
        </h4>
        <Link className="btn btn-info" to={'/admin'}
          >Orqaga</Link>
      </div>
      <div className="card">
        <form className="card-body">
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label"
                >FISH</label>
                <input
                type="text"
                className="form-control"
                name="name_ru"
                value=""
              />
            </div>
            <div className="mb-3 col-md-6">
              <label className="form-label" 
                >Telefon raqam </label>
                <input
                type="text"
                className="form-control"
                name="address_ru"
                value=""
              />
            </div>
            <div className="mb-3 col-md-6">
              <label className="form-label" 
                >Elektron manzil</label>
                <input
                type="text"
                className="form-control"
                name="address_ru"
                value=""
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label"
                >Buyurtmalar soni</label>
                <input
                type="text"
                className="form-control"
                name="name_ru"
                value=""
              />
            </div>
            <div className="col-md-6 d-flex align-items-center mb-3">
              <input
                className="form-check"
                type="checkbox"
                name="is_active"
              /><label
                className="form-label mb-0 ms-2"
                >Holati</label>

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