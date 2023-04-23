import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CustomButton2 from '../../component/custome-button2/custome-button2.component';
import ToggleCardHidden from '../../redux/cart/cart.action';
import { selectCartItem } from '../../redux/cart/cart.selectors';
import '../../sassStyle/components/cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';


const Cart = ({ CartItems, history, dispatch }) => (
    <div className='cart'>
        <div className='cart__items'>
            {
                CartItems.length ?
                    CartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                    :
                    <span className="emptyMessage">Your cart is Empty</span>
            }
        </div>
        <CustomButton2 color='black' onClick={() => {
            history.push('/checkout')
            dispatch(ToggleCardHidden())
        }}>GO TO CHECKOUT</CustomButton2>
    </div>
);

const mapStateToProps = (state) => ({
    CartItems: selectCartItem(state)
})

export default withRouter(connect(mapStateToProps)(Cart));