import React from 'react';
import './style.scss';

function CreatePost(props) {
    return (
        <div className="create-post">
            <h1 className="create-post__title">Tạo bài viết</h1>
            <div className="create-post__content">
                <div className="avatar"></div>
                <p>Muki ơi, bạn đang nghĩ gì ?</p>
            </div>
        </div>
    );
}

export default CreatePost;