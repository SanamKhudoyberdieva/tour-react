import React from 'react'

const CreateGeneralInfo = () => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <div className="row">
          <div className="col-md-3 col-6 mb-3">
            <label className="form-label" >тур</label>
            <input
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-md-3 col-6 mb-3">
            <label className="form-label" 
              >ночей</label>
            <input
              type="number"
              className="form-control"
            />
          </div>
          <div className="col-md-3 col-6 mb-3">
            <label className="form-label">вылет от</label>
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
          <div className="col-md-4 col-6 mb-3">
            <label className="form-label" 
              >город отправления</label>
              <input
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-md-4 col-6 mb-3">
            <label className="form-label">
              город
            </label>
            <select className="form-select">
              <option value="1">O'zbekistom</option>
              <option value="1">Turkiya</option>
            </select>
          </div>
          <div className="col-md-4 col-6 mb-3">
            <label className="form-label" 
              >страна</label>
              <select className="form-select">
              <option value="1">Toskent</option>
              <option value="1">Istanbul</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateGeneralInfo
