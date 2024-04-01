import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../models";


export const UserMEmptyState : User = {
    id: 1,
    name: 'Harby García',
}

export const userSlice = createSlice({
    name: 'user',
    initialState: UserMEmptyState,
    reducers: {
        createUser: (_state, action) => action.payload,
        modifyUser: (state, action) => ({...state, ...action.payload}),
        resetUser: () => UserMEmptyState

    }
})

export const { createUser, modifyUser, resetUser } = userSlice.actions;

export default userSlice.reducer;