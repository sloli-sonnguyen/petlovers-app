import React from 'react';
import axios from 'axios';
import './style.scss';

function CreatePost(props) {
    const { userInfo } = props;
    const defaultAvatar = 'https://iupac.org/wp-content/uploads/2018/05/default-avatar.png';

    function onCreatePost() {
        const post = {
            imageUrl: 'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5de6f2d8c283810006a3947f%2F0x0.jpg',
            userId: userInfo.id,
            caption: 'Hom nay toi doi qua. An gi day nhi cac ban oi !',
            createAt: '22/07/2020'
        }
        const url = process.env.REACT_APP_API_URL + `posts`;
        axios.post(url, post)
            .then(res => {
                console.log(res);
            })
    }

    return (
        <div className="create-post">
            <h1 className="create-post__title">Tạo bài viết</h1>
            <div className="create-post__content">
                <div className="avatar" style={{ backgroundImage: `url(${userInfo.avatarUrl || defaultAvatar})` }}></div>
                <p>{userInfo.name} ơi, bạn đang nghĩ gì ?</p>
            </div>
            <button onClick={onCreatePost}>Create post</button>
        </div>
    );
}

export default CreatePost;