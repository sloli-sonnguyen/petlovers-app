import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import Header from '../commons/Header/index';
import Menu from '../commons/Menu/index';



function Home(props) {
    return (
        <div className="home-wrap">
            <Header />
            <div className="main">
                <div className="main__menu">
                    <Menu />
                </div>
                <div className="main__content">
                    {/* <div className="user-post"></div>
                    <div className="newfeeds">
                        <div className="newfeeds__item"></div>
                    </div> */}
                </div>
                <div className="main__follower"></div>
            </div>
        </div>
    );
}

export default Home;