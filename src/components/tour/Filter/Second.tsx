
const FilterTwo = () => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <div
          className="d-flex flex-column-reverse flex-md-row  justify-content-between mb-3"
        >
        <div className="d-flex flex-column">
          <div>
            <label className="form-label">вылет от</label>
            <input
              type="date"
              className="form-control"
            />
          </div>
          <div>
            <label className="form-label">до</label>
            <input
              type="date"
              className="form-control"
            />
          </div>
        </div>
        <div className="d-flex flex-column">
          <div>
            <label className="form-label">ночей от</label>
            <select className="form-select">
              <option value="0"></option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div>
            <label className="form-label">до</label>
            <select className="form-select">
              <option value="0"></option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
        </div>
        <div className="d-flex flex-column">
          <div>
            <label className="form-label">взрослых</label>
            <select className="form-select">
              <option value="0"></option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div className="d-flex">
            <div>
              <label className="form-label">детей/возраст</label>
              <select className="form-select">
                <option value="0"></option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div className="ms-2">
              <label className="form-label">1</label>
              <select className="form-select">
                <option value="0"></option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div className="ms-2">
              <label className="form-label">2</label>
              <select className="form-select">
                <option value="0"></option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div className="ms-2">
              <label className="form-label">3</label>
              <select className="form-select">
                <option value="0"></option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div>
            <label className="form-label">цена</label>
            <select className="form-select">
              <option value="0"></option>
              <option value="1">EUR</option>
              <option value="2">RUB</option>
            </select>
          </div>
        </div>
        <div className="d-flex flex-column">
          <div>
            <label className="form-label">от</label>
            <input
              type="text"
              className="form-control"
            />
          </div>
          <div>
            <label className="form-label">до</label>
            <input
              type="text"
              className="form-control"
            />
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default FilterTwo;