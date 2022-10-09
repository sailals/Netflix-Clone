import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function MovieSlide() {
  const options = {
    loop: true,
    items: 2,
    dots: false,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      500: {
        items: 3,
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
      <div className="top-movies-slide container section ">
        <div className="section-header ">There is Even More to Watch</div>
        <div id="top-movies-slide">
          <OwlCarousel className="owl-theme carousel-nav-center" {...options}>
            {/* MOVIE ITEM */}

            <div className="movie-item">
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
            </div>
            {/* END OF MOVIE ITEM */}
            {/* MOVIE ITEM */}
            <div className="movie-item">
              <img src="/images/movies/captain-marvel.png" alt="" />
              <div className="movie-item-content">
                <div className="movie-item-title">Captian Marvel</div>
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
            </div>
            {/* END OF MOVIE ITEM */}

            {/* MOVIE ITEM */}
            <div className="movie-item">
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
            </div>
            {/* END OF MOVIE ITEM */}
            {/* MOVIE ITEM */}
            <div className="movie-item">
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
            </div>
            {/* END OF MOVIE ITEM */}
            {/* MOVIE ITEM */}
            <div className="movie-item">
              <img src="/images/series/wanda.png" alt="" />
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
            </div>
            {/* END OF MOVIE ITEM */}
            {/* MOVIE ITEM */}
            <div className="movie-item">
              <img src="/images/movies/bat-man.jpg" alt="" />
              <div className="movie-item-content">
                <div className="movie-item-title">The Dark Knight</div>
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
            </div>
            {/* END OF MOVIE ITEM */}
          </OwlCarousel>
        </div>
      </div>
    </>
  );
}

export default MovieSlide;
