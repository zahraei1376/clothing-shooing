export const AddItemToCart=(cartItems,cartItemToAdd)=>{
   
    console.log(cartItems);
    console.log(cartItems.length);

    const findItem = cartItems.find(cardItem => cardItem.id === cartItemToAdd.id);
    if(findItem){
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? {...cartItem , quantity: cartItem.quantity + 1}
                : cartItem
            )
    }
    return [...cartItems, {...cartItemToAdd , quantity:1}]

    // if(cartItems.length>0){
    //     const findItem = cartItems.findOne(cardItem => cardItem.id === cartItemToAdd.id);
    //     if(findItem){
    //         return cartItems.map(cartItem =>
    //             cartItem.id === cartItemToAdd.id
    //                 ? {...cartItem , quantity: cartItem.quantity + 1}
    //                 : cartItem
    //             )
    //     }

    //     return [...cartItems, {...cartItemToAdd , quantity:1}]
    // } 
    // else{
    //     return [...cartItems, {...cartItemToAdd , quantity:1}]
    // }
};