import React from 'react';
import {connect} from 'react-redux';

import '../../sassStyle/components/card-icon.styles.scss';
import ToggleCardHidden from '../../redux/cart/cart.action';

const CardIcon=({ToggleCardHidden})=>(
    <div className='cardIcon' onClick={ToggleCardHidden}>
        {/* <svg class="cardIcon__icon">
            <use xlinkhref="./img/sprite.svg#icon-bookmark"></use>
        </svg> */}
        <p className="cardIcon__icon">icon</p>
        <span className='cardIcon__itemCount'>0</span>
    </div>
);

const mapDistpachToProps= dispatch =>({
    ToggleCardHidden : () => dispatch(ToggleCardHidden())
})

export default connect(null,mapDistpachToProps)(CardIcon);