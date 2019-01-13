import { success } from 'react-notification-system-redux';

const notificationOpts = (text) => {
    // uid: 'once-please', // you can specify your own uid if required
    return {
        title: "RPC",
        message: text,
        position: 'tr',
        autoDismiss: 10
    }
};

const rcpClient = {
    endpoint: 'http://localhost:3000/RPC2',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        // "Expect: ": ""
    },
    config: {
        debug: true,
    },
};

let lastId = 0;

export const request = (method, params) => {
    const id = lastId++;

    const req = {
        method: "POST",
        headers: rcpClient.headers,
        body: JSON.stringify({
            jsonrpc: '2.0',
            id,
            method,
            params: params,
        }),
    };
    if (rcpClient.config.debug === true) {
        // eslint-disable-next-line no-console
        console.log('Executing request', lastId, 'to', rcpClient.endpoint, ':', req);
    }
    return fetch(rcpClient.endpoint, req)
}

export function getAwbOpts() {
    return (dispatch) => {
        dispatch({
            type: 'FETCH_TO_CHECK_BEGIN'
        });
        request('AWB.getopt', [])
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: 'GET_AWB_PARAMS',
                    payload: JSON.parse(data.result)
                });
                dispatch(
                    success(notificationOpts("AWB parameters loaded successful"))
                );
            })
            .catch(err => console.log(err));
    };
}

export function setAwbOpts(json_data) {
    return (dispatch) => {
        dispatch({
            type: 'FETCH_TO_CHECK_BEGIN'
        });
        request('AWB.setopt', json_data)
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: 'SET_AWB_PARAMS',
                    payload: JSON.parse(data.result)
                });
                dispatch(
                    success(notificationOpts(data.result))
                );
            })
            .catch(err => console.log(err));
    };
}

export function getAeOpts() {
    return (dispatch) => {
        dispatch({
            type: 'FETCH_TO_CHECK_BEGIN'
        });
        request('AE.getopt', [])
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: 'GET_AE_PARAMS',
                    payload: JSON.parse(data.result)
                });
                dispatch(
                    success(notificationOpts(data.result))
                );
            })
            .catch(err => console.log(err));
    };
}

export function getCcmOpts() {
    return (dispatch) => {
        dispatch({
            type: 'FETCH_TO_CHECK_BEGIN'
        });
        request('CCM.getopt', [])
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: 'GET_CCM_PARAMS',
                    payload: JSON.parse(data.result)
                });
                dispatch(
                    success(notificationOpts(data.result))
                );
            })
            .catch(err => console.log(err));
    };
}


export class RpcError extends Error {
    constructor(message, request, response) {
        super(message);

        this.name = 'RpcError';
        this.message = (message || '');
        this.request = request;
        this.response = response;
    }

    toString() {
        return this.message;
    }

    getRequest() {
        return this.request;
    }

    getResponse() {
        return this.response;
    }
}