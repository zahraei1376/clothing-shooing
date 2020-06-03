import React from 'react';
import '../../sassStyle/pages/sign-in-and-sign-up.styles.scss';
import SignIn from '../../component/sign-in/sign-in.component';
import SignUp from '../../component/signup/signup.component';

import Secondaryheader from '../../component/SecondaryNavigation/Secondaryheader.component';

const SignInSignUp=()=>(
    <div>
        <Secondaryheader/>
        <div className='SignInSignUp'>
            <SignIn/>
            <SignUp/>
        </div>
    </div>
);

export default SignInSignUp;