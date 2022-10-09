import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function LatestCartoons() {
  const options = {
    items: 2,
    dots: false,
    nav: true,
    navText: [
      '<i class="bx bx-chevron-left"></i>',
      '<i class="bx bx-chevron-right"></i>',
    ],
    margin: 15,
    responsive: {
      500: {
        items: 2,
      },
      1280: {
        items: 5,
      },
      1600: {
        items: 6,
      },
    },
  };

  return (
    <>
      <div className="section">
        <div className="container">
          <div className="section-header">Latest Cartoons</div>
          <div className="movie-slide carousel-nav-center">
            <OwlCarousel className="owl-theme carousel-nav-center" {...options}>
              {/* MOVIE ITEM */}

              <a className="movie-item">
                <img src="/images/cartoons/coco.jpg" alt="" />
                <div className="movie-item-content">
                  <div className="movie-item-title">Coco</div>
                  <div className="movie-infos">
                    <div className="movie-info">
                      <i className="bx bxs-star"></i>
                      <span>9.5</span>
                    </div>
                    <div className="movie-info">
                      <i className="bx bxs-time"></i>
                      <span>120 mins</span>
                    </div>
                    <div className="movie-info">
                      <span>4K HDR</span>
                    </div>
                    <div className="movie-info">
                      <span>16+</span>
                    </div>
                  </div>
                </div>
              </a>
              {/* END OF MOVIE ITEM */}
              {/* MOVIE ITEM */}

              <a className="movie-item">
                <img src="/images/cartoons/croods.jpg" alt="" />
                <div className="movie-item-content">
                  <div className="movie-item-title">Croods</div>
                  <div className="movie-infos">
                    <div className="movie-info">
                      <i className="bx bxs-star"></i>
                      <span>9.5</span>
                    </div>
                    <div className="movie-info">
                      <i className="bx bxs-time"></i>
                      <span>120 mins</span>
                    </div>
                    <div className="movie-info">
                      <span>4K HDR</span>
                    </div>
                    <div className="movie-info">
                      <span>16+</span>
                    </div>
                  </div>
                </div>
              </a>
              {/* END OF MOVIE ITEM */}
              {/* MOVIE ITEM */}

              <a className="movie-item">
                <img src="/images/cartoons/demon-slayer.jpg" alt="" />
                <div className="movie-item-content">
                  <div className="movie-item-title">Demon Slayer</div>
                  <div className="movie-infos">
                    <div className="movie-info">
                      <i className="bx bxs-star"></i>
                      <span>9.5</span>
                    </div>
                    <div className="movie-info">
                      <i className="bx bxs-time"></i>
                      <span>120 mins</span>
                    </div>
                    <div className="movie-info">
                      <span>4K HDR</span>
                    </div>
                    <div className="movie-info">
                      <span>16+</span>
                    </div>
                  </div>
                </div>
              </a>
              {/* END OF MOVIE ITEM */}
              {/* MOVIE ITEM */}

              <a className="movie-item">
                <img src="/images/cartoons/dragon.jpg" alt="" />
                <div className="movie-item-content">
                  <div className="movie-item-title">Bragon Ball Z</div>
                  <div className="movie-infos">
                    <div className="movie-info">
                      <i className="bx bxs-star"></i>
                      <span>9.5</span>
                    </div>
                    <div className="movie-info">
                      <i className="bx bxs-time"></i>
                      <span>120 mins</span>
                    </div>
                    <div className="movie-info">
                      <span>4K HDR</span>
                    </div>
                    <div className="movie-info">
                      <span>16+</span>
                    </div>
                  </div>
                </div>
              </a>
              {/* END OF MOVIE ITEM */}
              {/* MOVIE ITEM */}

              <a className="movie-item">
                <img src="/images/cartoons/over-the-moon.jpg" alt="" />
                <div className="movie-item-content">
                  <div className="movie-item-title">Over The Moon</div>
                  <div className="movie-infos">
                    <div className="movie-info">
                      <i className="bx bxs-star"></i>
                      <span>9.5</span>
                    </div>
                    <div className="movie-info">
                      <i className="bx bxs-time"></i>
                      <span>120 mins</span>
                    </div>
                    <div className="movie-info">
                      <span>4K HDR</span>
                    </div>
                    <div className="movie-info">
                      <span>16+</span>
                    </div>
                  </div>
                </div>
              </a>
              {/* END OF MOVIE ITEM */}
              {/* MOVIE ITEM */}

              <a className="movie-item">
                <img src="/images/cartoons/weathering.jpg" alt="" />
                <div className="movie-item-content">
                  <div className="movie-item-title">Weathering</div>
                  <div className="movie-infos">
                    <div className="movie-info">
                      <i className="bx bxs-star"></i>
                      <span>9.5</span>
                    </div>
                    <div className="movie-info">
                      <i className="bx bxs-time"></i>
                      <span>120 mins</span>
                    </div>
                    <div className="movie-info">
                      <span>4K HDR</span>
                    </div>
                    <div className="movie-info">
                      <span>16+</span>
                    </div>
                  </div>
                </div>
              </a>
              {/* END OF MOVIE ITEM */}
              {/* MOVIE ITEM */}

              <a className="movie-item">
                <img src="/images/cartoons/your-name.jpg" alt="" />
                <div className="movie-item-content">
                  <div className="movie-item-title">Your Name</div>
                  <div className="movie-infos">
                    <div className="movie-info">
                      <i className="bx bxs-star"></i>
                      <span>9.5</span>
                    </div>
                    <div className="movie-info">
                      <i className="bx bxs-time"></i>
                      <span>120 mins</span>
                    </div>
                    <div className="movie-info">
                      <span>4K HDR</span>
                    </div>
                    <div className="movie-info">
                      <span>16+</span>
                    </div>
                  </div>
                </div>
              </a>
              {/* END OF MOVIE ITEM */}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </>
  );
}

export default LatestCartoons;
