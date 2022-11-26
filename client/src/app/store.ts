import { configureStore } from '@reduxjs/toolkit';
import ContactReducer from 'features/contact/slice';

export const store = configureStore({
    reducer: {
        contact: ContactReducer
    }
});