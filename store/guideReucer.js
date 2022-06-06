import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isSkipped: false
}

const isSkippedSlice = createSlice({
    name: "guide",
    initialState,
    reducers: {
        setIsSkipped(state) {
            state.isSkipped = !state.isSkipped;
        },
    },
})

export const { setIsSkipped } = isSkippedSlice.actions;
export default isSkippedSlice.reducer;