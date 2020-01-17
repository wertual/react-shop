import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

//import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';

import { SignUpContainer, TitleContainer } from './sign-up.styles';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { signUpStart } = this.props;
        const {  displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        signUpStart({displayName, email, password});        

        /*try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        } catch(error) {
            console.log(error);
        }*/
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });

    }

    render() {
        const {  displayName, email, password, confirmPassword } = this.state;

        return (    
            <SignUpContainer>
                <TitleContainer>I do not have an account</TitleContainer>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit} autoComplete="off">
                    <FormInput
                        type="text"
                        name="displayName"
                        value={ displayName }
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                        autoComplete="false"
                    />
                    <FormInput
                        type="email"
                        name="email"
                        value={ email }
                        onChange={this.handleChange}
                        label='Email'
                        required
                        autoComplete="false"
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={ password }
                        onChange={this.handleChange}
                        label='Password'
                        required
                        autoComplete="false"
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={ confirmPassword }
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                        autoComplete="false"
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </SignUpContainer>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});


export default connect(null, mapDispatchToProps)(SignUp);  