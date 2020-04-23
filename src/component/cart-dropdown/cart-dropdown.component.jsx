import React from 'react';
import { connect } from 'react-redux';

import '../../sassStyle/components/cart-dropdown.styles.scss';
import CustomButton2 from '../../component/custome-button2/custome-button2.component';
import CartItem from '../cart-item/cart-item.component';


const Cart=({CartItems})=>(
    <div className='cart'>
        <div className='cart__items'>
            {
                CartItems.map(cartItem=>(
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            }
        </div>
        <CustomButton2  color='black'>GO TO CHECKOUT</CustomButton2>
        {/* <CustomButton color='black' className='card__btn'>GO TO CHECKOUT</CustomButton> */}
    </div>
);

const mapStateToProps=({cart:{ CartItems }})=>({
    // CartItems
    CartItems:CartItems
})

export default connect(mapStateToProps)(Cart);