import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface UserState {
    token: string | null
    loading: boolean
    error: string | null
}

const initialState: UserState = {
    token: null,
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
        loginSuccess(state, action: PayloadAction<string>) {
            state.loading = false
            state.token = action.payload
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
        }
    }
})

export const {
    loginRequest,
    loginSuccess,
    loginFailure,
    registerRequest,
    registerSuccess,
    registerFailure
} = userSlice.actions
export default userSlice.reducer