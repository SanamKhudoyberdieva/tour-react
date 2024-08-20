const ApplicationNotes = () => {
  return (
    <div>
      <h6>Примечание к заявке</h6>
      <div className="card mb-3">
        <div className="card-body">
          <div className="row">
            <div className="col-md-3 mb-3">
              <div className="form-check">
                <label className="form-check-label">вместе с заявкой №</label>
                <input className="form-check-input" type="checkbox" />
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="form-check">
                <label className="form-check-label">молодожены</label>
                <input className="form-check-input" type="checkbox" />
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="form-check">
                <label className="form-check-label">вид на море</label>
                <input className="form-check-input" type="checkbox" />
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="form-check">
                <label className="form-check-label">тихое место</label>
                <input className="form-check-input" type="checkbox" />
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="form-check">
                <label className="form-check-label">
                  постоянный гость отеля
                </label>
                <input className="form-check-input" type="checkbox" />
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="form-check">
                <label className="form-check-label">
                  люлька для младенца в номер
                </label>
                <input className="form-check-input" type="checkbox" />
              </div>
            </div>
            <div className="mb-3">
              <textarea className="form-control"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationNotes;
