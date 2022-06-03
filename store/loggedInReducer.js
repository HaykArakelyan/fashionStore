import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
}

const isLoggedInSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setIsLoggedIn(state) {
            state.isLoggedIn = true;
        }
    }
})

export const { setIsLoggedIn } = isLoggedInSlice.actions;
export default isLoggedInSlice.reducer;