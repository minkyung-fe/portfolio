import React from "react";

function Contact() {
  return (
    <div className="sub-content pg__contact">
      <h2 className="blind">본문</h2>
      <div class="bg-motion">
        <div data-speed="1" class="bg-motion__circle bg-motion__blue"></div>
        <div
          data-speed="1.5"
          class="bg-motion__triangle bg-motion__blue2"></div>
        <div data-speed="1" class="bg-motion__square bg-motion__orange"></div>
        <div data-speed="1.5" class="bg-motion__circle bg-motion__yellow"></div>
        <div data-speed="1" class="bg-motion__triangle bg-motion__pink"></div>
        <div data-speed="1.5" class="bg-motion__square bg-motion__beige"></div>
        <div data-speed="2" class="bg-motion__circle bg-motion__orange"></div>
        <div
          data-speed="1.5"
          class="bg-motion__triangle bg-motion__beige"></div>
        <div data-speed="1" class="bg-motion__square bg-motion__blue"></div>
      </div>
      <div className="contact-wrap">
        <div className="inner">
          <div className="page-title">
            <h3 className="page-title__tit">CONTACT ME</h3>
          </div>
          <div className="contact-wrap__txt">
            <p>
              새로운기술을 위해 도약하는, <br class="only_mobile" />
              꼼꼼하고 완벽함을 추구하는, <br />
              회사의 발전을 위해 함께 도전하고싶습니다.
            </p>
            <p>010-4341-0841</p>
            <p>minkyung.fe@gmail.com</p>
            <address>서울시 동작구 사당동</address>
            <div class="contact-wrap__bunny"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
