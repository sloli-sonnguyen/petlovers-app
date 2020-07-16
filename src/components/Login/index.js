import React from 'react';
import Header from '../commons/Header/index';
import LoginForm from './LoginForm/index';
import CatSVG from '../../assets/images/cat.svg';
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
        </div>
    );
}

export default Login;