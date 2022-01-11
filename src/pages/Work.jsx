import React, { useState } from "react";
import data from "../data/portfolio.json";
import Modal from "../components/Modal";

function Work() {
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(true);
  };

  const onClose = () => {
    setModal(false);
  };

  return (
    <>
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
              {data.portfolios
                .slice(0)
                .reverse()
                .map((portfolio) => (
                  <div
                    className="tab-wrap__cont"
                    key={portfolio.id}
                    onClick={showModal}>
                    <div className="tab-wrap__img-wrap">
                      <img
                        src={require("../assets/images/" + portfolio.imgURL)}
                        alt=""
                      />
                    </div>
                    <div className="tab-wrap__txt-wrap">
                      <p className="tab-wrap__tit">{portfolio.tit}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Modal show={modal} onClose={onClose} />
    </>
  );
}

export default Work;
