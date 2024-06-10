import { Carousel } from "react-bootstrap";
import Banner from "../../public/img/monte.png";
import Banner2 from "../../public/img/monte.png";

const Dashboard = () => {
  return (
    <div>
      <h4 className="py-3 mb-4">Панель управления</h4>
      <div className="card mb-4">
        <div className="header text-center p-3">
          <h4 className="title">Добро пожаловать, администратор</h4>
        </div>
        <div className="content"></div>
      </div>
      <Carousel>
        <div className="carousel-inner">
          <Carousel.Item>
            <img className="d-block w-100" src={Banner} alt="Banner" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Banner2} alt="Banner" />
          </Carousel.Item>
          <div>
            <img className="d-block w-100" src={Banner} alt="Banner" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExample" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExample" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </Carousel>
    </div>
  )
}

export default Dashboard;