import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from '@/app/api/baseApi'
import authReducer from '@/features/auth/model/authSlice'
import uiReducer from './uiSlice'

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    // Свойство auth будет внутри объекта общего состояния: state.autj
    auth: authReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
})

export default store
