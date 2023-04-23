import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.action';
import '../../sassStyle/components/collection-item.styles.scss';
import CustomButton2 from '../custome-button2/custome-button2.component';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className='Collection_item'>
            <div className='Collection_item-img' style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className='Collection_item-footer'>
                <span className='Collection_item-footer-name'>{name}</span>
                <span className='Collection_item-footer-price'>{price}$</span>
            </div>
            <CustomButton2 onClick={() => addItem(item)} color='white'>add to cart</CustomButton2>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);