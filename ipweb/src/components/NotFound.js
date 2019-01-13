import React from 'react'
import {
    Divider,
    Header,
    Icon,
} from 'semantic-ui-react'

const NotFound = () => (
    <Header as='h2' icon inverted textAlign='center'
        style={{
            fontSize: '1.7em',
            fontWeight: 'normal',
            marginTop: '1.5em',
        }}>
        <Icon name='teal chain' />
        That happens not to be a page
        <Divider
                    as='h4'
                    className='header'
                    inverted
                    horizontal
                    style={{ textTransform: 'uppercase' }}
                >
                    Rewind and try another one
                </Divider>
    </Header>
);

export default NotFound;