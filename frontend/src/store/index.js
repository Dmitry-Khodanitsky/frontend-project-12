import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'

const store = configureStore({
  reducer: {
    // Свойство auth будет внутри объекта общего состояния: state.autj
    auth: authReducer,
  },
})

export default store
