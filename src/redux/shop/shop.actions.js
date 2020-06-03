import shopActionTypes from './shop.types';

export const fetchCollectionsStart = () =>({
   type:shopActionTypes.FETCH_COLLECTION_START
});

export const fectchCollectionsCuccess = collectionMap =>({
    type:shopActionTypes.FETCH_COLLECTION_SECCUSS,
    payload:collectionMap
});

export const fectchCollectionsFailure = errorMessage =>({
    type:shopActionTypes.fectchCollectionsFailure,
    payload:errorMessage
});

export const fetchCollectionsStartAsync = () =>{
    return dispatch=> {
        dispatch(fetchCollectionsStart());
        // axios
        // .post(`https://jsonplaceholder.typicode.com/todos`, {
        //     title,
        //     userId,
        //     completed: false
        // })
        // .then(res => {
        //     dispatch(fectchCollectionsCuccess(res.data));
        // })
        // .catch(err => {
        //     dispatch(fectchCollectionsFailure(err.message));
        // });
    }
 }