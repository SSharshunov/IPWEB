import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import NotAuthorized from './NotAuthorized';

const RouteContainer = props => {
    const { isAuthenticated, privated, component } = props;
    let resp
    if (privated && !isAuthenticated) {
        resp = <Route {...props} component={NotAuthorized} />
    } else {
        resp = <Route {...props} component={component} />;
    }
    return resp;
};

export default connect(state => ({
    isAuthenticated: state.auth.isAuthenticated
}))(RouteContainer);