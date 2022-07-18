import React from 'react';

function Slider() {
  return (
    <>
      <section id="sliderType" className="slider__wrap nexon">
        <h2 className="ir_so">슬라이드 영역</h2>
        <div className="slider__inner">
          <div className="slider">
            <div className="slider__img">
              <div className="desc">
                <h3>BLACK TOP</h3>
                <p>
                  커피의 나라를 기록하는 블랙탑
                  <br />
                  세계 각지에서 체험한 다양한 기록으로
                  <br />한 차원 높은 수준의 교육을 만듭니다.
                </p>
                <div className="btn">
                  <a href="/" className="white">
                    더 알아보기
                  </a>
                </div>
              </div>
            </div>
            <div className="slider__arrow">
              <a href="/" className="left">
                <span className="ir_pm">이전이미지</span>
              </a>
              <a href="/" className="right">
                <span className="ir_pm">다음이미지</span>
              </a>
            </div>
            <div className="slider__dot">
              <a href="/" className="dot active">
                <span className="ir_pm">1</span>
              </a>
              <a href="/" className="dot">
                <span className="ir_pm">2</span>
              </a>
              <a href="/" className="dot">
                <span className="ir_pm">3</span>
              </a>
              <a href="/" className="dot">
                <span className="ir_pm">4</span>
              </a>
              <a href="/" className="play">
                <span className="ir_pm">자동플레이</span>
              </a>
              <a href="/" className="stop">
                <span className="ir_pm">정지</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Slider;
