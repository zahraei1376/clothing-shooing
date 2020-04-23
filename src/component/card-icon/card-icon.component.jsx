import React from 'react';
import {connect} from 'react-redux';

import '../../sassStyle/components/card-icon.styles.scss';
import ToggleCardHidden from '../../redux/cart/cart.action';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';
// import CartItem from '../cart-item/cart-item.component';

const CardIcon=({ToggleCardHidden,itemCount})=>(
    <div className='cardIcon' onClick={ToggleCardHidden}>
        {/* <svg class="cardIcon__icon">
            <use xlinkhref="./img/sprite.svg#icon-bookmark"></use>
        </svg> */}
        <p className="cardIcon__icon">icon</p>
        <span className='cardIcon__itemCount'>{itemCount}</span>
    </div>
);

const mapDistpachToProps= dispatch =>({
    ToggleCardHidden : () => dispatch(ToggleCardHidden())
})

// const mapStateToProps=({cart:{CartItems}})=>({
//  itemCount: CartItems.reduce(
//      (accumalateQuantity,CartItem)=>accumalateQuantity + CartItem.quantity,
//  0
//  )
// });

const mapStateToProps=(state)=>({
    itemCount : selectCartItemsCount(state)
})

export default connect(mapStateToProps,mapDistpachToProps)(CardIcon);