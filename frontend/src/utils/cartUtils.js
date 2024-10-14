
const addDecimals= (num) => {
    return (Math.round(num * 100) / 100).toFixed();
}

export const updateCart = (state) => {
    //Calculate items price
    state.itemsPrice = addDecimals(state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0));


    //Calculate shipping price (If order is above Rs.500 then free, else Rs.40)
    state.shippingPrice = addDecimals(state.itemsPrice > 500 ? 0 : 40);


    //Calculate tax price(10% tax)
    state.taxPrice = addDecimals(Number((0.10 * state.itemsPrice).toFixed(2)));

    //Calculate total price
    state.totalPrice = (Number(state.itemsPrice) + Number(state.shippingPrice) + Number(state.taxPrice)).toFixed(2);

    localStorage.setItem('cart', JSON.stringify(state));


    return state;
}