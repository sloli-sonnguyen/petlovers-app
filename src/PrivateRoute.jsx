import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './context/authContext';
import { useEffect } from 'react';
import axios from 'axios';

function PrivateRoute({ component: Component, ...rest }) {

    // ta da set mac dinh la false
    const { authToken } = useAuth();

    useEffect(() => {
        if (authToken && localStorage.getItem('userInfo')) {
            let userInfo = JSON.parse(localStorage.getItem('userInfo'));
            const url = process.env.REACT_APP_API_URL + `users/${userInfo.id}/info`;
            axios.get(url).then(res => {
                // update userInfo
                const { avatarUrl, backgroundUrl, name } = res.data;
                userInfo = {
                    avatarUrl, backgroundUrl, name,
                    id: res.data._id
                }
                localStorage.setItem('userInfo', JSON.stringify(userInfo));
            })
        }
    });

    return (
        <Route {...rest} render={(props) => (
            authToken ? <Component {...props} /> : <Redirect to="/login" />
        )}
        />
    );
}

export default PrivateRoute;