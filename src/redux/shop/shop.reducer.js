import ShopData from './shopData';

const INITIAL={
    collections:ShopData
}

const shopReducer = (state=INITIAL , action)=>{
    switch(action.type){
        default:
            return state;
    }
};

export default shopReducer;