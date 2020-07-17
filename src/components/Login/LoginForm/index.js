import React, { useEffect } from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import axiosAuth from '../../../api/axiosAuth';
import axios from 'axios';

LoginForm.propTypes = {

};

function LoginForm(props) {

    useEffect(() => {
        // console.log('hi');
        // axiosAuth.getLogin({
        //     email: 'daksd@gmail.com',
        //     password: 'asdasdasdas'
        // }).then(res => {
        //     console.log(res);
        // })
        const url = 'http://localhost:5000/api/v1/auth/login';
        axios.post(url, {
            email: 'loliud@gmail.com',
            password: 'toidicodedao'
        }).then(res => console.log(res));
    }, []);

    return (
        <form className="login-form">
            <h1>Đăng nhập</h1>
            <input type="text" placeholder="Email" required />
            <input type="text" placeholder="Mật khẩu" required />
            <button>Đăng nhập</button>
            {/* <div className="quick-login">
                <button>Google</button>
                <button>Facebook</button>
            </div> */}
            <p>Bạn chưa có tài khoản</p>
            <button className="create-account">Đăng ký mới</button>
        </form>
    );
}

export default LoginForm;