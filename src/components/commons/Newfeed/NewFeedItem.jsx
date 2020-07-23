import React from 'react';
import PropTypes from 'prop-types';
import worldSVG from '../../../assets/images/world.svg';
import likeSVG from '../../../assets/images/like.svg';
import saveSVG from '../../../assets/images/save.svg';
import commentSVG from '../../../assets/images/comment.svg';
import TimeAgo from 'javascript-time-ago';
import vi from 'javascript-time-ago/locale/vi'

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
    const { id, userId, caption, imageUrl, createAt } = props.post;
    const { currentUserInfo } = props;
    return (
        <div className="newfeeds-item">
            <div className="newfeeds-item__header">
                <div className="avatar" style={{ backgroundImage: `url(${currentUserInfo.avatarUrl || defaultAvatar})` }}></div>
                <div className="info">
                    <p className="user-name">{userId === currentUserInfo.id ? currentUserInfo.name : userId}</p>
                    <p className="time">{convertTimeAgo(createAt)} • <img src={worldSVG} alt="world" /> </p>
                </div>
            </div>
            <div className="newfeeds-item__body">
                <p className="content">{caption}</p>
                {imageUrl && <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}></div>}
                <div className="react-info">
                    <span>Muromi</span> và 2 người thích • 0 bình luận
                </div>
            </div>
            <div className="newfeeds-item__react">
                <ul className="type-react">
                    <li><img src={likeSVG} alt="like" />Thích</li>
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