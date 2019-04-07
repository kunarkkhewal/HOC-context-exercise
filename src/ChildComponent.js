import React from 'react';
import AuthenticationContext from '.AuthenticationContext/';
import InjectAuthentication from './InjectAuthentication';

const ChildComponent = props => {
    return(
        <div>
            <h2>Child Component</h2>
            <h3>checking is user is Authenticated: {props.isAuthenticated.toString()}</h3>
        </div>
    )
}

ChildComponent.contextType = AuthenticationContext;
export default InjectAuthentication(ChildComponent);