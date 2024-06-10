import { Link } from "react-router-dom";

const Edit = () => {
  return (
    <>
      <div
        className="d-flex mb-4 align-items-center justify-content-between">
        <h4 className="py-3 mb-0">
          <span className="text-muted fw-light"
            ><Link to={'/'}>Asosiy</Link> / </span>
          <span className="text-muted fw-light"
            ><Link to={'/branch'}>Filyallar</Link> / </span>
          O'zgartirish
        </h4>
        <Link className="btn btn-info" to={'/branch'}>Orqaga</Link>
      </div>
      <div className="card">
        <form className="card-body">
          <div className="row">
            <div className="col-md-4 mb-3">
              <label className="form-label" 
                >NOMI</label>
              <input
                type="text"
                className="form-control"
                value="" />
            </div>
            <div className="col-md-4 mb-3">
              <label
                className="form-label"
                >Shahar</label>
              <input
                type="text"
                className="form-control"
                value="" />
            </div>
            <div className="col-md-4 mb-3">
              <label
                className="form-label"
                >Manzil</label>
              <input
                type="text"
                className="form-control"
                value="" />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label" 
                >Direktor</label>
              <input
                type="text"
                className="form-control"
                value="" />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label" 
                >Xodimlar soni</label>
              <input
                type="text"
                className="form-control"
                value="" />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label" 
                >Buyurtmalar soni</label>
              <input
                type="text"
                className="form-control"
                value="" />
            </div>
          </div>
          <div>
            <button type="submit" className="btn btn-success">
              Сохранить
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Edit;