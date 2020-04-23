import CartActionType from './cart.types';

const ToggleCardHidden=()=>({
    type:CartActionType.TOGGLE_CART_HIDDEN
});

export default ToggleCardHidden;

 export const addItem = item => ({
    type: CartActionType.ADD_ITEM,
    payload: item
});

// export default addItem;