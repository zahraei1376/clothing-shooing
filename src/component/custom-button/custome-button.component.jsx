import React from 'react';
import '../../sassStyle/components/custome-button.styles.scss';

const CustomButton=({children,...otherProps})=>(
    <button className='customButton customButton-black' {...otherProps}>{children}</button>
);

export default CustomButton;