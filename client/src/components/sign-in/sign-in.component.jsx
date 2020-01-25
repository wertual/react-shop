import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../../components/form-input/form-input.component';

import CustomButton from '../custom-button/custom-button.component';
import { SignInContainer, TitleContainer, ButtonsContainer } from './sign-in.styles';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentails, setCredentials] = useState({ email: '', password: '' });
    const { email, password } = userCredentails;

    const handleSubmit = async (event) => {
        event.preventDefault();
        emailSignInStart(email, password);
    }

    const handleChange = event => {
        const { value, name } = event.target;
        setCredentials({ ...userCredentails, [name]: value });
    }

    return (
        <SignInContainer>
            <TitleContainer>I already have an account</TitleContainer>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit} method="post">
                <FormInput name="email" 
                    type="email" 
                    value={email} 
                    handleChange = { handleChange }
                    label = 'Email'
                    required />
                <FormInput name="password" 
                    type="password" 
                    value={password} 
                    handleChange  = { handleChange }
                    label = 'Password'
                    required />   

                <ButtonsContainer>
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
                        Sign In With Google
                    </CustomButton>
                </ButtonsContainer>                 

                
            </form>
        </SignInContainer> 
    );
    

    
}


const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(
        emailSignInStart({email, password})
        )
})

export default connect(null, mapDispatchToProps)(SignIn);