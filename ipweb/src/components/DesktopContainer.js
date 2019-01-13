import React from 'react'
import {
    Container,
    Header,
    Menu,
    Segment,
} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import GAuth from './GAuth'

const style = {
    h1: {
        marginTop: '1em',
    },
    h2: {
        margin: '4em 0em 2em',
    },
    h3: {
        marginTop: '2em',
        padding: '2em 0em',
    },
    last: {
        marginBottom: '300px',
    },
}


const DesktopContainer = (props) => {
    return (
        <div>
            <Segment
                textAlign='center'
                style={{ padding: '1em 0em', borderBottom: 'none' }}
                vertical
            >
                <Menu
                    fixed={props.fixed ? 'top' : null}
                    pointing={!props.fixed}
                    secondary={!props.fixed}
                    size='large'
                    style={{borderBottom: 'none'}}
                >
                    <Container>
                        <Menu.Item as={NavLink} to={`/home`}>
                            Home
                        </Menu.Item>
                        <Menu.Item as={NavLink} to={`/checked`}>Realtime</Menu.Item>
                        <Menu.Item as={NavLink} to={`/tocheck`}>Archive</Menu.Item>
                        <Menu.Item as={NavLink} to={`/unnamed`}>Settings</Menu.Item>
                        <Menu.Item as={NavLink} to={`/configureAWB`}>ConfigureAWB</Menu.Item>
                        <GAuth enabled="true" {...props}/>
                    </Container>
                </Menu>
            </Segment>
            <Header as='h1' content='AWB options' style={style.h1} textAlign='center' />
            <Container style={{ marginTop: '1em' }}>
                <Segment>{props.children}</Segment>

            </Container>

        </div>
    )
}

export default DesktopContainer