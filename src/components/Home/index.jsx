import React from 'react';
import './style.scss';
import Header from '../commons/Header/index';
import CreatePost from './CreatePost/index';
import NewFeed from '../commons/Newfeed/index';
import FollowerBox from '../FollowerBox/index'





function Home(props) {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    return (
        <div className="home-wrap">
            <Header userLogined={userInfo} />
            <div className="main">
                <div className="main-container">
                    <div className="main__content">
                        <CreatePost userInfo={userInfo} />
                        <NewFeed />
                    </div>
                    <div className="main__follower">
                        <FollowerBox />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;