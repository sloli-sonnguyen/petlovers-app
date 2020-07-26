import React from 'react';
import './style.scss';
import { useState } from 'react';
import BoxInput from './BoxInput';

function CreatePost(props) {
    let { userInfo } = props;
    if (!userInfo) {
        userInfo = {};
    }
    const defaultAvatar = 'https://iupac.org/wp-content/uploads/2018/05/default-avatar.png';
    const [inputBoxStatus, setInputBoxStatus] = useState(false);

    return (
        <div className="create-post">
            {inputBoxStatus && <BoxInput onCloseInput={setInputBoxStatus} userInfo={userInfo} currentUserInfo={userInfo} />}
            <h1 className="create-post__title">Tạo bài viết</h1>
            <div className="create-post__content" onClick={() => setInputBoxStatus(true)}>
                <div className="avatar" style={{ backgroundImage: `url(${(userInfo.avatarUrl) || defaultAvatar})` }}></div>
                <p >{userInfo.name}  ơi, bạn đang nghĩ gì ?</p>
            </div>
        </div>
    );
}

export default CreatePost;