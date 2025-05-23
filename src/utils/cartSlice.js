import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    
    reducers: {
        // mutating the state here (directly updating)
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            // RTK - either mutate the original state or mutate a new state
            // like state.items.length= 0 (or) return {items:[]} both are same 
            state.items.length = 0; // []
        },
    },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;