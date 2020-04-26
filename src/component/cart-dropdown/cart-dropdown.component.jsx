import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import '../../sassStyle/components/cart-dropdown.styles.scss';
import CustomButton2 from '../../component/custome-button2/custome-button2.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItem } from '../../redux/cart/cart.selectors';
import { ToggleCardHidden} from '../../redux/cart/cart.action';


const Cart=({CartItems , history, dispatch})=>(
    <div className='cart'>
        <div className='cart__items'>
            {
                CartItems.length ?
                CartItems.map(cartItem=>(
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
                :
                <span className="emptyMessage">Your cart is Empty</span>
            }
        </div>
        <CustomButton2  color='black' onClick={()=>{
            history.push('/checkout')
            // dispatch(ToggleCardHidden())
            }}>GO TO CHECKOUT</CustomButton2>
        {/* <CustomButton color='black' className='card__btn'>GO TO CHECKOUT</CustomButton> */}
    </div>
);

// const mapStateToProps=({cart:{ CartItems }})=>({
//     // CartItems
//     CartItems:CartItems
// })

const mapStateToProps=(state)=>({
    CartItems:selectCartItem(state)
})

export default withRouter(connect(mapStateToProps)(Cart));