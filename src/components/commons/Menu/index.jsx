import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import bellSVG from '../../../assets/images/menu/bell.svg';
import bookmarkSVG from '../../../assets/images/menu/bookmark.svg';
import eventSVG from '../../../assets/images/menu/event.svg';
import groupSVG from '../../../assets/images/menu/group.svg';
import homeSVG from '../../../assets/images/menu/home.svg';
import userSVG from '../../../assets/images/menu/user.svg';
import './style.scss';
//import PropTypes from 'prop-types';

// Menu.propTypes = {

// };

const list = [
    { title: 'Trang chủ', color: '#63D5FA', path: "/", icon: homeSVG },
    { title: 'Tài khoản', color: '#E8AB73', path: "/profile", icon: userSVG },
    // { title: 'Thông báo', color: '#14B1AB', path: "/notification", icon: bellSVG },
    // { title: 'Nhóm', color: '#B296EC', path: "/group", icon: groupSVG },
    // { title: 'Sự kiện', color: '#FC5E84', path: "/event", icon: eventSVG },
    // { title: 'Đã lưu', color: '#00E08F', path: "/bookmark", icon: bookmarkSVG }
];

function renderMenu(list, location) {
    return list.map((item, index) => {
        return (
            <li key={index} className={`menu__item ${location === item.path ? 'menu__item--active' : ''}`}>
                <Link to={item.path} className="link">
                    <div style={{ backgroundColor: item.color }} className="icon">
                        <img src={item.icon} alt="icon" />
                    </div>
                    <p>{item.title}</p>
                </Link>
            </li>
        )
    });
}

function Menu(props) {
    let location = useLocation();
    return (
        <div className="menu">
            <ul className="wrap-content">
                {renderMenu(list, location)}
            </ul>
        </div>
    );
}

export default Menu;