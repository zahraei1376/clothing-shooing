import React from 'react';
import '../../sassStyle/components/collection-item.styles.scss';

const CollectionItem=({id,name,price,imageUrl})=>(
    <div className='Collection_item'>
        <div className='Collection_item-img' style={{backgroundImage:`url(${imageUrl})`}}></div>
        <div className='Collection_item-footer'>
            <span className='Collection_item-footer-name'>{name}</span>
            <span className='Collection_item-footer-price'>{price}</span>
        </div>
    </div>
)

export default CollectionItem;