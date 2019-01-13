import React from 'react';
import { Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { ConnectedRouter } from 'connected-react-router'
import RouteContainer from '../components/RouteContainer';
import DesktopContainer from '../components/DesktopContainer';
import { history } from '../index';
import routes from '../routes';
import { Redirect } from 'react-router-dom';

import GlobalError from './GlobalError';
import Notification from './Notification';
import { connect } from 'react-redux'

const App = (props) => (
    <div>
        <ConnectedRouter history={history} basename='/'>
            <DesktopContainer>
                <Switch>
                    <Redirect exact from="/" to="/home"/>
                    {routes.map((route, index) => (
                        <RouteContainer
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            privated={route.privated}
                            component={route.component}
                        />
                    ))}
                </Switch>
            </DesktopContainer>
        </ConnectedRouter>
        <GlobalError errors={props.errors} />
        <Notification notifications={props.notifications} />
    </div>
);

export default connect(state => ({
    isAuthenticated: state.auth.isAuthenticated
}))(App);