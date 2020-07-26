import React from 'react';
import PropTypes from 'prop-types';

NotiBox.propTypes = {

};

function NotiBox(props) {
    const { currentUserId } = props;
    console.log(currentUserId);
    return (
        <div className="noti-box">
            <h1>Xin cho cac bans</h1>
        </div>
    );
}

export default NotiBox;