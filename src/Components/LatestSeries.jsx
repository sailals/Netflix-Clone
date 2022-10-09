import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function LatestSeries() {
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
          <div className="section-header">Latest Series</div>
          <div className="movie-slide carousel-nav-center">
            <OwlCarousel className="owl-theme carousel-nav-center" {...options}>
              {/* MOVIE ITEM */}

              <a className="movie-item">
                <img src="/images/series/mandalorian.jpg" alt="" />
                <div className="movie-item-content">
                  <div className="movie-item-title">Mandalorian</div>
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
                <img src="/images/series/stranger-thing.jpg" alt="" />
                <div className="movie-item-content">
                  <div className="movie-item-title">Stranger THings</div>
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
                <img src="/images/series/penthouses.jpg" alt="" />
                <div className="movie-item-content">
                  <div className="movie-item-title">Penthouse</div>
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
                <img src="/images/series/the-falcon.webp" alt="" />
                <div className="movie-item-content">
                  <div className="movie-item-title">The Falcon</div>
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
                <img src="/images/series/star-trek.jpg" alt="" />
                <div className="movie-item-content">
                  <div className="movie-item-title">Star-trek</div>
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
                <img src="/images/series/supergirl.jpg" alt="" />
                <div className="movie-item-content">
                  <div className="movie-item-title">Supergirl</div>
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
                <img src="/images/series/wanda.webp" alt="" />
                <div className="movie-item-content">
                  <div className="movie-item-title">Wanda Vision</div>
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

export default LatestSeries;
