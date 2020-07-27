import React from "react";
import "./style.scss";
import PropTypes from "prop-types";
import bellSVG from "../../../assets/images/menu/bell.svg";
import menuSVG from "../../../assets/images/menu/open-menu.svg";
import Menu from "../Menu/index";
import NotiBox from "./NotiBox";
import { useState } from "react";

Header.propTypes = {
  userLogined: PropTypes.object,
};

function Header(props) {
  const { userLogined } = props;
  const [menuStatus, setMenuStatus] = useState(false);
  const [notiBoxStatus, setNotiBoxStatus] = useState(false);

  function renderNav(userLogined) {
    const defaultAvatar =
      "https://iupac.org/wp-content/uploads/2018/05/default-avatar.png";
    if (userLogined) {
      return (
        <div className="header-content__navbar">
          <ul className="navbar__content">
            {/* <li className="navbar__item bell"><img src={bellSVG} onClick={() => setNotiBoxStatus(!notiBoxStatus)} alt="bell" /></li> */}
            <li className="navbar__item info">
              <div
                className="avatar"
                style={{
                  backgroundImage: `url(${
                    userLogined.avatarUrl || defaultAvatar
                  })`,
                }}
              ></div>
              <p>{userLogined.name}</p>
            </li>
            <li className="navbar__item navbar__menu">
              <img
                src={menuSVG}
                alt="menu"
                onClick={() => setMenuStatus(!menuStatus)}
              />
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="header-content__navbar">
          <ul className="navbar__content">
            <li className="navbar__item">Liên hệ</li>
            <li className="navbar__item">Hướng dẫn</li>
            <li className="navbar__item">Thông tin</li>
          </ul>
        </div>
      );
    }
  }

  return (
    <div className="header-wrap">
      {menuStatus && <Menu userInfo={userLogined} />}
      {notiBoxStatus && <NotiBox currentUserId={userLogined.id} />}
      <div className="header-content">
        <div className="header-content__title">
          <h1>Petlovers</h1>
          <h4>Ngôi nhà cho những người thích chó mèo !</h4>
        </div>
        {renderNav(userLogined)}
      </div>
    </div>
  );
}

export default Header;
