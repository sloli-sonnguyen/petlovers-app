import React from 'react';
import { useState } from 'react';
import cameraSVG from '../../../assets/images/camera.svg';
import axios from 'axios';
import { openUploadWidget } from '../../../utils/CloudinaryService';



function BoxInput(props) {
    const { userInfo, onCloseInput } = props;
    const [post, setPost] = useState({
        userId: userInfo.id,
        createAt: new Date(),
        caption: '',
        imageUrl: ''
    });

    // upload len cloundinary va gui url ve
    function beginUpload() {
        const uploadOptions = {
            cloudName: process.env.REACT_APP_CLOUD_NAME,
            uploadPreset: 'pnto4uty'
        };

        openUploadWidget(uploadOptions, (error, photos) => {
            if (!error) {
                if (photos.event === 'success') {
                    const imageUrl = photos.info.url;
                    const newPost = {
                        ...post,
                        imageUrl: imageUrl
                    };
                    setPost(newPost);
                }
            } else {
                console.log(error);
            }
        })
    }

    // thay doi caption
    function onHandleInput(event) {
        const value = event.target.value;
        const newPost = {
            ...post,
            caption: value
        };
        setPost(newPost);
    }

    // post len server
    function onCreatePost() {

        const url = process.env.REACT_APP_API_URL + `posts`;
        axios.post(url, post)
            .then(res => {
                onCloseInput();
                window.location.reload(false);
            })
    }

    return (
        <div className="box-input">
            <div className="box-wrap">
                <textarea name="caption" value={post.caption} rows="6" cols="56" placeholder="Hãy nói gì đó ..." onChange={onHandleInput} />
                <div className="image">
                    {post.imageUrl && <img src={post.imageUrl} alt="postimage" />}
                </div>
                <div className="upload-image" onClick={beginUpload}>
                    <img src={cameraSVG} alt="camera" />
                </div>
                <div className="button">
                    <button onClick={() => onCloseInput(false)}>Hủy</button>
                    <button onClick={onCreatePost}>Đăng bài</button>
                </div>
            </div>
        </div>
    );
}

export default BoxInput;