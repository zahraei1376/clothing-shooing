import React from 'react';
import { Link } from 'react-router-dom';
import '../../sassStyle/components/preview-collection.component.style.scss';
import CollectionItem from '../collectio-item/collection-item.component';

const CollectionPreview = ({ title, items, routeName }) => (
    <div className='collection_preview'>
        <Link to={`/shop/${routeName}`} className='collection_preview-title'>{title.toUpperCase()}</Link>
        <div className='collection_preview-preview'>
            {
                items.filter((item, ind) => ind < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))
            }
        </div>
    </div>
)

export default CollectionPreview;