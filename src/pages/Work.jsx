import React from "react";

function Work() {
  return (
    <div className="sub-content pg__work">
      <h2 className="blind">본문</h2>
      <div className="page-title">
        <h3 className="page-title__tit">MY WORK</h3>
      </div>
      <div className="tab-wrap">
        <div className="inner">
          <ul className="tab-wrap__head">
            <li>전체</li>
            <li>피씨</li>
            <li>모바일</li>
            <li>반응형</li>
          </ul>
          <div className="tab-wrap__body">
            <div className="tab-wrap__cont">
              <div className="tab-wrap__img-wrap">
                <img src="" alt="" />
              </div>
              <div className="tab-wrap__txt-wrap">
                <p className="tab-wrap__tit"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
