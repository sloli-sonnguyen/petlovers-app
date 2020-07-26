import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import worldSVG from '../../../assets/images/world.svg';
import heartSVG from '../../../assets/images/heart.svg';
import heartActiveSVG from '../../../assets/images/heart-active.svg';
import saveSVG from '../../../assets/images/save.svg';
import commentSVG from '../../../assets/images/comment.svg';
import TimeAgo from 'javascript-time-ago';
import vi from 'javascript-time-ago/locale/vi'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const baseUrl = process.env.REACT_APP_API_URL;

function convertTimeAgo(date) {
    TimeAgo.addLocale(vi);
    const timeAgo = new TimeAgo('vi');
    return timeAgo.format(new Date(date));
}

NewFeedItem.propTypes = {
    post: PropTypes.object,
    currentUserInfo: PropTypes.object
};

function NewFeedItem(props) {
    const defaultAvatar = 'https://iupac.org/wp-content/uploads/2018/05/default-avatar.png';
    const { _id, userId, caption, imageUrl, createAt } = props.post;
    const [postUser, setPostUser] = useState({});
    const [heartStatus, setHeartStatus] = useState(null);
    const [listReacts, setListReacts] = useState([]);
    const [reactContent, setReactContent] = useState([]);
    const { currentUserInfo } = props;

    useEffect(() => {
        axios.get(baseUrl + `users/${userId}/info`).then(res => {
            const data = res.data;
            setPostUser(res.data);
        });

        axios.get(baseUrl + `postReactions/${_id}/by-postId`).then(res => {
            res.data.forEach(item => {
                if (item.userId === currentUserInfo.id) {
                    setHeartStatus(item);
                }
            })

            setListReacts(res.data);

             // content react
            handleReactInfos(res.data);
        });

       

    }, [userId]);

    function onHandleLikePost() {
        const newReact = {
            postId: _id,
            userId: currentUserInfo.id,
            type: 'heart'
        };
        if (!heartStatus) {
            axios.post(baseUrl + 'postReactions', newReact).then(res => {
                setHeartStatus(newReact);
            });
        } else {
            console.log('react id,', heartStatus._id)
            axios.get(baseUrl + `postReactions/${heartStatus._id}/delete`).then(res => {
                setHeartStatus(null);
            });
        }
    }

    function handleReactInfos(reactsData) {
        let promises = [];
        let result = [];
        for(let i = 0; i < reactsData.length; i++){
            promises.push(axios.get(baseUrl + `users/${reactsData[i].userId}/info`));
        }

        axios.all(promises).then(resArr =>{
            result = resArr.map(res =>{
                return res.data.name;
            });
            // set content react
            setReactContent(result)
        });
       
    }


          
      

    console.log('list reacts', listReacts);

    return (
        <div className="newfeeds-item">
            <div className="newfeeds-item__header">
                <Link to={`/profile/${userId}`} className="avatar" style={{ backgroundImage: `url(${postUser.avatarUrl || defaultAvatar})` }}></Link>
                <div className="info">
                    <Link to={`/profile/${userId}`} className="user-name">{postUser._id === currentUserInfo.id ? currentUserInfo.name : postUser.name}</Link>
                    <p className="time">{convertTimeAgo(createAt)} • <img src={worldSVG} alt="world" /> </p>
                </div>
            </div>
            <div className="newfeeds-item__body">
                <p className="content">{caption}</p>
                {imageUrl && <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}></div>}
                {reactContent.length > 0 && <div className="react-info">
                    <span>{reactContent[0]}</span> và {reactContent.length - 1} người thích • 0 bình luận
                </div>}
            </div>
            <div className="newfeeds-item__react">
                <ul className="type-react">
                    <li onClick={onHandleLikePost} className={heartStatus ? 'heart-react--active' : ''}><img src={heartStatus ? heartActiveSVG : heartSVG} alt="heart" />Thích</li>
                    <li><img src={commentSVG} alt="comment" />Bình luận</li>
                    <li><img src={saveSVG} alt="save" />Lưu</li>
                </ul>
                <div className="comment">
                    <div className="avatar" style={{ backgroundImage: `url(${currentUserInfo.avatarUrl || defaultAvatar})` }}></div>
                    <input type="text" placeholder="Hãy bình luận gì đó . . ." />
                </div>
            </div>
        </div>

    );
}

export default NewFeedItem;