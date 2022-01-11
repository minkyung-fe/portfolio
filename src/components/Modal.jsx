import React, { useState } from "react";
import { Link } from "react-router-dom";

const Modal = (props) => {
  const show = props.show;
  console.log(props);

  return (
    <div className={"modal" + (show ? " is_show" : "")}>
      <div className="modal__inner">
        {/* <div className="modal__head">
          <h3 className="modal__tit">{props.tit}</h3>
          <p className="modal__info">{props.info}</p>
        </div>
        <div className="modal__body">
          <div className="modal__thumb">
            <img src={require("../assets/images/" + props.imgURL)} alt="" />
          </div>
          <div className="modal__cont">
            <div className="modal__desc">
              <h4 className="modal__sub-tit">Description</h4>
              <div>{props.desc}</div>
            </div>
            <div className="modal__info">
              <h4 className="modal__sub-tit">Project Info</h4>
              <dl>
                <dt>Date</dt>
                <dd>{props.date}</dd>
                <dt>Page</dt>
                <dd>{props.page}</dd>
                <dt>Skills</dt>
                <dd>{props.skiils}</dd>
              </dl>
              <Link to={props.link} className="modal__btn">
                <span>VISIT THE SITE</span>
              </Link>
            </div>
          </div>
        </div> */}
        <button className="modal__close" onClick={props.onClose}>
          <span className="blind">팝업 닫기</span>
        </button>
      </div>
    </div>
  );
};

export default Modal;
