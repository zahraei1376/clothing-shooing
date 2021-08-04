import React from 'react';
import '../../sassStyle/components/sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custome-button.component';
import '../../sassStyle/base/_utiulities.scss';

// import {SignInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }

    handleInput=(event)=>{
        const{name,value}=event.target;
        this.setState({[name]:value})
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        this.setState({email:'',password:''});
    }

    render(){
        return(
            <div className='sign-in'>
                <h2 className='sign-in__title margin-bottom-small'>I already have an acount</h2>
                <span className='sign-in__subtitle margin-bottom-large'>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' lable='email' value={this.state.email} handleChange={this.handleInput} required/>
                    {/* <label>Email</label> */}
                    <FormInput name='password' type='password' lable='password' value={this.state.password} handleChange={this.handleInput} required/>
                    {/* <label>Password</label> */}
                    <div className='buttons'>
                        <CustomButton type='submit' color='black'>Sign In</CustomButton>
                        {/* <CustomButton onClick={SignInWithGoogle} isGoogleSignIn color='blue'>Sign In with Google</CustomButton> */}
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;