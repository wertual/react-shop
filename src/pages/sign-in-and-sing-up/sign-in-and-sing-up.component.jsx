import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import './sign-in-and-sing-up.styles.scss';

const SignInAndSingUp = () => (
    <div className="sign-in-and-sing-up">
        <SignIn /> 
        <SignUp />
    </div>
);


export default SignInAndSingUp;
