import React from 'react';
import { connect } from 'react-redux';
import { ClearItemFromCart, RemoveItem, addItem } from '../../redux/cart/cart.action';
import '../../sassStyle/components/checkout-item.styles.scss';

const CheckOteItem = ({ cartItem, clearItem, addItem, RemoveItem }) => {
    const { imageUrl, name, quantity, price } = cartItem;
    return (
        <div className='checkOutItem'>
            <div className='checkOutItem__imageContainer'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='checkOutItem__name'>{name}</span>
            <span className='checkOutItem__quantity'>
                <div className='checkOutItem__quantity-arrow' onClick={() => RemoveItem(cartItem)}>&#10094;</div>
                <div className='checkOutItem__quantity-value'>{quantity}</div>
                <div className='checkOutItem__quantity-arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className='checkOutItem__price'>{price}</span>
            <div className='checkOutItem__removeButton' onClick={() => clearItem(cartItem)}>&#10005;</div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(ClearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    RemoveItem: item => dispatch(RemoveItem(item))
})

export default connect(null, mapDispatchToProps)(CheckOteItem);