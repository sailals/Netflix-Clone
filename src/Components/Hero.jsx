import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Hero() {
  return (
    <>
      <div className="hero-section">
        <div className="hero-slide">
          <OwlCarousel
            className="owl-theme carousel-nav-center"
            loop={true}
            items={1}
            dots={false}
            nav={true}
            autoplay={true}
            autoplayHoverPause={true}
            navText={[
              '<i class="bx bx-chevron-left"></i>',
              '<i class="bx bx-chevron-right"></i>',
            ]}
          >
            {/* SLIDE ITEM BEGINS */}

            <div className="hero-slide-item">
              <img src="/images/witcher.jpg" alt="" />
              <div className="overlay"></div>
              {/* SLIDE ITEM CONTENT */}
              <div className="hero-slide-item-content">
                <div className="item-content-wrapper">
                  {/* TITLE */}
                  <div className="item-content-title top-down">The Witcher</div>
                  {/* INFO CONTENT START */}
                  <div className="movie-infos top-down delay-2">
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
                  {/* INFO CONTENT END */}

                  <div className="item-content-description top-down delay-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                    nam distinctio ex quod fuga sapiente alias culpa animi iste
                    hic? Eum voluptatum reiciendis esse possimus. A asperiores
                    libero perferendis incidunt?
                  </div>
                  <div className="item-action top-down delay-6">
                    <a href="#" className="btn btn-hover">
                      <i className="bx bxs-right-arrow"></i>
                      <span>Watch Now</span>
                    </a>
                  </div>
                </div>
              </div>
              {/* SLIDE ITEM CONTENT ENDS */}
            </div>
            {/* SLIDE ITEM ENDS */}

            {/* SLIDE ITEM BEGINS */}

            <div className="hero-slide-item">
              <img src="/images/shadow.jpg" alt="" />
              <div className="overlay"></div>
              {/* SLIDE ITEM CONTENT */}
              <div className="hero-slide-item-content">
                <div className="item-content-wrapper">
                  {/* TITLE */}
                  <div className="item-content-title top-down">
                    Shadow And Bone
                  </div>
                  {/* INFO CONTENT START */}
                  <div className="movie-infos top-down delay-2">
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
                  {/* INFO CONTENT END */}

                  <div className="item-content-description top-down delay-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                    nam distinctio ex quod fuga sapiente alias culpa animi iste
                    hic? Eum voluptatum reiciendis esse possimus. A asperiores
                    libero perferendis incidunt?
                  </div>
                  <div className="item-action top-down delay-6">
                    <a href="#" className="btn btn-hover">
                      <i className="bx bxs-right-arrow"></i>
                      <span>Watch Now</span>
                    </a>
                  </div>
                </div>
              </div>
              {/* SLIDE ITEM CONTENT ENDS */}
            </div>
            {/* SLIDE ITEM ENDS */}
            {/* SLIDE ITEM BEGINS */}

            <div className="hero-slide-item">
              <img src="/images/peaky.jpg" alt="" />
              <div className="overlay"></div>
              {/* SLIDE ITEM CONTENT */}
              <div className="hero-slide-item-content">
                <div className="item-content-wrapper">
                  {/* TITLE */}
                  <div className="item-content-title top-down ">
                    Peaky Blinders
                  </div>
                  {/* INFO CONTENT START */}
                  <div className="movie-infos top-down delay-2">
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
                  {/* INFO CONTENT END */}

                  <div className="item-content-description top-down delay-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                    nam distinctio ex quod fuga sapiente alias culpa animi iste
                    hic? Eum voluptatum reiciendis esse possimus. A asperiores
                    libero perferendis incidunt?
                  </div>
                  <div className="item-action top-down delay-6">
                    <a href="#" className="btn btn-hover">
                      <i className="bx bxs-right-arrow"></i>
                      <span>Watch Now</span>
                    </a>
                  </div>
                </div>
              </div>
              {/* SLIDE ITEM CONTENT ENDS */}
            </div>
            {/* SLIDE ITEM ENDS */}
            {/* SLIDE ITEM BEGINS */}

            <div className="hero-slide-item">
              <img src="/images/allofus.jpg" alt="" />
              <div className="overlay"></div>
              {/* SLIDE ITEM CONTENT */}
              <div className="hero-slide-item-content">
                <div className="item-content-wrapper">
                  {/* TITLE */}
                  <div className="item-content-title top-down ">
                    All Of Us Are Dead
                  </div>
                  {/* INFO CONTENT START */}
                  <div className="movie-infos top-down delay-2">
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
                  {/* INFO CONTENT END */}

                  <div className="item-content-description top-down delay-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                    nam distinctio ex quod fuga sapiente alias culpa animi iste
                    hic? Eum voluptatum reiciendis esse possimus. A asperiores
                    libero perferendis incidunt?
                  </div>
                  <div className="item-action top-down delay-6">
                    <a href="#" className="btn btn-hover">
                      <i className="bx bxs-right-arrow"></i>
                      <span>Watch Now</span>
                    </a>
                  </div>
                </div>
              </div>
              {/* SLIDE ITEM CONTENT ENDS */}
            </div>
            {/* SLIDE ITEM ENDS */}
          </OwlCarousel>
        </div>
      </div>
    </>
  );
}

export default Hero;
