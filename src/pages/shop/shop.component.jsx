import React from 'react';
import { Route} from 'react-router-dom';
// import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selector';
import {fetchCollectionsStartAsync} from '../../redux/shop/shop.actions';

// import { selectShopItems } from '../../redux/shop/shop.selector';
// import ShopData from './shopData';
// import CollectionPreview from '../../component/preview-collction/preview-collection.component';
import Secondaryheader from '../../component/SecondaryNavigation/Secondaryheader.component';
import CollectionOverview from '../../component/collection-overview/collecion-overview.component';
import CollectionPage from '../../pages/collection/collection.component';



import withSpinner from '../../component/with-spinner/with-spinner.components';
import { render } from '@testing-library/react';
import collecionOverviewComponent from '../../component/collection-overview/collecion-overview.component';

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
///////////////////////////////////////////
// const ShopPage = ({ match })=>(
//     <div>
//         <Secondaryheader/>
//         <div className="shopPage">
//             <Route exact path={`${match.path}`} component={CollectionOverview} />
//             <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
//             {/* ///////////////////////// */}
//             {/* <CollectionOverview/> */}
//             {/* ///////////////////////// */}
//             {/* {collections.map(({id, ...othercollectionprops})=>(
//                 <CollectionPreview key={id} {...othercollectionprops} />
//             ))} */}
//         </div>
//     </div>
// );
// ////////////////////////////////////////////

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview)
const CollectionPageWithSpinner = withSpinner(CollectionPage)

class ShopPage extends React.Component{
    // constructor(){
    //     super();
    //     this.state={
    //         loading:true
    //     }
    // }

    state={
        loading:true
    };

    myfunc = () =>{
        this.setState({loading:false})
    }

    componentDidMount(){
        // this.setState({loading:false});
        setTimeout(this.myfunc , 5000);
        // const { fetchCollectionsStartAsync }= this.props;
        // fetchCollectionsStartAsync();
    }
    render(){
        const { match } = this.props;
        const { loading } = this.state;
        return(<div>
            
            <Secondaryheader/>
            <div className="shopPage">
                {/* <Route exact path={`${match.path}`} component={CollectionOverview} /> */}
                <Route exact path={`${match.path}`} render = {(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />} />
                {/* <Route path={`${match.path}/:collectionId`} component={CollectionPage} /> */}
                <Route path={`${match.path}/:collectionId`} render = {(props)=><CollectionPageWithSpinner isLoading={loading} {...props} />} />
                {/* ///////////////////////// */}
                {/* <CollectionOverview/> */}
                {/* ///////////////////////// */}
                {/* {collections.map(({id, ...othercollectionprops})=>(
                    <CollectionPreview key={id} {...othercollectionprops} />
                ))} */}
            </div>
        </div>)
    }
};
// //////////////////////////////////////////////////////
// const mapStateToProps = createStructuredSelector({
//     collections:selectShopItems
// });

// export default connect(mapStateToProps)(ShopPage);
// //////////////////////////////////////////////////////

// const mapStateToProps = createStructuredSelector({
//     IsCollectionsfetching:selectIsCollectionFetching
// });

// const mpDispatchToProps = dispatch =>({
//     fetchCollectionsStartAsync:()=>dispatch(fetchCollectionsStartAsync)
// })

// export default connect(mapStateToProps)(ShopPage);
export default ShopPage;