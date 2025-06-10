import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { type User } from '../../types/defaultTypes.ts'

interface UserState {
    user: User | null,
    loading: boolean
    error: string | null
}

const initialState: UserState = {
    user: null,
    loading: false,
    error: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginRequest(state, _action: PayloadAction<{email: string; password: string}>) {
            state.loading = true
            state.error = null
        },
        loginSuccess(state, action: PayloadAction<{ id:number; email: string; username?: string }>) {
            state.loading = false
            state.user = action.payload
        },
        loginFailure(state, action: PayloadAction<string>) {
            state.loading = false
            state.error = action.payload
        },
        registerRequest(state, _action: PayloadAction<{ username: string; email: string; password: string}>) {
            state.loading = true
            state.error = null
        },
        registerSuccess(state) {
            state.loading = false
        },
        registerFailure(state, action: PayloadAction<string>) {
            state.loading = false
            state.error = action.payload
        },
        loadUserRequest(state){
            state.loading = true
            state.error = null
        },
        loadUserSuccess(state, action: PayloadAction<User>){
            state.loading = false
            state.user = action.payload
        },
        loadUserFailure(state, action: PayloadAction<string>) {
            state.loading = false
            state.user = null
            state.error = action.payload
        },
        logout(state){
            state.user = null
        },
        logoutFailure(state, action: PayloadAction<string>) {
            state.error = action.payload
        }
    }
})

export const {
    loginRequest,
    loginSuccess,
    loginFailure,
    registerRequest,
    registerSuccess,
    registerFailure,
    loadUserRequest,
    loadUserSuccess,
    loadUserFailure,
    logout,
    logoutFailure,
} = userSlice.actions
export default userSlice.reducer