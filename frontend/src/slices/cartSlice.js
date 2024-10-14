import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils";

const initialState = localStorage.getItem("cart") 
? JSON.parse(localStorage.getItem("cart")) 
: {cartItems : []};

//helper function, to make sure equal decimal everywhere in the pricing


const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart : (state, action) => {
            const item = action.payload;

            const existItem = state.cartItems.find((x) => x._id === item._id);

            if(existItem) {
                state.cartItems = state.cartItems.map((x) => x._id === existItem._id ? item : x);
            }
            //if not exist, add new items
            else{
        // state is immutable. Therefore, make a copy
                state.cartItems = [...state.cartItems,item];
            }
            return updateCart(state);
            
        },
    },
});

export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer;