import React from 'react'
import { GoogleLogout, GoogleLogin } from 'react-google-login'
import { connect } from 'react-redux';
import { Menu, Icon } from 'semantic-ui-react';
import {clientId} from './client_id';

const loading = () => {
    console.log('loading') // eslint-disable-line
}

const GAuth = (props) => {
    const { isAuthenticated } = props
    let ret;
    if (isAuthenticated) {
        const user = JSON.parse(localStorage.getItem('user'))
        // console.log(user.w3.U3)
        ret = <Menu.Menu position='right'>
            <Menu.Item style={{ padding: 0 }}>
                <img alt='profile-img' style={{ borderRadius: 100 }} src={user.w3.Paa} />
            </Menu.Item>
                <Menu.Item name={user.w3.ig}/>
                <GoogleLogout
                    className="ui inverted button"
                    buttonText="Logout"
                    id="logout"
                    onLogoutSuccess={(response) => {
                        localStorage.clear();
                        props.dispatch({ type: "UNAUTH_USER" })}
                    }
                    role="button"
                    style={{  marginLeft: '0.5em'}}
                />
                </Menu.Menu>

    } else {
        ret = <Menu.Menu position='right'>
            <GoogleLogin
                clientId={clientId}
                onSuccess={(response) => {
                    // console.log(response)
                    localStorage.setItem('user', JSON.stringify(response));
                    props.dispatch({ type: "AUTH_USER" })}
                }
                onFailure={(response) => {
                    props.dispatch({ type: "SIGNIN_FAILURE" })}
                }
                onRequest={loading}
                offline={false}
                approvalPrompt="force"
                responseType="id_token"
                isSignedIn
                className="ui inverted button"
                role="button"
            >
                <Icon name='google' /><span>Log in</span>
            </GoogleLogin>
            </Menu.Menu>
    }
    return ret
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    errorMessage: state.auth.errorMessage
})

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GAuth)