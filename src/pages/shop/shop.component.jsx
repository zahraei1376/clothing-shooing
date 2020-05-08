import React from 'react';
import { Route} from 'react-router-dom';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import { selectShopItems } from '../../redux/shop/shop.selector';
// import ShopData from './shopData';
// import CollectionPreview from '../../component/preview-collction/preview-collection.component';
import Secondaryheader from '../../component/SecondaryNavigation/Secondaryheader.component';
import CollectionOverview from '../../component/collection-overview/collecion-overview.component';
import CollectionPage from '../../pages/collection/collection.component';

// class ShopPage extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             collections:ShopData,
//         }
//     }

//     render(){
//         const {collections}=this.state;
//         return (
//             <div>
                
//                 <Secondaryheader/>
                
//                 <div className="shopPage">
//                     {collections.map(({id, ...othercollectionprops})=>(
//                         <CollectionPreview key={id} {...othercollectionprops} />
//                     ))}
//                 </div>
//             </div>
            
//         )
//     }
// }

const ShopPage = ({ match })=>(
    <div>
        <Secondaryheader/>
        <div className="shopPage">
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            {/* ///////////////////////// */}
            {/* <CollectionOverview/> */}
            {/* ///////////////////////// */}
            {/* {collections.map(({id, ...othercollectionprops})=>(
                <CollectionPreview key={id} {...othercollectionprops} />
            ))} */}
        </div>
    </div>
);

// const mapStateToProps = createStructuredSelector({
//     collections:selectShopItems
// });

// export default connect(mapStateToProps)(ShopPage);
export default ShopPage;