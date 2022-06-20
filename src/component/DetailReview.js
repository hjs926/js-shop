import React from "react";

export default function DetailReview(props) {
  return (

      <div class="post-nav">
        <div className="post-option">
          <span className="post-optionLineOne "></span>
          <span className="post-optionLineTwo">
            <a href="#" className="header-shoppingCartLink">
              <Cart className="header-shoppingCart" icon={Cart} color="black" />
              <div className="header-shoppingCartCount">0</div>
            </a>
          </span>
        </div>
        <div className="header-option">
          <span className="header-optionLineOne "></span>
          <span className="header-optionLineTwo">
            <a href="#">찜리스트</a>
          </span>
        </div>
        <div className="header-option">
          <span className="header-optionLineOne ">
            <a href="#">로그인</a>
          </span>
          <span className="header-optionLineTwo">
            <a href="#">구매목록</a>
          </span>
        </div>
        <div className="header-option">
          <span className="header-optionLineOne ">
            <a href="#">회원가입</a>
          </span>
          <span className="header-optionLineTwo">
            <a href="#">로그아웃</a>
          </span>
        </div>
      </div>
    </div>
  );
}
