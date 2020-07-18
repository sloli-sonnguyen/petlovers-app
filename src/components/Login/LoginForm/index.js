import React, { useEffect, useState } from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import axios from 'axios';
LoginForm.propTypes = {

};

function renderToast(status, msg){
    if(status){
        return (
            <div className="login-toast login-toast--success">{msg}</div>
        )
    }else{
        return(
            <div className="login-toast login-toast--fail">{msg}</div>
        )
    }
}


function LoginForm(props) {

    const [inputUser, setInputUser] = useState({ email: '', password: '' });
    const [statusLogin, setStatusLogin] = useState({});

    function inputHandle(event) {
        const name = event.target.name;
        const value = event.target.value;
        const newInput = {
            ...inputUser,
            [name]: value
        }
        setInputUser(newInput);
    }

    function onHandleSubmit(event) {
        event.preventDefault();

        const url = process.env.REACT_APP_API_URL + 'login';
        console.log(process.env.REACT_APP_API_URL);
        axios.post(url, inputUser).then(res => {
            const { data } = res;
            const { success, msg } = data;
            if (success) {
                // login ok
                console.log(data.accessToken);
            } else {
                // login fail massage
                console.log(msg);
                setStatusLogin({
                    success,
                    msg
                });
            }
        })

    }
    console.log(statusLogin);

    return (
        <form className="login-form" onSubmit={onHandleSubmit}>
            {statusLogin && renderToast(statusLogin.success, statusLogin.msg)}
            <h1>Đăng nhập</h1>
            <input type="email" placeholder="Email" required name="email" value={inputUser.email} onChange={inputHandle} />
            <input type="password" placeholder="Mật khẩu" required name="password" value={inputUser.password} onChange={inputHandle} />
            <button type="submit">Đăng nhập</button>
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