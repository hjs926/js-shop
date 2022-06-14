import React from "react";
import "./Header.css";

export default function Header(props) {
  return (
    <div className="header">
      <div>
        <a href="#">
          <img className="header_logo" src="./logo-coffzag.png" alt="logo" />
        </a>
      </div>
      <div class="header-nav">
        <div className="header_option">
          <span className="header_optionLineOne"></span>
          <span className="header_optionLineTwo">
            <a href="#"></a>
          </span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne"></span>
          <span className="header_optionLineTwo">
            <a href="#">찜리스트</a>
          </span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">
            <a href="#">로그인</a>
          </span>
          <span className="header_optionLineTwo">
            <a href="#">구매목록</a>
          </span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">
            <a href="#">회원가입</a>
          </span>
          <span className="header_optionLineTwo">
            <a href="#">로그아웃</a>
          </span>
        </div>
      </div>
    </div>
  );
}
