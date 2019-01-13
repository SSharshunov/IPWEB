import {
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    SIGNUP_RESEND_FAILURE,
    VERIFY_EMAIL_ERROR,
    SIGNIN_FAILURE,
    AUTH_USER,
    UNAUTH_USER
} from '../actions/actionTypes';

export default (state = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('id_token') ? true : false
}, action) => {
    switch (action.type) {
        case SIGNUP_SUCCESS:
            return { ...state, signup: true, error: {} };
        case SIGNUP_FAILURE:
            return { ...state, signup: false, error: { signup: action.payload } };
        case SIGNUP_RESEND_FAILURE:
            return { ...state, signup: true, error: { signupResend: action.payload } };
        case VERIFY_EMAIL_ERROR:
            return { ...state, signup: true, error: { verifyEmail: action.payload } };
        case SIGNIN_FAILURE:
            return { ...state, error: { signin: action.payload } };
        case AUTH_USER:
            return { ...state, isAuthenticated: true, error: {} };
        case UNAUTH_USER:
            return { ...state, isAuthenticated: false, error: {} };
        default:
            return state;
    }


};