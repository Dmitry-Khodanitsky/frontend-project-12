import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from '@/app/api/baseApi'
import authReducer from '@/features/auth/model/authSlice'
import channelsSlice from '@/store/channelsSlice'
import messagesSlice from '@/store/messagesSlice'

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    // Свойство auth будет внутри объекта общего состояния: state.autj
    auth: authReducer,
    channels: channelsSlice,
    messages: messagesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
})

export default store
