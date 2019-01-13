import React, { Component, PropTypes } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/auth';
import '../index.css';

const LoginForm = props => {
    const { handleSubmit } = props;
    const { dispatch, isAuthenticated, errorMessage } = props;

    const submit = (values) => {
        props.signinUser(values, props.history);
    };

    return (
        <div className='login-form'>
            {isAuthenticated &&
                <Redirect to='/multirole' />
            }

            <style>{`
                body > div,
                body > div > div,
                body > div > div > div.login-form {
                    height: 100%;
                }
            `}
            </style>
            <Grid
                textAlign='center'
                style={{ height: '100%' }}
                verticalAlign='middle'
            >
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        <Image src='icon_192x192.png' />
                        {' '}Log-in to your account
                    </Header>
                    <Form size='large' onSubmit={handleSubmit(submit)} >
                        <Segment >
                            <Field
                                name='iin' component={Form.Input} type='text'
                                fluid
                                icon='user'
                                iconPosition='left'
                                placeholder='E-mail address'
                            />
                            <Field
                                name='password' component={Form.Input}
                                icon='lock' iconPosition='left'
                                placeholder='Password'
                                type='password'
                            />
                            <Button
                                // onClick={(event) => this.handleClick(event)}
                                color='teal' fluid size='large'
                            >Login
                            </Button>
                        </Segment>
                    </Form>
                    <Message>
                        New to us? <a href='/register'>Sign Up</a>
                    </Message>
                </Grid.Column>
            </Grid>
        </div>
    );
};

function validate(formProps) {
    const errors = {};

    if (!formProps.email) {
        errors.iin = 'ID (IIN) is required';
    }

    if (!formProps.password) {
        errors.password = 'Password is required';
    }

    return errors;
}

const Login = (connect((state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    errorMessage: state.auth.errorMessage
}), actions)(reduxForm({
    form: 'login' // имя формы в state (state.form.login)
}, validate)(LoginForm)));

export default Login;