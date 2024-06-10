
const FilterOne = () => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <div
          className="d-flex flex-column-reverse flex-md-row  justify-content-between mb-3"
        >
          <div className="d-flex flex-column">
            <div>
              <label className="form-label"
                >город отправления
              </label>
              <select className="form-select">
                <option value="0"></option>
                <option value="1">Tashkent</option>
              </select>
            </div>
            <div>
              <label  className="form-label">
                страна
              </label>
              <select className="form-select">
                <option value="0"></option>
                <option value="1">Uzbekistan</option>
                <option value="2">India</option>
              </select>
            </div>
          </div>
          <div className="d-flex">
            <div>
              <label className="form-label">тур</label>
              <select className="form-select">
                <option value="0"></option>
                <option value="1">Tashkent - Azarbajon</option>
                <option value="2">Dubai - Toshkent</option>
              </select>
            </div>
          </div>
          <div>
            <h6 className="card-title">Tur ichida:</h6>
            <ul>
              <li>Aviabilet (Toshkent-Dubai)</li>
              <li>Aviabilet (Toshkent-Dubai)</li>
              <li>Hotel</li>
              <li>Transfer from airport to hotel</li>
            </ul>
          </div>
          <div>
            <h6 className="card-title">Qo'shimcha to'lov:</h6>
            <ul>
              <li>Aviabilet (Toshkent-Dubai)</li>
              <li>Aviabilet (Toshkent-Dubai)</li>
              <li>Hotel</li>
              <li>Transfer from airport to hotel</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterOne;