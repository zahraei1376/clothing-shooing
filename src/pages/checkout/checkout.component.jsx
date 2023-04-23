import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Secondaryheader from '../../component/SecondaryNavigation/Secondaryheader.component';
import CheckOteItem from '../../component/checkout-item/checkout-item.component';
import { selectCartItem, selectCartTotal } from '../../redux/cart/cart.selectors';
import '../../sassStyle/pages/checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => (
    <div>
        <Secondaryheader />
        <div className='checkout'>
            <div className='checkout__header'>
                <div className='checkout__header-block'>
                    <span>Product</span>
                </div>
                <div className='checkout__header-block'>
                    <span>Description</span>
                </div>
                <div className='checkout__header-block'>
                    <span>Quantity</span>
                </div>
                <div className='checkout__header-block'>
                    <span>Price</span>
                </div>
                <div className='checkout__header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => (
                    <CheckOteItem key={cartItem.id} cartItem={cartItem} />
                ))
            }

            <div className='total'>
                <span>TOTAL:${total}</span>
            </div>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItem,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);