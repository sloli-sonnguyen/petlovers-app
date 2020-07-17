import React from 'react';
import Header from '../commons/Header/index';
import LoginForm from './LoginForm/index';
import CatSVG from '../../assets/images/cat.svg';
import BoneSVG from '../../assets/images/bone.svg';
import FoodSVG from '../../assets/images/food.svg';
import BallSVG from '../../assets/images/ball.svg';

import './style.scss'
function Login() {
    return (
        <div className="login">
            <Header />
            <div className="main">
                <div className="main-container">
                    <div className="effect-wrap">
                        <div className="effect-content">
                            <img className="effect-content__svg" src={CatSVG} />
                            <div className="effect-content__box">
                                <div className="box__item"></div>
                                <div className="box__item"></div>
                                <div className="box__item">Meo meo ...</div>
                            </div>
                        </div>
                    </div>
                    <div className="login-form-wrap">
                        <LoginForm />
                    </div>
                </div>
            </div>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-container__item">
                        <img src={BallSVG} />
                    </div>
                    <div className="footer-container__item">
                        <img src={FoodSVG} />
                    </div>
                    <div className="footer-container__item">
                        <img src={BoneSVG} />
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Login;