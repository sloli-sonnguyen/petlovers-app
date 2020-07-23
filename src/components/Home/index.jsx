import React, { useState } from 'react';
import './style.scss';
import axios from 'axios';
import { useEffect } from 'react';
import Header from '../commons/Header/index';
import CreatePost from './CreatePost/index';
import NewFeed from '../commons/Newfeed/index';
import FollowerBox from '../FollowerBox/index'





function Home(props) {

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const [followings, setFollowings] = useState([]);
    const [listNotFollowing, setListNotFollowing] = useState([]);

    useEffect(() => {
        console.log('run effect')
        const url_1 = process.env.REACT_APP_API_URL + `followings/by-userId/${userInfo.id}`;
        const url_2 = process.env.REACT_APP_API_URL + `users/get-info`;

        axios.get(url_1).then(res => {
            const data = res.data;
            const targetIds = data.map((item) => {
                return item.targetId;
            });
            setFollowings(data);

            axios.get(url_2).then(res => {
                const users = res.data;
                let newNotFollowingList = [];
                users.forEach(user => {
                    if (targetIds.indexOf(user._id) === -1 && user._id !== userInfo.id) newNotFollowingList.push(user);
                });
                setListNotFollowing(newNotFollowingList);
            });
        })

    }, []);

    return (
        <div className="home-wrap">
            <Header userLogined={userInfo} />
            <div className="main">
                <div className="main-container">
                    <div className="main__content">
                        <CreatePost userInfo={userInfo} />
                        <NewFeed type="home" followings={followings} />
                    </div>
                    <div className="main__follower">
                        <FollowerBox userInfo={userInfo} listNotFollowing={listNotFollowing} setListNotFollowing={setListNotFollowing} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;