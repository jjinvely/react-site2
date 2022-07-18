import React from 'react';
import Sns1 from '../assets/img/icon1.svg';
import Sns2 from '../assets/img/icon2.svg';
import Sns3 from '../assets/img/icon3.svg';
import Sns4 from '../assets/img/icon4.svg';
import Sns5 from '../assets/img/icon5.svg';

function Footer() {
  return (
    <>
      <footer id="footerType" className="footer__wrap section nexon gray">
        <h2 className="ir_so">푸터 영역</h2>
        <div className="footer__inner container">
          <div className="footer__wrap">
            <div className="footer_left">
              <div className="footer_info">
                <h3>BLACK TOP</h3>
                <ul>
                  <li>
                    <a href="/">개인정보처리방침</a>
                  </li>
                  <li>
                    <a href="/">이용약관</a>
                  </li>
                  <li>
                    <a href="/">사업자등록번호 431-85-01442</a>
                  </li>
                  <li>
                    <a href="/">T.02-702-3233</a>
                  </li>
                </ul>
              </div>
              <div className="icon">
                <ul>
                  <li>
                    <a href="/">
                      <img src={Sns1} alt="icon" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={Sns2} alt="icon" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={Sns3} alt="icon" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={Sns4} alt="icon" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={Sns5} alt="icon" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer__menu">
              <div>
                <h3>아카데미 소개</h3>
                <ul>
                  <li>
                    <a href="/">아카데미 소개</a>
                  </li>
                  <li>
                    <a href="/">오시는길</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3>차별화</h3>
                <ul>
                  <li>
                    <a href="/">블랙탑의 차별화</a>
                  </li>
                  <li>
                    <a href="/">최고의 강사진</a>
                  </li>
                  <li>
                    <a href="/">최상의 교육시설</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3>강의안내</h3>
                <ul>
                  <li>
                    <a href="/">개강 일정</a>
                  </li>
                  <li>
                    <a href="/">국비과정(NCS)</a>
                  </li>
                  <li>
                    <a href="/">일반과정 개강</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3>컨설팅</h3>
                <ul>
                  <li>
                    <a href="/">블랙탑 컨설팅</a>
                  </li>
                  <li>
                    <a href="/">창업센터</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3>커뮤니티</h3>
                <ul>
                  <li>
                    <a href="/">현장스케치</a>
                  </li>
                  <li>
                    <a href="/">공지사항</a>
                  </li>
                  <li>
                    <a href="/">이벤트</a>
                  </li>
                  <li>
                    <a href="/">sns</a>
                  </li>
                  <li>
                    <a href="/">건의함</a>
                  </li>
                  <li>
                    <a href="/">취업지원센터</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3>MY 블랙탑</h3>
                <ul>
                  <li>
                    <a href="/">트레이닝 룸 예약</a>
                  </li>
                  <li>
                    <a href="/">이수내역</a>
                  </li>
                  <li>
                    <a href="/">트렌드 소식지</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <address className="footer__address">
            ©2022 blacktop. All rights reserved.
          </address>
        </div>
      </footer>
    </>
  );
}

export default Footer;
