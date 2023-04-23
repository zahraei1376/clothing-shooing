import React from 'react';
import '../../sassStyle/components/button.style.scss';

const CustomButton2 = ({ children, color, inverted, ...otherProps }) => (
    <button className={`btn btn-${color}`} {...otherProps}>{children}</button>
);

export default CustomButton2;