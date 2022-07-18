import React from 'react';

function Header() {
  return (
    <>
      <header id="headerType" className="header__wrap nexon">
        <div className="header__inner">
          <h1 className="header__logo">
            <a href="/">BLACKTOP</a>
          </h1>
          <nav className="header__menu">
            <h2 className="ir_so">메인 메뉴</h2>
            <ul>
              <li>
                <a href="/">아카데미 소개</a>
              </li>
              <li>
                <a href="/">차별화</a>
              </li>
              <li>
                <a href="/">강의안내</a>
              </li>
              <li>
                <a href="/">컨설팅</a>
              </li>
              <li>
                <a href="/">커뮤니티</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
