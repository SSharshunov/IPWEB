import * as types from '../actions/actionTypes';

const initState = {
    authenticationError: false,
};

export default (state = initState, action) => {
    switch (action.type) {
        case types.AUTHENTICATION_ERROR:
            return { ...state, authenticationError: true };
        default:
            return state;
  }
};