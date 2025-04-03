import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './CartSlice';
import productSlice form './ProductSlice'

const store = configureStore({
    reducer: {
        cart : cartSlice,
        product : productSlice
    }
})