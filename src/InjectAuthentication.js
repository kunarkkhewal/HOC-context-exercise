import React from 'react';
import AuthenticationContext from './AuthenticationContext';

export default (WrappedComponent) => {
    return class AuthenticationHOC extends React.Component{
        static contextType = AuthenticationContext;
        render(){
            return(
                <WrappedComponent {...this.props} type={this.context.type} isAuthenticated={this.context.isAuthenticated} />
            )
        }
    }
}