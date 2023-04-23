import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import MySpinner from '../../component/MySpinner/MySpinner.component';
import Secondaryheader from '../../component/SecondaryNavigation/Secondaryheader.component';
import withSpinner from '../../component/with-spinner/with-spinner.components';

const CollectionOverview = lazy(() => import('../../component/collection-overview/collecion-overview.component'));
const CollectionPage = lazy(() => import('../../pages/collection/collection.component'));

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview)
const CollectionPageWithSpinner = withSpinner(CollectionPage)

class ShopPage extends React.Component {
    state = {
        loading: true
    };

    myfunc = () => {
        this.setState({ loading: false })
    }

    componentDidMount() {
        setTimeout(this.myfunc, 5000);
    }
    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (<div>
            <Secondaryheader />
            <div className="shopPage">
                <Suspense fallback={<MySpinner />}>
                    <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />} />
                    <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
                </Suspense>
            </div>
        </div>)
    }
};

export default ShopPage;