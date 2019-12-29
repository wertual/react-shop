import React from 'react';

import FormInput from '../../components/form-input/form-input.component';

import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
        
    }

    handleSubmit = event => {
        event.preventDefaut();

        this.setState({ email: '', password: '' });
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name] : value });
    }

    render() {
        return (
           <div className='sign-in'>
               <h2 className='title'>I already have an account</h2>
               <span>Sign in with your email and password</span>

               <form onSubmit={this.handleSubmit} method="post">
                   <FormInput name="email" 
                        type="email" 
                        value={this.state.email} 
                        handleChange = { this.handleChange }
                        label = 'Email'
                        required />
                   <FormInput name="password" 
                        type="password" 
                        value={this.state.password} 
                        handleChange  = { this.handleChange }
                        label = 'Password'
                        required />                    

                   <CustomButton type="submit">Sign In</CustomButton>
                   <CustomButton onClick={signInWithGoogle}>
                       Sign In With Google
                    </CustomButton>
               </form>
           </div> 
        )
    }

    
}


export default SignIn;