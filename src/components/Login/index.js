import React from 'react';
import Header from '../commons/Header/index';
import LoginForm from './LoginForm/index';
function Login() {
    return (
        <div className="login">
            <Header />
            <div className="main">
                <div className="main-container">
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}

export default Login;