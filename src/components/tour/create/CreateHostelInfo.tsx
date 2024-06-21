
const CreateHostelInfo = () => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <div className="row">
          <div className="col-md-3 col-6 mb-3">
            <div className="form-group">
              <label className="form-label" >гостиница</label>
              <select className="form-select">
                <option value="option1">Hilton</option>
                <option value="option2">Wyndham</option>
                <option value="option3">City Palace</option>
              </select>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-3">
            <label className="form-label" 
              >питание</label>
            <div className="d-flex">
              <select className="form-select me-2">
                <option value="1">BB</option>
                <option value="1">PP</option>
              </select>
              <input
                type="number"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-md-3 col-6 mb-3">
            <label className="form-label">от</label>
            <input
              type="datetime-local"
              className="form-control"
            />
          </div>
          <div className="col-md-3 col-6 mb-3">
            <label className="form-label">до</label>
            <input
              type="datetime-local"
              className="form-control"
            />
          </div>
          <div className="col-md-3 col-6 mb-3">
            <label className="form-label">2Adl Количество</label>
            <input
              type="number"
              className="form-control"
            />
            <label className="form-label">2Adl цена</label>
            <input
              type="number"
              className="form-control"
            />
          </div>
          <div className="col-md-3 col-6 mb-3">
            <label className="form-label">3Adl Количество</label>
            <input
              type="number"
              className="form-control"
            />
            <label className="form-label">3Adl цена</label>
            <input
              type="number"
              className="form-control"
            />
          </div>
          <div className="col-md-3 col-6 mb-3">
            <label className="form-label">4Adl (Мужчины) Количество</label>
            <input
              type="number"
              className="form-control"
            />
            <label className="form-label">4Adl (Мужчины) цена</label>
            <input
              type="number"
              className="form-control"
            />
          </div>
          <div className="col-md-3 col-6 mb-3">
            <label className="form-label">4Adl (женщины) Количество</label>
            <input
              type="number"
              className="form-control"
            />
            <label className="form-label">4Adl (женщины) цена</label>
            <input
              type="number"
              className="form-control"
            />
          </div>
          <hr />
          <div className="col-md-3 col-6 mb-3">
            <div className="form-group">
              <label className="form-label">гостиница</label>
              <select className="form-select">
                <option value="option1">Hilton</option>
                <option value="option2">Wyndham</option>
                <option value="option3">City Palace</option>
              </select>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-3">
            <label className="form-label" 
              >питание</label>
            <select className="form-select">
              <option value="1">BB</option>
              <option value="1">PP</option>
            </select>
          </div>
          <div className="col-md-3 col-6 mb-3">
            <label className="form-label">от</label>
            <input
              type="datetime-local"
              className="form-control"
            />
          </div>
          <div className="col-md-3 col-6 mb-3">
            <label className="form-label">до</label>
            <input
              type="datetime-local"
              className="form-control"
            />
          </div>
          <div className="col-md-3 col-6 mb-3">
            <label className="form-label" 
              >2Adl Количество</label>
              <input
              type="number"
              className="form-control"
            />
            <label className="form-label" 
              >2Adl цена</label>
              <input
              type="number"
              className="form-control"
            />
          </div>
          <div className="col-md-3 col-6 mb-3">
            <label className="form-label" 
              >3Adl Количество</label>
              <input
              type="number"
              className="form-control"
            />
            <label className="form-label" 
              >3Adl цена</label>
              <input
              type="number"
              className="form-control"
            />
          </div>
          <div className="col-md-3 col-6 mb-3">
            <label className="form-label" 
              >4Adl (Мужчины) Количество</label>
              <input
              type="number"
              className="form-control"
            />
            <label className="form-label" 
              >4Adl (Мужчины) цена</label>
              <input
              type="number"
              className="form-control"
            />
          </div>
          <div className="col-md-3 col-6 mb-3">
            <label className="form-label" 
              >4Adl (женщины) Количество</label>
              <input
              type="number"
              className="form-control"
            />
            <label className="form-label" 
              >4Adl (женщины) цена</label>
              <input
              type="number"
              className="form-control"
            />
          </div>
        </div>
        <div>
          <button className="btn btn-success">добавлять</button>
        </div>
      </div>
    </div>
  )
}

export default CreateHostelInfo;