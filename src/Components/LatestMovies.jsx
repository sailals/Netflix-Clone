import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function LatestMovies() {
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
          <div className="section-header">Latest Movies</div>
          <div className="movie-slide carousel-nav-center">
            <OwlCarousel className="owl-theme carousel-nav-center" {...options}>
              {/* MOVIE ITEM */}

              <a className="movie-item">
                <img src="/images/movies/theatre-dead.jpg" alt="" />
                <div className="movie-item-content">
                  <div className="movie-item-title">Theatre of the dead</div>
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
                <img src="/images/movies/transformer.jpg" alt="" />
                <div className="movie-item-content">
                  <div className="movie-item-title">Transformer</div>
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
                <img src="/images/movies/resident-evil.jpg" alt="" />
                <div className="movie-item-content">
                  <div className="movie-item-title">Resident Evil</div>
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
                <img src="/images/movies/captain-marvel.png" alt="" />
                <div className="movie-item-content">
                  <div className="movie-item-title">Captain Marvel</div>
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
                <img src="/images/movies/blood-shot.jpg" alt="" />
                <div className="movie-item-content">
                  <div className="movie-item-title">Blood Shot</div>
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
                <img src="/images/movies/call.jpg" alt="" />
                <div className="movie-item-content">
                  <div className="movie-item-title">Call</div>
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

export default LatestMovies;
