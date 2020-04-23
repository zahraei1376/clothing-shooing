import CartActionType from './cart.types';
import { AddItemToCart } from './cart.utils';

const INITIAL_STATE={
    hidden:true,
    CartItems:[]
};

const CartReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case CartActionType.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden:!state.hidden
            }
        case CartActionType.ADD_ITEM:
            console.log(state.CartItems);
            return{
                ...state,
                CartItems: AddItemToCart(state.CartItems , action.payload)
                // CartItems: [...state.CartItems , action.payload]
            }
        default:
            return state
            
    }
};

export default CartReducer;