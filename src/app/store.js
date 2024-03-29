import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice"
import navigationReducer from "../features/auth/navigation/navigationSlice";

export default configureStore({
    reducer: {
        auth: authReducer,
        navigation: navigationReducer
    }
})