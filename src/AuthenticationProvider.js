import AuthenticationContext from './AuthenticationContext';
import React from 'react';

const AuthenticationProvider = props => {
    return(
        <AuthenticationContext.Provider value={{isAuthenticated:true}}>
            {props.children}
        </AuthenticationContext.Provider>
    )
}

export default AuthenticationProvider;