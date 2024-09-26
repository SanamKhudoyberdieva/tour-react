import { getNews } from "../api";
import i18n from "../utils/i18n";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Carousel, Image } from "react-bootstrap";
import { getDescription, getName } from "../utils";
import { NewsListType, NewsType } from "../store/types";

const Dashboard = () => {
  const { t } = useTranslation();
  const [banner, setBanner] = useState<NewsListType | null>(null);

  const CustomPrevIcon = () => (
    <span className="carousel-control-prev-icon"></span>
  );

  const CustomNextIcon = () => (
    <span className="carousel-control-next-icon"></span>
  );

  const handleGetBanners = async () => {
    try {
      const res = await getNews();
      setBanner(res.data);
    } catch (error) {
      console.log("Error fetching getNews: ", error);
    }
  };

  useEffect(() => {
    handleGetBanners()
  }, []);

  return (
    <div>
      <h4 className="py-3 mb-4">{t('dashboard')}</h4>
      <div className="card mb-4">
        <div className="header text-center p-3">
          <h4 className="title">{t('welcome-admin')}</h4>
        </div>
        <div className="content"></div>
      </div>
      <div className="pr-main-carousel">
        <Carousel
          prevIcon={<CustomPrevIcon />}
          nextIcon={<CustomNextIcon />}
        >
          {banner?.news.map((x: NewsType, idx) => (
            <Carousel.Item interval={4000} key={"banner-index-" + idx}>
              <Image
                src={`https://backend.poytaxt-team.uz/public/news/${x.image}`}
                width={1380}
                height={360}
                className="d-block w-100 img-fluid"
                alt="banner"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="text">{getName(x, i18n.language)}</h5>
                <p className="text">{getDescription(x, i18n.language)}</p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Dashboard;