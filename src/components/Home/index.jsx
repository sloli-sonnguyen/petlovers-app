import React from 'react';
import './style.scss';
import Header from '../commons/Header/index';
import Menu from '../commons/Menu/index';
import CreatePost from './CreatePost/index';
import NewFeed from '../commons/Newfeed/index';
import FollowerBox from '../FollowerBox/index'

const user = {
    name: 'Murato',
    avatarUrl: 'https://news.cgtn.com/news/77416a4e3145544d326b544d354d444d3355444f31457a6333566d54/img/37d598e5a04344da81c76621ba273915/37d598e5a04344da81c76621ba273915.jpg'
}


function Home(props) {
    return (
        <div className="home-wrap">
            <Header userLogined={user} />
            <div className="main">
                <div className="main-container">
                    {/* <div className="main__menu">
                        <Menu />
                    </div> */}
                    <div className="main__content">
                        <CreatePost />
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