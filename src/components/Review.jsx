import React from 'react';
import Smile1 from '../assets/img/smile1.png';
import Smile2 from '../assets/img/smile2.png';
import Smile3 from '../assets/img/smile3.png';
import Star from '../assets/img/star.png';

function Review() {
  return (
    <>
      <section id="reviewType">
        <h2 className="ir_so"></h2>
        <h2>수업 후기</h2>
        <p>블랙탑 바리스타를 소개합니다.</p>
        <div className="review__inner container">
          <div className="review__box">
            <div className="desc">
              기초 바리스타 과정을 학습하고 카페 운영에 필요한 전반적인 교육을
              지원받았습니다. 감사합니다. 기초 바리스타 과정을 학습하고 카페
              운영에 필요한 전반적인 교육을 지원받았습니다. 감사합니다. 기초
              바리스타 과정을 학습하고 카페 운영에 필요한 전반적인 교육을
              지원받았습니다. 감사합니다.
            </div>
            <div className="title">
              <div className="title__inner">
                <span>
                  <img src={Smile1} alt="스마일" />
                </span>
                <h3>김여진</h3>
                <span>블랙탑1기</span>
              </div>
              <div className="star">
                <img src={Star} alt="별" />
              </div>
            </div>
            <a href="/" className="btn">
              자세히보기
            </a>
          </div>
          <div className="review__box">
            <div className="desc">
              기초 바리스타 과정을 학습하고 카페 운영에 필요한 전반적인 교육을
              지원받았습니다. 감사합니다. 기초 바리스타 과정을 학습하고 카페
              운영에 필요한 전반적인 교육을 지원받았습니다. 감사합니다. 기초
              바리스타 과정을 학습하고 카페 운영에 필요한 전반적인 교육을
              지원받았습니다. 감사합니다.
            </div>
            <div className="title">
              <div className="title__inner">
                <span>
                  <img src={Smile2} alt="스마일" />
                </span>
                <h3>김여진</h3>
                <span>블랙탑1기</span>
              </div>
              <div className="star">
                <img src={Star} alt="별" />
              </div>
            </div>
            <a href="/" className="btn">
              자세히보기
            </a>
          </div>
          <div className="review__box">
            <div className="desc">
              기초 바리스타 과정을 학습하고 카페 운영에 필요한 전반적인 교육을
              지원받았습니다. 감사합니다. 기초 바리스타 과정을 학습하고 카페
              운영에 필요한 전반적인 교육을 지원받았습니다. 감사합니다. 기초
              바리스타 과정을 학습하고 카페 운영에 필요한 전반적인 교육을
              지원받았습니다. 감사합니다.
            </div>
            <div className="title">
              <div className="title__inner">
                <span>
                  <img src={Smile3} alt="스마일" />
                </span>
                <h3>김여진</h3>
                <span>블랙탑1기</span>
              </div>
              <div className="star">
                <img src={Star} alt="별" />
              </div>
            </div>
            <a href="/" className="btn">
              자세히보기
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Review;
