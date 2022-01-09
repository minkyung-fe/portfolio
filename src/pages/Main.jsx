import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <div className="main-intro">
        <div className="main-intro__txt">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 200">
            <text
              x="50%"
              y="50%"
              text-anchor="middle"
              alignment-baseline="central">
              JEON MIN KYUNG
            </text>
          </svg>
        </div>
      </div>
      <div className="pg__main">
        <h2 className="blind">본문</h2>
        <section className="introduce-sec">
          <div className="inner">
            <div className="introduce-sec__txt-wrap">
              <p
                class="introduce-sec__txt"
                data-period="1500"
                data-rotate='["FRONT-END DEVELOPER", "WEB PUBLISHER"]'></p>
              <p class="introduce-sec__name">JEON MIN KYUNG.</p>
            </div>
            <div class="bg-motion">
              <div
                data-speed="1"
                class="bg-motion__circle bg-motion__blue"></div>
              <div
                data-speed="1.5"
                class="bg-motion__triangle bg-motion__blue2"></div>
              <div
                data-speed="1"
                class="bg-motion__square bg-motion__orange"></div>
              <div data-speed="1" class="bg-motion__emoji">
                <img
                  src={require("../assets/images/main_emoji01.png")}
                  alt=""
                />
              </div>
              <div data-speed="1" class="bg-motion__emoji">
                <img
                  src={require("../assets/images/main_emoji02.png")}
                  alt=""
                />
              </div>
              <div data-speed="2" class="bg-motion__emoji">
                <img
                  src={require("../assets/images/main_emoji03.png")}
                  alt=""
                />
              </div>
              <div data-speed="1" class="bg-motion__emoji">
                <img
                  src={require("../assets/images/main_emoji04.png")}
                  alt=""
                />
              </div>
              <div data-speed="1.5" class="bg-motion__emoji">
                <img
                  src={require("../assets/images/main_emoji05.png")}
                  alt=""
                />
              </div>
              <div data-speed="2" class="bg-motion__emoji">
                <img
                  src={require("../assets/images/main_emoji06.png")}
                  alt=""
                />
              </div>
              <div data-speed="1" class="bg-motion__emoji">
                <img
                  src={require("../assets/images/main_emoji07.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <section className="work-sec">
          <div className="work-sec__item work-sec__item_01">
            <div className="work-sec__img-wrap">
              <figure className="work-sec__img">
                <img src={require("../assets/images/main_work01.png")} alt="" />
              </figure>
              <div className="work-sec__hover">
                <a href="">
                  <p className="work-sec__txt"></p>
                </a>
              </div>
            </div>
          </div>
          <div className="work-sec__item work-sec__item_02"></div>
          <div className="work-sec__item work-sec__item_03"></div>
          <div className="work-sec__item work-sec__item_04"></div>
          <Link to="/work" className="work-sec__more">
            <div className="only_mobile">
              <span>VIEW MORE</span>
            </div>
            <div className="only_desktop">
              <div className="work-sec__circle">
                <circle-text r="85">
                  <svg
                    id="s"
                    height="170"
                    width="170"
                    viewBox="-85,-85,170,170">
                    <defs>
                      <path
                        id="p"
                        d="M-85,0 A85,85,0 1 1 85,0 A85,85,0 1 1 -85,0Z"></path>
                      <circle id="r" r="85"></circle>
                    </defs>
                    <text id="t">
                      <textPath id="tp">
                        more more more more more more more more more more more
                        more more more
                      </textPath>
                    </text>
                  </svg>
                </circle-text>
              </div>
              <div className="work-sec__circle-hover">
                <p>
                  <span>VIEW MORE</span>
                </p>
              </div>
            </div>
          </Link>
        </section>
        <section className="contact-sec">
          <Link to="/contact">
            <span>Contact me</span>
            <span>Contact me</span>
            <span>Contact me</span>
            <span>Contact me</span>
            <span>Contact me</span>
          </Link>
        </section>
      </div>
    </>
  );
}

export default Main;
