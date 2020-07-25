import React from 'react';
import searchSVG from '../../assets/images/search.svg';
import { Link } from 'react-router-dom';
import './style.scss';
import axios from 'axios';






function FollowerBox(props) {

    const { userInfo, listNotFollowing, setListNotFollowing } = props;


    function onHandleClick(index) {
        const newFollowing = {
            userId: userInfo.id,
            targetId: listNotFollowing[index]
        }
        const url = process.env.REACT_APP_API_URL + `followings`;
        axios.post(url, newFollowing).then(res => {


            const newListNotFollowing = [
                ...listNotFollowing
            ];
            newListNotFollowing.splice(index, 1);
            setListNotFollowing(newListNotFollowing.slice(0, 10));
        })


    }

    return (
        <div className="follower-box">
            <h1 className="follower-box__title">Theo dõi</h1>
            <div className="follower-box__search">
                <input type="text" placeholder="Tìm kiếm ai đó . . . " />
                <button><img src={searchSVG} alt="search" /></button>
            </div>
            <div className="follower-box__list">
                {
                    listNotFollowing.map((item, index) => {
                        return (
                            <div key={index} className="follower-box__item">
                                <Link to={`/profile/${item._id}`} className="avatar" style={{ backgroundImage: `url(${item.avatarUrl})` }}></Link>
                                <Link to={`/profile/${item._id}`} className="info">
                                    <p className="user-name">{item.name}</p>
                                </Link>
                                <button onClick={() => onHandleClick(index)}>Theo dõi</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default FollowerBox;