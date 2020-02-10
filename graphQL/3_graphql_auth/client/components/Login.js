import React, { Component } from 'react';
import AuthUser from './AuthUser';
import { graphql } from 'react-apollo';

import LoginUser from '../mutations/LoginUser';
import CurrentUserQuery from '../queries/CurrentUser'


class Login extends Component {
    
    onSubmit({email, password }) {
        this.props.mutate({
            variables: {
                email,
                password
            },
            refetchQueries: [
                {query: CurrentUserQuery}
            ]
        });
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <AuthUser onSubmit={this.onSubmit.bind(this)} />
            </div>
        )
    }
}

export default graphql(LoginUser)(Login);