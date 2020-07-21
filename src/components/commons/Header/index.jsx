import React from 'react';
import './style.scss'
import PropTypes from 'prop-types';
import bellSVG from '../../../assets/images/menu/bell.svg';
import menuSVG from '../../../assets/images/menu/open-menu.svg';

Header.propTypes = {
    userLogined: PropTypes.object
};

function renderNav(userLogined) {
    if (userLogined) {
        return (
            <div className="header-content__navbar">
                <ul className="navbar__content">
                    <li className="navbar__item bell"><img src={bellSVG} alt="bell" /></li>
                    <li className="navbar__item info">
                        <div className="avatar" style={{ backgroundImage: `url(${userLogined.avatarUrl})` }}></div>
                        <p>{userLogined.name}</p>
                    </li>
                    <li className="navbar__item menu"><img src={menuSVG} alt="menu" /></li>
                </ul>
            </div>
        )
    } else {
        return (
            <div className="header-content__navbar">
                <ul className="navbar__content">
                    <li className="navbar__item">Liên hệ</li>
                    <li className="navbar__item">Hướng dẫn</li>
                    <li className="navbar__item">Thông tin</li>
                </ul>
            </div>
        )
    }
}

function Header(props) {
    const { userLogined } = props;
    return (
        <div className="header-wrap">
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