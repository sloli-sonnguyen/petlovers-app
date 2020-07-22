import React, { useState } from 'react';
import cameraSVG from '../../../assets/images/camera.svg';
import editSVG from '../../../assets/images/edit.svg';
import { openUploadWidget } from '../../../utils/CloudinaryService';
import axios from 'axios';



function BoxInfo(props) {
    let setDefault = {
        backgroundUrl: 'https://img2.pngio.com/default-png-5-png-image-default-png-1200_800.png',
        avatarUrl: 'https://img2.pngio.com/index-of-wp-content-themes-fgm21-child-assets-images-default-png-495_495.png'
    }
    let getUserInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (!getUserInfo.backgroundUrl || !getUserInfo.avatarUrl) {
        getUserInfo = {
            ...getUserInfo,
            backgroundUrl: setDefault.backgroundUrl,
            avatarUrl: setDefault.avatarUrl
        };
    }
    const [userInfo, setUserInfo] = useState(getUserInfo);

    function beginUpload(type) {
        const uploadOptions = {
            cloudName: process.env.REACT_APP_CLOUD_NAME,
            uploadPreset: 'pnto4uty'
        };

        openUploadWidget(uploadOptions, (error, photos) => {
            if (!error) {
                if (photos.event === 'success') {
                    const { info } = photos;
                    const imageUrl = info.url;
                    const url = `http://localhost:5000/api/v1/users/5f11321771ec4d05949c81a7/update`;
                    // gui du lieu len server
                    if (type === 'avatar') {
                        const avatarUrl = imageUrl;
                        axios.post(url, avatarUrl).then(res => {
                            console.log('oke');
                        });
                        // set state 
                        setUserInfo({
                            ...userInfo,
                            avatarUrl: avatarUrl
                        });
                    } else {
                        const backgroundUrl = imageUrl;
                        axios.defaults.headers.common['x-access-token'] = localStorage.getItem('accessToken');
                        console.log(localStorage.getItem('accessToken'));
                        axios.post(url, backgroundUrl).then(res => {
                            console.log('sadasdas');
                            console.log(res);
                        });
                        setUserInfo({
                            ...userInfo,
                            backgroundUrl: backgroundUrl
                        });
                    }
                }
            } else {
                console.log(error);
            }
        })
    }

    return (
        <div className="box-info" style={{ backgroundImage: `url(${userInfo.backgroundUrl})` }}>
            <div className="upload" onClick={() => beginUpload('background')}>
                <img src={cameraSVG} alt="camera" />
                <p>Cập nhật ảnh bìa</p>
            </div>
            <div className="box-info__content">
                <div onClick={() => beginUpload('avatar')} className="avatar" style={{ backgroundImage: `url(${userInfo.avatarUrl})` }}></div>
                <p className="name">{userInfo.name}</p>
            </div>
            <div className="box-info__edit">
                <img src={editSVG} alt="edit" />
                <p>Cập nhật thông tin</p>
            </div>
        </div>
    );
}

export default BoxInfo;