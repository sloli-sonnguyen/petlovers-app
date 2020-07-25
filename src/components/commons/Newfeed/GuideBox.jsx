import React from 'react';
import catSleepPNG from '../../../assets/images/catsleep.png';
import PropTypes from 'prop-types';

GuideBox.propTypes = {
    userInfo: PropTypes.object,
};

function renderText(type, name) {
    if (type === 'profile') {
        return (
            <p className="guide-box__text">
                <span>{name}</span> chưa có bài viết nào !<br />
            </p>
        )
    } else {
        return (
            <p className="guide-box__text">
                <span>{name}</span> chưa theo dõi ai.<br /> Hãy theo dõi người khác để thấy những điều thú vị nhé !
            </p>
        )
    }
}

function GuideBox(props) {
    const { userInfo, type } = props;
    return (
        <div className="guide-box">
            <div className="guide-box__header">
                <p>Hướng dẫn</p>
            </div>
            <div className="guide-box__main">
                <div className="guide-box__image">
                    <img src={catSleepPNG} alt="cat-sleep" />
                </div>
                {renderText(type, userInfo.name)}
            </div>
        </div>
    );
}

export default GuideBox;