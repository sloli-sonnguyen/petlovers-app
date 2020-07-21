import React from 'react';
import searchSVG from '../../assets/images/search.svg';
import './style.scss';


function FollowerBox(props) {
    return (
        <div className="follower-box">
            <h1 className="follower-box__title">Theo dõi</h1>
            <div className="follower-box__search">
                <input type="text" placeholder="Tìm kiếm ai đó . . . " />
                <button><img src={searchSVG} alt="search" /></button>
            </div>
            <div className="follower-box__list">
                <div className="follower-box__item">
                    <div className="avatar"></div>
                    <div className="info">
                        <p className="user-name">Murakami</p>
                        <p className="follower">Có 100 người theo dõi</p>
                    </div>
                    <button>Theo dõi</button>
                </div>
                <div className="follower-box__item">
                    <div className="avatar"></div>
                    <div className="info">
                        <p className="user-name">Murakami</p>
                        <p className="follower">Có 100 người theo dõi</p>
                    </div>
                    <button>Theo dõi</button>
                </div>
                <div className="follower-box__item">
                    <div className="avatar"></div>
                    <div className="info">
                        <p className="user-name">Murakami</p>
                        <p className="follower">Có 100 người theo dõi</p>
                    </div>
                    <button>Theo dõi</button>
                </div>
                <div className="follower-box__item">
                    <div className="avatar"></div>
                    <div className="info">
                        <p className="user-name">Murakami</p>
                        <p className="follower">Có 100 người theo dõi</p>
                    </div>
                    <button>Theo dõi</button>
                </div>
                <div className="follower-box__item">
                    <div className="avatar"></div>
                    <div className="info">
                        <p className="user-name">Murakami</p>
                        <p className="follower">Có 100 người theo dõi</p>
                    </div>
                    <button>Theo dõi</button>
                </div>
                <div className="follower-box__item">
                    <div className="avatar"></div>
                    <div className="info">
                        <p className="user-name">Murakami</p>
                        <p className="follower">Có 100 người theo dõi</p>
                    </div>
                    <button>Theo dõi</button>
                </div>
                <div className="follower-box__item">
                    <div className="avatar"></div>
                    <div className="info">
                        <p className="user-name">Murakami</p>
                        <p className="follower">Có 100 người theo dõi</p>
                    </div>
                    <button>Theo dõi</button>
                </div>
                <div className="follower-box__item">
                    <div className="avatar"></div>
                    <div className="info">
                        <p className="user-name">Murakami</p>
                        <p className="follower">Có 100 người theo dõi</p>
                    </div>
                    <button>Theo dõi</button>
                </div>
            </div>
        </div>
    );
}

export default FollowerBox;