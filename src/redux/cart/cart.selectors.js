import { createSelector } from 'reselect';

const selectCart=(state)=>state.cart;

const selectCartItem = createSelector(
    [selectCart],
    cart=>cart.CartItems
);

export const selectCartItemsCount=createSelector(
    [selectCartItem],
    (CartItems)=>CartItems.reduce(
        (accumalateQuantity,CartItem)=>accumalateQuantity + CartItem.quantity,
    0
    )
);