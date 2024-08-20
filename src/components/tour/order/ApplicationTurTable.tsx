const ApplicationTurTable = () => {
  return (
    <div className="card mb-3">
        <div className="card-body">
          <div className="table-responsive mb-4">
            <h6>Тур</h6>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Описание тура</th>
                  <th>СПО</th>
                  <th>Страна</th>
                  <th>Продолжительность</th>
                  <th>ночей</th>
                  <th>Примечание</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Вьетнам: Нячанг из Ташкента</td>
                  <td>TAS-38529-CXR</td>
                  <td>Вьетнам</td>
                  <td>05.06.2024—12.06.2024</td>
                  <td>7</td>
                  <td>CROWN HOTEL NHA TRANG - Special offer</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  )
}

export default ApplicationTurTable