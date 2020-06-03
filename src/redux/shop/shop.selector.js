import { createSelector } from 'reselect';

// const COLLECTION_ID_MAP = {
//     hats:1 ,
//     sneakers:2,
//     jackets:3,
//     womens:4,
//     mens:5
// }

const selectShop = state =>state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview =createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key]) // object.key for  convert key object to array
)

// export const selectCollection = collectionUrlparam =>(
//     createSelector(
//         [selectCollections],
//         collections => collections[collectionUrlparam] //=>serach by object
//         // collections => collections.find( collection => collection.id === COLLECTION_ID_MAP[collectionUrlparam ]) =>serach by array
//     )
// )

export const selectCollection = collectionUrlparam =>(
    createSelector(
        [selectCollections],
        // collections => collections[collectionUrlparam]
        collections => (collections ? collections[collectionUrlparam] : null)
    )
);

export const selectIsCollectionFetching =createSelector(
    [selectShop],
    shop=>shop.isFetching
)