import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isSkipped: false
}

const isSkippedSlice = createSlice({
    name: "guide",
    initialState,
    reducers: {
        setIsSkipped(state) {
            state.isSkipped = true;
        },
    },
})

export const { setIsSkipped } = isSkippedSlice.actions;
export default isSkippedSlice.reducer;