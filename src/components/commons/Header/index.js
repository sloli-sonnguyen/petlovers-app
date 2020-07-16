import React from 'react';
import './style.scss'
//import PropTypes from 'prop-types';

// Header.propTypes = {

// };

function Header(props) {
    return (
        <div className="header-wrap">
            <div className="header-content">
                <div className="header-content__title">
                    <h1>Petlovers</h1>
                    <h4>Ngôi nhà cho những người thích chó mèo !</h4>
                </div>
                <div className="header-content__navbar">
                    <ul className="navbar__content">
                        <li className="navbar__item">Liên hệ</li>
                        <li className="navbar__item">Hướng dẫn</li>
                        <li className="navbar__item">Thông tin</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;