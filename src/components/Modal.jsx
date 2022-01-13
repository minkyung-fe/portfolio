import React from "react";
import { Link } from "react-router-dom";

const Modal = (props) => {
  const show = props.show;
  const data = props.data;

  return (
    <>
      <div className={"modal" + (show ? " is_show" : "")}>
        {data && (
          <div className="modal__inner">
            <div className="modal__head">
              <h3 className="modal__tit">{data.tit}</h3>
              <p className="modal__info">{data.modal.info}</p>
            </div>
            <div className="modal__body">
              <div className="modal__thumb">
                <img src={require("../assets/images/" + data.imgURL)} alt="" />
              </div>
              <div className="modal__cont">
                <div className="modal__desc">
                  <h4 className="modal__sub-tit">Description</h4>
                  <div>{data.modal.desc}</div>
                </div>
                <div className="modal__project">
                  <h4 className="modal__sub-tit">Project Info</h4>
                  <dl>
                    <dt>Date</dt>
                    <dd>{data.modal.date}</dd>
                    <dt>Page</dt>
                    <dd>{data.modal.page}</dd>
                    <dt>Skills</dt>
                    <dd>{data.modal.skills}</dd>
                  </dl>
                  <Link to={data.modal.link} className="modal__btn">
                    <span>VISIT THE SITE</span>
                  </Link>
                </div>
              </div>
            </div>
            <button className="modal__close" onClick={props.onClose}>
              <span className="blind">팝업 닫기</span>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Modal;
