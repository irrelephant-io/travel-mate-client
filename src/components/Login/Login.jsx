import React from 'react';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import AppleLogin from 'react-apple-login';

import './Login.css';

const Login = () => {
    const success = () => {
        console.log('Successful login')
    }

    const fail = () => {
        console.log('Login is failed')
    }

    return (
        <div className="loginContainer">
            <div className="login">
                <span>Login</span>
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" />
                <div>
                    <button>Login</button>
                </div>
            </div>

            <div className="ssoAuthContainer">
                <GoogleLogin
                    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                    onSuccess={success}
                    onFailure={fail}
                />
                <FacebookLogin
                    appId="1088597931155576"
                    autoLoad={true}
                    fields="name,email,picture"
                />
                <AppleLogin
                    clientId="com.react.apple.login"
                    redirectURI="https://redirectUrl.com" />
            </div>
        </div>
    )
}

export default Login;