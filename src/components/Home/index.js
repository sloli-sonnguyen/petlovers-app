import React from 'react';
import './style.scss';
import Header from '../commons/Header/index';
import Menu from '../commons/Menu/index';
import CreatePost from './CreatePost/index';
import NewFeed from '../commons/Newfeed/index';
import searchSVG from '../../assets/images/search.svg';



function Home(props) {
    return (
        <div className="home-wrap">
            <Header />
            <div className="main">
                <div className="main-container">
                    <div className="main__menu">
                        <Menu />
                    </div>
                    <div className="main__content">
                        <CreatePost />
                        <NewFeed />
                    </div>
                    <div className="main__follower">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;