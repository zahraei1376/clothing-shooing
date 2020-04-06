import React from 'react';
import '../../sassStyle/components/preview-collection.component.style.scss';
import CollectionItem from '../collectio-item/collection-item.component';
const CollectionPreview=({title,items})=>(
    <div className='collection_preview'>
        <h1 className='collection_preview-title'>{title.toUpperCase()}</h1>
        <div className='collection_preview-preview'>
            {
                items.filter((item,ind)=>ind<4).map(({id,...otherItemProps})=>(
                    <CollectionItem key={id} {...otherItemProps} />
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;