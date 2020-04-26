import React from 'react';
import '../../sassStyle/pages/sign-in-and-sign-up.styles.scss';
import SignIn from '../../component/sign-in/sign-in.component';
import Secondaryheader from '../../component/SecondaryNavigation/Secondaryheader.component';

const SignInSignUp=()=>(
    <div>
        <Secondaryheader/>
        <SignIn/>
    </div>
);

export default SignInSignUp;