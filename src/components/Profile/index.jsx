import React from 'react';
import './style.scss';
import Header from '../commons/Header/index';
import NewFeed from '../commons/Newfeed/index';
import BoxInfo from './BoxInfo/index';
import Gallery from './Gallery/index';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';




function Profile(props) {

    // default khi user chua co avartar hay backgroud image
    const defaultBackgroundUrl = 'https://img2.pngio.com/default-png-5-png-image-default-png-1200_800.png';
    const defaultAvatarUrl = 'https://img2.pngio.com/index-of-wp-content-themes-fgm21-child-assets-images-default-png-495_495.png';

    const [userInfo, setUserInfo] = useState({});
    const { userId } = useParams();
    let getUserInfo = {}; // info cua nick dang dang nhap
    if (localStorage.getItem('userInfo')) {
        getUserInfo = JSON.parse(localStorage.getItem('userInfo'));
    }
    // setstorage

    useEffect(() => {
        const url = process.env.REACT_APP_API_URL + `users/${userId}/info`;
        axios.get(url).then(res => {
            let newUserInfo = {
                ...res.data
            };
            delete newUserInfo._id;
            newUserInfo = {
                ...newUserInfo,
                id: userId
            };
            // lay anh default neu chua co anh
            if (!newUserInfo.backgroundUrl) {
                newUserInfo = {
                    ...newUserInfo,
                    backgroundUrl: defaultBackgroundUrl,
                };
            }
            if (!newUserInfo.avatarUrl) {
                newUserInfo = {
                    ...newUserInfo,
                    avatarUrl: defaultAvatarUrl,
                };
            }
            setUserInfo(newUserInfo);
        })
    }, []);

    function onUploadImage(newUserInfo) {
        localStorage.setItem('userInfo', JSON.stringify(newUserInfo));
        setUserInfo(newUserInfo);
    }

    console.log(userInfo);
    return (
        <div className="profile-wrap">
            <Header userLogined={getUserInfo} />
            <div className="profile__main">
                <div className="container">
                    <BoxInfo userInfo={userInfo} onUploadImage={onUploadImage} isMe={getUserInfo.id === userId ? true : false} />
                    <div className="content">
                        <div className="newfeed-wrap">
                            <NewFeed userInfo={userInfo} type="profile" />
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