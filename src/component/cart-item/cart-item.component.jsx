import React from 'react';

import '../../sassStyle/components/cart-item.styles.scss';

const CartItem = ({item: {imageUrl, name, price ,quantity} }) => (
    <div className='carItem'>
        <img src={imageUrl} className='carItem__img' alt='item' />
        <div className='carItem__details'>
            <span className='carItem__details-name'>{name}</span>
            <span className='carItem__details-price'>{quantity} x ${price}</span>
        </div>
    </div>
);

export default CartItem;