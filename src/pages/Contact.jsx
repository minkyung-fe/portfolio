import React from "react";
import BgMotion from "../components/BgMotion";

function Contact() {
  return (
    <div className="sub-content pg__contact">
      <h2 className="blind">본문</h2>
      <div className="bg-motion">
        <BgMotion type="01" />
        <BgMotion type="02" />
        <BgMotion type="03" />
        <BgMotion type="04" />
        <BgMotion type="05" />
        <BgMotion type="06" />
        <BgMotion type="07" />
      </div>
      <div className="contact-wrap">
        <div className="inner">
          <div className="page-title">
            <h3 className="page-title__tit">CONTACT ME</h3>
          </div>
          <div className="contact-wrap__txt">
            <p>
              새로운기술을 위해 도약하는, <br className="only_mobile" />
              꼼꼼하고 완벽함을 추구하는, <br />
              회사의 발전을 위해 함께 도전하고싶습니다.
            </p>
            <p>010-4341-0841</p>
            <p>minkyung.fe@gmail.com</p>
            <address>서울특별시</address>
            <div className="contact-wrap__bunny"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
