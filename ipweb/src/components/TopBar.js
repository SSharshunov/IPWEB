import React, { Component } from 'react';
import { Menu, Segment, Header, Button, Container, Dropdown, Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Sidebar, Icon } from 'semantic-ui-react';
import  { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const TopBar = props => {
    const { isAuthenticated, privated, component } = props;

    if (privated) {
        return (
            <Segment inverted color='teal'>
                <Container>
                    <Menu inverted secondary color='teal'>
                        <Menu.Item name="" as={Link} to='/' />
                        <Menu.Item name="" as={Link} to='/messages' />
                        <Menu.Item name="" as={Link} to='/study_groups' />
                        <Menu.Item name="" as={Link} to='/users' />
                        <Menu.Item name="" as={Link} to='/settings' />
                        <Menu.Item name="" as={Link} to='/help' />
                        <Menu.Menu position='right'>
                            <Menu.Item style={{ padding: 0 }}>
                                <img alt='profile-img' style={{ borderRadius: 100 }} src='https://adminlte.io/themes/AdminLTE/dist/img/user2-160x160.jpg' />
                            </Menu.Item>
                            <Dropdown text='Alexander Pierce' pointing className='link item'>
                                <Dropdown.Menu>
                                    <Dropdown.Header>profile.my</Dropdown.Header>
                                    <Dropdown.Item as={Link} to='/profile'>nav.profile.change</Dropdown.Item>
                                    <Dropdown.Item>nav.profile.settings</Dropdown.Item>

                                    <Dropdown.Item>nav.profile.loginAs</Dropdown.Item>
                                    <Dropdown.Item>nav.profile.logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Menu.Menu>
                    </Menu>
                </Container>
            </Segment>
        )
    }
};

export default connect(state => ({
    isAuthenticated: state.auth.isAuthenticated
}))(TopBar);