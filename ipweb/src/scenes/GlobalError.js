import React from 'react';
import { connect }  from 'react-redux';
import { Dimmer, Header, Icon } from 'semantic-ui-react';

const authenticationError = () => (
    <div>
        <Dimmer active={true} page>
            <Header as='h2' icon inverted>
                <Icon name='lock' />
                Ваша сессия истекла!
            </Header>
            <Header as='h3'><a href="/" >Войти снова</a></Header>
        </Dimmer>
    </div>
)

const GlobalError = (props) => {
    return props.errors.authenticationError && authenticationError()
}

export default connect(
    (state) => ({ errors: state.globalErrors }),
)(GlobalError);


