import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custome-button.component';

import '../../sassStyle/components/sign-in.styles.scss';

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            username:'',
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
        this.setState({email:'',password:'',name:'',username:''});
    }

    render(){
        return(
            <div className='sign-in'>
                <h2 className='sign-in__title margin-bottom-small'>I don't have an acount</h2>
                {/* <span className='sign-in__subtitle margin-bottom-large'>Sign in with your email and password</span> */}

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='name' type='text' lable='name' value={this.state.name} handleChange={this.handleInput} required/>
                    <FormInput name='email' type='email' lable='email' value={this.state.email} handleChange={this.handleInput} required/>
                    {/* <label>Email</label> */}
                    <FormInput name='password' type='password' lable='password' value={this.state.password} handleChange={this.handleInput} required/>
                    <FormInput name='username' type='text' lable='username' value={this.state.username} handleChange={this.handleInput} required/>
                    {/* <label>Password</label> */}
                    <div className='buttons'>
                        <CustomButton type='submit' color='black'>Sign Up</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}


export default SignUp;