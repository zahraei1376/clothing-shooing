import React from 'react';
import {connect} from 'react-redux';

import '../../sassStyle/components/card-icon.styles.scss';
import ToggleCardHidden from '../../redux/cart/cart.action';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';
// import CartItem from '../cart-item/cart-item.component';

const CardIcon=({ToggleCardHidden,itemCount})=>(
    <div className='cardIcon' onClick={ToggleCardHidden}>
       <svg className='cardIcon__container' xmlns="http://www.w3.org/2000/svg">
            <path d="M16 6v2h2l2 12h-20l2-12h2v-2c0-3.314 2.686-6 6-6s6 2.686 6 6v0zM14 6c0-2.209-1.791-4-4-4s-4 1.791-4 4v0 2h8v-2zM4 10v2h2v-2h-2zM14 10v2h2v-2h-2z" className="cardIcon__container-icon"></path>
        </svg>
        {/* <p className="cardIcon__icon">icon</p> */}
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