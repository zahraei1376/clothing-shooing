import React from 'react';
import '../../sassStyle/components/form-input.styles.scss';

const FormInput = ({ handleChange, lable, ...otherprops }) => (
    <div className='group'>
        <input className='group__input' onChange={handleChange} {...otherprops} />
        {lable ? (<lable className={`${otherprops.value.length ? 'shirink' : ''
            } group__lable`}>{lable}</lable>) : null}
    </div>
);
export default FormInput;