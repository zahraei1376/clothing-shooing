import React from 'react';
import '../../sassStyle/components/custome-button.styles.scss';

const CustomButton=({children,isGoogleSignIn,color,...otherProps})=>(
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} customButton customButton-${color}`} {...otherProps}>{children}</button>
);

export default CustomButton;