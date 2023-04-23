import { gql } from 'apollo-boost';
import React from 'react';
import { Query } from 'react-apollo';
import MySpinner from '../MySpinner/MySpinner.component';
import CollectionOverview from './collecion-overview.component';

const GET_COLLECTIONS = gql`
    {
        collections{
            id
            title
            items{
                id
                name
                price
                imageUrl
            }
        }
    }
`;

const CollectionOverviewContainer = () => (
    <Query query={GET_COLLECTIONS} >
        {
            ({ loading, data }) => {
                if (loading) return <MySpinner />
                return <CollectionOverview collections={data.collections} />
            }
        }
    </Query>
);

export default CollectionOverviewContainer;