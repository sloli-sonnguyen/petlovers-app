import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';


LoginForm.propTypes = {

};

function LoginForm(props) {
    return (
        <form className="login-form">
            <h1>Đăng nhập</h1>
            <input type="text" placeholder="Email" required />
            <input type="text" placeholder="Mật khẩu" required />
            <button>Đăng nhập</button>
            <div className="quick-login">
                <button>Google</button>
                <button>Facebook</button>
            </div>
            <p>Bạn chưa có tài khoản</p>
            <button className="create-account">Đăng ký mới</button>
        </form>
    );
}

export default LoginForm;