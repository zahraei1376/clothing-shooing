import React from 'react';
import ShopData from './shopData';
import CollectionPreview from '../../component/preview-collction/preview-collection.component';
import Secondaryheader from '../../component/SecondaryNavigation/Secondaryheader.component';

class ShopPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            collections:ShopData,
        }
    }

    render(){
        const {collections}=this.state;
        return (
            <div>
                
                <Secondaryheader/>
                
                <div className="shopPage">
                    {collections.map(({id, ...othercollectionprops})=>(
                        <CollectionPreview key={id} {...othercollectionprops} />
                    ))}
                </div>
            </div>
            
        )
    }
}

export default ShopPage;