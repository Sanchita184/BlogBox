import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkMode: false
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleDarkTheme: (state) => {
            state.darkMode = !state.darkMode
        }
    }
})

export const { toggleDarkTheme } = themeSlice.actions
export default themeSlice.reducer