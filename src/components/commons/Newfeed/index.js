import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import worldSVG from '../../../assets/images/world.svg';
import likeSVG from '../../../assets/images/like.svg';
import saveSVG from '../../../assets/images/save.svg';
import commentSVG from '../../../assets/images/comment.svg';
NewFeed.propTypes = {

};

function NewFeed(props) {
    return (
        <div className="newfeeds">
            <div className="newfeeds-item">
                <div className="newfeeds-item__header">
                    <div className="avatar"></div>
                    <div className="info">
                        <p className="user-name">Mukarumi</p>
                        <p className="time">2 giờ trước • <img src={worldSVG} alt="world" /> </p>
                    </div>
                </div>
                <div className="newfeeds-item__body">
                    <p className="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className="image"></div>
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
                        <div className="avatar"></div>
                        <input type="text" placeholder="Hãy bình luận gì đó . . ." />
                    </div>
                </div>
            </div>
            <div className="newfeeds-item">
                <div className="newfeeds-item__header">
                    <div className="avatar"></div>
                    <div className="info">
                        <p className="user-name">Mukarumi</p>
                        <p className="time">2 giờ trước • <img src={worldSVG} alt="world" /> </p>
                    </div>
                </div>
                <div className="newfeeds-item__body">
                    <p className="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className="image"></div>
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
                        <div className="avatar"></div>
                        <input type="text" placeholder="Hãy bình luận gì đó . . ." />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewFeed;