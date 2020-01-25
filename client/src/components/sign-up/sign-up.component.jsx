import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

//import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';

import { SignUpContainer, TitleContainer } from './sign-up.styles';

const SignUp = ({ signUpStart }) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const {  displayName, email, password, confirmPassword } = userCredentials;
    

    const handleSubmit = async (event) => {
        event.preventDefault();       

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        signUpStart({displayName, email, password});        
    }

    const handleChange = event => {
        const { name, value } = event.target;

        setUserCredentials({ ...userCredentials,  [name]: value });

    }
            

    return (    
        <SignUpContainer>
            <TitleContainer>I do not have an account</TitleContainer>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit} autoComplete="off">
                <FormInput
                    type="text"
                    name="displayName"
                    value={ displayName }
                    onChange={handleChange}
                    label='Display Name'
                    required
                    autoComplete="false"
                />
                <FormInput
                    type="email"
                    name="email"
                    value={ email }
                    onChange={handleChange}
                    label='Email'
                    required
                    autoComplete="false"
                />
                <FormInput
                    type="password"
                    name="password"
                    value={ password }
                    onChange={handleChange}
                    label='Password'
                    required
                    autoComplete="false"
                />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={ confirmPassword }
                    onChange={handleChange}
                    label='Confirm Password'
                    required
                    autoComplete="false"
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </SignUpContainer>
    );
    
}


const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});


export default connect(null, mapDispatchToProps)(SignUp);  