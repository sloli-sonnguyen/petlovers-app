import React from 'react';
import './style.scss';
import Header from '../commons/Header/index';
import NewFeed from '../commons/Newfeed/index';
import BoxInfo from './BoxInfo/index';
import Gallery from './Gallery/index';
import { useState } from 'react';




function Profile(props) {

    // default khi user chua co avartar hay backgroud image
    const defaultBackgroundUrl = 'https://img2.pngio.com/default-png-5-png-image-default-png-1200_800.png';
    const defaultAvatarUrl = 'https://img2.pngio.com/index-of-wp-content-themes-fgm21-child-assets-images-default-png-495_495.png';
    // lay du lieu user da luu tren storage
    let getUserInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (!getUserInfo.backgroundUrl) {
        getUserInfo = {
            ...getUserInfo,
            backgroundUrl: defaultBackgroundUrl,
        };
    }
    if (!getUserInfo.avatarUrl) {
        getUserInfo = {
            ...getUserInfo,
            avatarUrl: defaultAvatarUrl,
        };
    }
    const [userInfo, setUserInfo] = useState(getUserInfo);
    // setstorage

    function onUploadImage(newUserInfo) {
        localStorage.setItem('userInfo', JSON.stringify(newUserInfo));
        setUserInfo(newUserInfo);
    }

    return (
        <div className="profile-wrap">
            <Header userLogined={userInfo} />
            <div className="profile__main">
                <div className="container">
                    <BoxInfo userInfo={userInfo} onUploadImage={onUploadImage} />
                    <div className="content">
                        <div className="newfeed-wrap">
                            <NewFeed userInfo={userInfo} />
                        </div>
                        <div className="gallery-wrap">
                            <Gallery />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;