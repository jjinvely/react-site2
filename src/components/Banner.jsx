import React from 'react';

function Banner() {
  return (
    <>
      <section id="bannerType" className="banner__wrap section gmarket">
        <h2 className="ir_so">배너 영역</h2>
        <div className="banner__inner">
          <h3 className="banner__title">BLACK TOP</h3>
          <p className="banner__desc">
            취업과 창업에 강한 BLACK TOP
            <br />
            소수 정예 교육으로 개인 수준에 따른 맞춤형 교육을 진행합니다.
            <a href="/">바로 가기</a>
          </p>
        </div>
      </section>
    </>
  );
}

export default Banner;
