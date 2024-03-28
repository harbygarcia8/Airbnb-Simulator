import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../models/user.model";

export const UserMEmptyState : User = {
    name: '',
    gender: '',
    status: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState: UserMEmptyState,
    reducers: {
        createUser: (state, action) => action.payload,
        modifyUser: (state, action) => ({...state, ...action.payload}),
        resetUser: () => UserMEmptyState

    }
})

export const { createUser, modifyUser, resetUser } = userSlice.actions;

export default userSlice.reducer;