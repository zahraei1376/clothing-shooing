import React from 'react';
import '../../sassStyle/components/sign-in.styles.scss';
import CustomButton from '../custom-button/custome-button.component';
import FormInput from '../form-input/form-input.component';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            username: '',
            email: '',
            password: ''
        }
    }

    handleInput = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ email: '', password: '', name: '', username: '' });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2 className='sign-in__title margin-bottom-small'>I don't have an acount</h2>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='name' type='text' lable='name' value={this.state.name} handleChange={this.handleInput} required />
                    <FormInput name='email' type='email' lable='email' value={this.state.email} handleChange={this.handleInput} required />
                    <FormInput name='password' type='password' lable='password' value={this.state.password} handleChange={this.handleInput} required />
                    <FormInput name='username' type='text' lable='username' value={this.state.username} handleChange={this.handleInput} required />
                    <div className='buttons'>
                        <CustomButton type='submit' color='black'>Sign Up</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}


export default SignUp;