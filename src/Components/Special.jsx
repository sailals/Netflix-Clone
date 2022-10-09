import React from "react";

function Special() {
  return (
    <>
      <div className="special-section">
        <div className="hero-slide-item ">
          <img src="/images/peaky.jpg" alt="" />
          <div className="overlay"></div>
          {/* SLIDE ITEM CONTENT */}
          <div className="hero-slide-item-content">
            <div className="item-content-wrapper">
              {/* TITLE */}
              <div className="item-content-title">Peaky Blinders</div>
              {/* INFO CONTENT START */}
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
              {/* INFO CONTENT END */}

              <div className="item-content-description ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A nam
                distinctio ex quod fuga sapiente alias culpa animi iste hic? Eum
                voluptatum reiciendis esse possimus. A asperiores libero
                perferendis incidunt?
              </div>
              <div className="item-action">
                <a href="#" className="btn btn-hover">
                  <i className="bx bxs-right-arrow"></i>
                  <span>Watch Now</span>
                </a>
              </div>
            </div>
          </div>
          {/* SLIDE ITEM CONTENT ENDS */}
        </div>
      </div>
    </>
  );
}

export default Special;
