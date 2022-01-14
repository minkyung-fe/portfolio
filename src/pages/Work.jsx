import React, { useState } from "react";
import data from "../data/portfolio.json";
import Modal from "../components/Modal";

function Work() {
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState();
  const [tab, setTab] = useState("t");

  const showModal = (portfolio) => {
    setModal(true);
    setModalData(portfolio);
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
              <li
                className={tab == "t" ? "is_active" : ""}
                onClick={() => {
                  setTab("t");
                }}>
                전체
              </li>
              <li
                className={tab == "t_pc" ? "is_active" : ""}
                onClick={() => {
                  setTab("t_pc");
                }}>
                피씨
              </li>
              <li
                className={tab == "t_mo" ? "is_active" : ""}
                onClick={() => {
                  setTab("t_mo");
                }}>
                모바일
              </li>
              <li
                className={tab == "t_responsive" ? "is_active" : ""}
                onClick={() => {
                  setTab("t_responsive");
                }}>
                반응형
              </li>
            </ul>
            <div className="tab-wrap__body">
              {data.portfolios
                .slice(0)
                .reverse()
                .filter((portfolio) => portfolio.tabType.indexOf(tab) >= 0)
                .map((portfolio) => (
                  <div
                    className="tab-wrap__cont"
                    key={portfolio.id}
                    onClick={() => {
                      showModal(portfolio);
                    }}>
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
      <Modal show={modal} data={modalData} onClose={onClose} />
    </>
  );
}

export default Work;
