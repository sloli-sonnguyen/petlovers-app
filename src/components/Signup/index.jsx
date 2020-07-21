import React, { useState } from 'react';
import axios from 'axios';
import './style.scss';



function Signup(props) {

    const [inputUser, setInputUser] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        name: ''
    });

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
        const { password, confirmPassword } = inputUser;

        if (password.length < 6) {
            alert('Mat khau phai tu 6 ky tu !');
            return;
        }
        if (password !== confirmPassword) {
            alert('Mat khau khong khop');
        } else {
            console.log('Oke');
            const { name, email, password } = inputUser;
            const newUser = { name, email, password };
            const url = process.env.REACT_APP_API_URL + 'signup';
            axios.post(url, newUser).then(res => {
                console.log(res);
            })

        }
    }



    return (
        <div className="signup-wrap">
            <form className="signup-form" onSubmit={onHandleSubmit}>
                <h1>Đăng ký</h1>
                <input type="text" placeholder="Họ tên" required name="name" value={inputUser.name} onChange={inputHandle} />
                <input type="email" placeholder="Email" required name="email" value={inputUser.email} onChange={inputHandle} />
                <input type="password" placeholder="Mật khẩu" required name="password" value={inputUser.password} onChange={inputHandle} />
                <input type="password" placeholder="Nhập lại mật khẩu" required name="confirmPassword" value={inputUser.confirmPassword} onChange={inputHandle} />
                <button type="submit">Đăng ký</button>
            </form>
        </div>
    );
}

export default Signup;