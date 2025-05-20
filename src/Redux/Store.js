import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import categoryReducer from '../features/counter/CategorySlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    category: categoryReducer,
  },
})