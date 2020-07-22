import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './context/authContext';

function PrivateRoute({ component: Component, ...rest }) {

    // ta da set mac dinh la false
    const { authToken } = useAuth();
    return (
        <Route {...rest} render={(props) => (
            authToken ? <Component {...props} /> : <Redirect to="/login" />
        )}
        />
    );
}

export default PrivateRoute;