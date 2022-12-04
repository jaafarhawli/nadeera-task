import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: {
            name: '',
            birthday: '',
            picture: ''
        }
    },
    reducers: {
        viewUser: (state, action) => {
            state.value = {
                ...state.value,
                ...action.payload
            }
        }
    }
});

export const {viewUser} = userSlice.actions;

export default userSlice.reducer;