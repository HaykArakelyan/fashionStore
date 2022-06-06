// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     products: async () => {
//         const data = await (await fetch("https://fakestoreapi.com/products")).json()
//         console.log(data);
//         return data;
//     }
// }

// const productsSlice = createSlice({
//     name: "products",
//     initialState,
//     reducers: {
//         getProducts(state) {
//             return state.products
//         }
//     }
// })

// export const { getProducts } = productsSlice.actions;
// export default productsSlice.reducer;   