import { AuthState } from "./auth-state.model";
import { createSlice } from '@reduxjs/toolkit'


const initialAuthState = new AuthState(false);

const authSlice = createSlice({
    name: "authentication",
    initialState: initialAuthState,
    reducers: {
        login: (state): AuthState => {
            return {
                ...state,
                isAuthenticated: true
            }
        },
        logout: (state): AuthState => {
            return {
                ...state,
                isAuthenticated: false
            }
        },
    }
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;