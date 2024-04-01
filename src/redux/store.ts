/* eslint-disable @typescript-eslint/no-explicit-any */
import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './states/user.states'

export interface AppAirbnb {
    user: any;
}

export default configureStore<AppAirbnb>({
    reducer: {
        user: userSlice.reducer
    }
})