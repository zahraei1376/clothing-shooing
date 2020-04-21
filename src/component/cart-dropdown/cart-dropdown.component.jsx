import React from 'react';
import '../../sassStyle/components/cart-dropdown.styles.scss';
import CustomButton2 from '../../component/custome-button2/custome-button2.component';

const Cart=()=>(
    <div className='cart'>
        <div className='cart__items'></div>
        <CustomButton2  color='black'>GO TO CHECKOUT</CustomButton2>
        {/* <CustomButton color='black' className='card__btn'>GO TO CHECKOUT</CustomButton> */}
    </div>
);

export default Cart;