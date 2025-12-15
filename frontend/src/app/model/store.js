import { configureStore } from '@reduxjs/toolkit'
import authReducer from '@/store/authSlice'
import channelsSlice from '@/store/channelsSlice'
import messagesSlice from '@/store/messagesSlice'

const store = configureStore({
  reducer: {
    // Свойство auth будет внутри объекта общего состояния: state.autj
    auth: authReducer,
    channels: channelsSlice,
    messages: messagesSlice,
  },
})

export default store
