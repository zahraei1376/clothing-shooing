import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector';
import CollectionItem from '../../component/collectio-item/collection-item.component';

import '../../sassStyle/pages/collection.styles.scss';

const CollectionPage = ({ collection })=>{
    const {title , items} = collection;
    return(
    <div className='collectionPage'>
        <h2 className='collectionPage__title'>{title}</h2>
        <div className='collectionPage__items'>
            {
                items.map( item => <CollectionItem key = {item.id}  item={item}  /> )
            }
        </div>
    </div>
);}

const mapStateToProps = (state, ownProps) =>({
    collection:selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);