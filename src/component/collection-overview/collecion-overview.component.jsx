import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';

import '../../sassStyle/components/collecion-overview.styles.scss';
import CollectionPreview from '../preview-collction/preview-collection.component';

const CollectionOverview = ({ collections }) =>(
    <div className='CollectionOverview'>
        {collections.map(({id, ...othercollectionprops})=>(
            <CollectionPreview key={id} {...othercollectionprops} />
        ))}
    </div>
);

// const mapStateToProps = createStructuredSelector({
//     collections:selectCollections
// });

const mapStateToProps = createStructuredSelector({
    collections:selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);