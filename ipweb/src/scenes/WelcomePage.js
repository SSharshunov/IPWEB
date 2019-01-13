import React from 'react'
import {
    Divider,
    Header,
    Icon
} from 'semantic-ui-react'
import Notification from '../scenes/Notification'


const WelcomePage = () => (
    <div>
        <Header as='h2' icon inverted textAlign='center'
        style={{
                fontSize: '1.7em',
                fontWeight: 'normal',
                marginTop: '1.5em',
            }}>
            <Icon className='teal grid layout' />
            Social Search
            <Divider
                    as='h4'
                    className='header'
                    inverted
                    horizontal
                    style={{ textTransform: 'uppercase' }}
                >
                    Search all details about number
                </Divider>
        </Header>
        <Notification />


    </div>
);

export default WelcomePage;