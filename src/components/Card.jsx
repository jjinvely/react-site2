import React from 'react';
import cardImg1 from '../assets/img/tutor01.jpg';
import cardImg2 from '../assets/img/tutor02.jpg';
import cardImg3 from '../assets/img/tutor03.jpg';

function Card() {
  return (
    <>
      <section id="cardType" className="card__wrap section nexon">
        <h2 className="ir_so">강사진 멤버</h2>
        <h2>블랙탑 강사진 멤버</h2>
        <p>
          국가 대표 최고의 강사진
          <br />
          우수한 교수진들의 높은 교육 완성도를 자랑합니다.
        </p>
        <div className="card__inner container">
          <article className="card">
            <figure className="card__header">
              <img className="img" src={cardImg1} alt="강사1" />
            </figure>
            <div className="card__body card_color01">
              <h3 className="title">원장 Sam</h3>
              <a className="btn" href="/">
                더 자세히 보기
              </a>
            </div>
          </article>
          <article className="card">
            <figure className="card__header ">
              <img className="img" src={cardImg2} alt="강사2" />
            </figure>
            <div className="card__body card_color02">
              <h3 className="title">부원장 Sella</h3>
              <a className="btn" href="/">
                더 자세히 보기
              </a>
            </div>
          </article>
          <article className="card">
            <figure className="card__header ">
              <img className="img" src={cardImg3} alt="강사3" />
            </figure>
            <div className="card__body card_color03">
              <h3 className="title">강사 James</h3>
              <a className="btn" href="/">
                <p>더 자세히 보기</p>
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default Card;
