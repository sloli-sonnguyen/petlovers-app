import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './style.scss';
import axios from 'axios';
import { useAuth } from '../../../context/authContext';


function renderToast(success, msg) {
    if (success) {
        return (
            <div className="login-toast login-toast--success">{msg}</div>
        )
    } else {
        return (
            <div className="login-toast login-toast--fail">{msg}</div>
        )
    }
}


function LoginForm(props) {

    const [inputUser, setInputUser] = useState({ email: '', password: '' });
    const [statusLogin, setStatusLogin] = useState(null);
    const history = useHistory();
    const { authToken, setAuthToken } = useAuth();
    if (authToken) {
        history.push('/');
    }

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
        axios.post(url, inputUser).then(res => {
            const { data } = res;
            const { success, msg } = data;
            if (success) {
                // login ok
                /*
                    chúng ta set giá trị mặc định cho request header để từ lần sau trở đi,
                     ta gọi request với axios thì nó sẽ tự động gán header x-access-token
                */
                const { accessToken } = data;
                axios.defaults.headers.common['x-access-token'] = accessToken;
                // Lưu accessToken vào localstorage đẻ sau khi tắt browser , thì lần vào không cần login lại
                localStorage.setItem('accessToken', accessToken);
                // render lai toast
                setStatusLogin({ success, msg });
                setAuthToken(accessToken);
                history.push('/');

            } else {
                // login fail massage
                setStatusLogin({ success, msg });
            }
        })

    }


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
            <Link to="/signup" className="create-account">Đăng ký mới</Link>
        </form>
    );
}

export default LoginForm;