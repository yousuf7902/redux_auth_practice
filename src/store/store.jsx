import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice.jsx";

const store = configureStore({
    reducer: {
        authLogin: authReducer,
    },
});

export default store;
