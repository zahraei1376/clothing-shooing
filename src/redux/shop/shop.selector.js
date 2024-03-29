import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = collectionUrlparam => (
    createSelector(
        [selectCollections],
        collections => (collections ? collections[collectionUrlparam] : null)
    )
);

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)