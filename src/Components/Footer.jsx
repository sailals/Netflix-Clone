import React from "react";

function Footer() {
  return (
    <>
      <footer className="section">
        <div className="container">
          <div className="row">
            <div className="col-4 col-md-6 col-sm-12">
              <div className="content">
                <a href="#" class="logo">
                  <i class="bx bx-movie-play bx-tada main-color"></i>NetFl
                  <span class="main-color">i</span>x
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  qui officiis, aliquam odio fuga pariatur quia magni sapiente
                  nulla repudiandae.
                </p>
                <div class="social-list">
                  <a href="#" class="social-item">
                    <i class="bx bxl-facebook"></i>
                  </a>
                  <a href="#" class="social-item">
                    <i class="bx bxl-twitter"></i>
                  </a>
                  <a href="#" class="social-item">
                    <i class="bx bxl-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-8 col-md-6 col-sm-12">
              <div class="row">
                <div class="col-3 col-md-6 col-sm-6">
                  <div class="content">
                    <p>
                      <b>NetFlix</b>
                    </p>
                    <ul class="footer-menu">
                      <li>
                        <a href="#">About us</a>
                      </li>
                      <li>
                        <a href="#">My profile</a>
                      </li>
                      <li>
                        <a href="#">Pricing plans</a>
                      </li>
                      <li>
                        <a href="#">Contacts</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-3 col-md-6 col-sm-6">
                  <div class="content">
                    <p>
                      <b>Browse</b>
                    </p>
                    <ul class="footer-menu">
                      <li>
                        <a href="#">About us</a>
                      </li>
                      <li>
                        <a href="#">My profile</a>
                      </li>
                      <li>
                        <a href="#">Pricing plans</a>
                      </li>
                      <li>
                        <a href="#">Contacts</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-3 col-md-6 col-sm-6">
                  <div class="content">
                    <p>
                      <b>Help</b>
                    </p>
                    <ul class="footer-menu">
                      <li>
                        <a href="#">About us</a>
                      </li>
                      <li>
                        <a href="#">My profile</a>
                      </li>
                      <li>
                        <a href="#">Pricing plans</a>
                      </li>
                      <li>
                        <a href="#">Contacts</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-3 col-md-6 col-sm-6">
                  <div class="content">
                    <p>
                      <b>Download app</b>
                    </p>
                    <ul class="footer-menu">
                      <li>
                        <a href="#">
                          <img src="./images/google-play.png" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="./images/app-store.png" alt="" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div class="copyright">Copyright 2022</div>
    </>
  );
}

export default Footer;
