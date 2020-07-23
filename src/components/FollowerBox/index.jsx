import React from 'react';
import searchSVG from '../../assets/images/search.svg';
import './style.scss';
import { useState } from 'react';
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

            console.log(res);

            const newListNotFollowing = [
                ...listNotFollowing
            ];
            newListNotFollowing.splice(index, 1);
            setListNotFollowing(newListNotFollowing);
        })


    }

    console.log(listNotFollowing);
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
                                <div className="avatar" style={{ backgroundImage: `url(${item.avatarUrl})` }}></div>
                                <div className="info">
                                    <p className="user-name">{item.name}</p>
                                </div>
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